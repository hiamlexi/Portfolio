import React, { useRef, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const LowpolyFox = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const foxRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF('/lowpoly_fox.glb');

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }, [setIsRotating]);

  const handlePointerUp = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }, [setIsRotating]);

  const handlePointerMove = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isRotating) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    foxRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  }, [isRotating, viewport.width]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      foxRef.current.rotation.y += 0.05 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      foxRef.current.rotation.y -= 0.05 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  }, [isRotating, setIsRotating]);

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }, [setIsRotating]);

  useFrame(() => {
    const rotation = foxRef.current.rotation.y;
    const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      } else {
        foxRef.current.rotation.y += rotationSpeed.current;
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  return (
    <group ref={foxRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Fox_by_vladhad22@gmailcom_0'].geometry}
          material={materials['Material.001']}
          position={[0.56, -2.475, 1.051]}
          rotation={[0.06, -0.026, -0.102]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          material={materials['Material.002']}
          scale={8.404}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_0.geometry}
          material={materials.Material}
          position={[0.226, 6.994, 0.63]}
          rotation={[0, 0, -1.07]}
          scale={0.905}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_0.geometry}
          material={materials['Material.003']}
          position={[1.065, 8.218, 7.473]}
          scale={[6.285, 6.285, 3.583]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_0.geometry}
          material={materials['Material.007']}
          position={[-69.608, 16.053, 18.229]}
          scale={5.95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0.geometry}
          material={materials['Material.009']}
          position={[-30.238, 20.068, -0.925]}
          rotation={[0, 0, 0.585]}
          scale={9.607}
        />
      </group>
    </group>
  );
};

export default LowpolyFox;
