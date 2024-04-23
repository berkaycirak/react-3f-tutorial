import { BackSide } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Scene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  useEffect(() => {
    cameraRef.current.lookAt(0, 0, 0);
  }, []);
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 2, 3]} ref={cameraRef} />
      <CameraControls
        maxAzimuthAngle={degToRad(90)}
        minAzimuthAngle={degToRad(-90)}
        maxPolarAngle={degToRad(90)}
      />
      <Environment files='deneme.hdr' background blur={0.3} />
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1]} />
        <meshStandardMaterial color='blue' />
      </mesh>
      <mesh rotation={[degToRad(90), 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color='green' side={BackSide} />
      </mesh>
      <ambientLight intensity={1} />
      <spotLight position={[-1, 2, 0]} intensity={50} castShadow />
    </>
  );
};

export default Scene;
