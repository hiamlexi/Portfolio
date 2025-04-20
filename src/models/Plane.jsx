// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from '../assets/3d/plane.glb' 

const Plane = ({isRotating, ...props}) => {
  const { scene, animations } = useGLTF(planeScene)
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>

      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;