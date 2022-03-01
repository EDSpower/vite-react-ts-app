/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-03-01 14:37:03
 */
import React, { useRef, useState, Suspense } from 'react';
// import { OrbitControls } from '@react-three/drei';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import './index.scss';

const Model = (props) => 
  // const gltfObj = useGLTF('src/static/LittlestTokyo.glb');
  // return <primitive object={gltfObj} />;
   (
     <mesh>
       <boxGeometry args={[1, 1, 1]} />
       <meshStandardMaterial color="orange" />
     </mesh>
);

// const Controls = () => <OrbitControls enablePan enableZoom enableRotate />;

const page14: React.FC = () => {
  console.log('page14: ');

  return (
    <div className="page14">
      <Canvas camera={{ position: [0, -10, 0], fov: 10 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#fff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback="loading...">
          <group position={[0, 10, 0]}>
            <Model />
          </group>
        </Suspense>
        {/* <Controls /> */}
      </Canvas>
    </div>
  );
};

export default page14;
