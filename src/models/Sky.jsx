import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* Pass sky.scene directly to the object prop */}
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky