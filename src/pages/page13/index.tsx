/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-03-01 13:31:15
 */
import React, { useRef, useState } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import './index.scss';

const Box = (props: MeshProps) => {
  const ref = useRef();
  const [hover, sethover] = useState(false);
  const [click, setclick] = useState(false);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={click ? 1.5 : 1} 
      onClick={() => setclick((old) => !old)}
      onPointerOver={() => sethover(true)}
      onPointerOut={() => sethover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'orange' : 'purple'} />
    </mesh>
  );
};

const page13: React.FC = () => {
  console.log('page13: ');

  return (
    <div className="page13">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} /> 
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default page13;
