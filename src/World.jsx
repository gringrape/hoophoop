import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

export default function World() {
  const myMesh = useRef();

  useFrame(() => {
    myMesh.current.position.z += 0.01;
  });

  const handleClick = () => {
    myMesh.current.position.x += 0.1;
  };

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh
        ref={myMesh}
        onClick={handleClick}
      >
        <sphereGeometry args={[2, 20, 20]} />
        <meshBasicMaterial color="royalblue" />
      </mesh>
    </>
  );
}
