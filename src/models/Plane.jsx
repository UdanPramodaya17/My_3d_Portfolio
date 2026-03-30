import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei'

function Plane({ isRotating, ...props }) {
    const ref = useRef();
    // FIXED: Changed "animation" to "animations"
    const { scene, animations } = useGLTF(planeScene);
    // FIXED: Changed "action" to "actions"
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        // Double-check your animation name! If 'Take 001' fails, it might be named something else.
        if (isRotating) {
            actions['Take 001']?.play();
        } else {
            actions['Take 001']?.stop();
        }
    }, [isRotating, actions]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane