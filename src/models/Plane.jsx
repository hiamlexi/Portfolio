import React from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb' 

const Plane = (props) => {
  const { scene, animations } = useGLTF(planeScene)

  return (
    <primitive object={scene} {...props} />
  )
}

export default Plane
