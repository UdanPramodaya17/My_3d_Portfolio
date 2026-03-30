import React, { useRef, useEffect } from 'react';
import birdScene from '../assets/3d/bird.glb'; // Fixed typo from birdScence
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    // FIXED: Changed "animation" to "animations" (plural)
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    
    // FIXED: Changed "action" to "actions" (plural)
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        // Ensure 'Take 001' is the actual name of your animation
        if(actions['Take 001']) {
            actions['Take 001'].play();
        }
    }, [actions]);

    // FIXED: Changed "Camera" to lowercase "camera"
    useFrame(({ clock, camera }) => {
        // FIXED: Changed += to = so the bird bobs up and down instead of flying off screen
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 0;
        }

        if (birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird