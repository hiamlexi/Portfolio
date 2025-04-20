import React from 'react'
import { useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb' // ✅ Make sure extension is correct

const Bird = (props) => {
  const { scene, animations } = useGLTF(birdScene)

  return (
    <primitive object={scene} {...props} />
  )
}

export default Bird
