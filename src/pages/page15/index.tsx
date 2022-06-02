/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-06-02 15:24:48
 */
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './index.scss';

const page15: React.FC = () => {
  useEffect(() => {
    drawCanvas();
  }, []);

  const drawCanvas = () => {
    let container;

    let camera: any; let scene: any; let 
renderer: any;

    let object: any;

    init();
    animate();

    function init() {
      container = document.createElement('div');
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 500;

      // scene

      scene = new THREE.Scene();

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      camera.add(pointLight);
      scene.add(camera);

      // manager

      function loadModel() {
        object.traverse((child: any) => {
          if (child.isMesh) child.material.map = texture;
        });

        object.position.x = 0;
        object.position.y = 0;
        object.position.z = 0;
        // object.rotation.x = 60;

        scene.add(object);
      }

      const manager = new THREE.LoadingManager(loadModel);

      // texture

      const textureLoader = new THREE.TextureLoader(manager);
      const texture = textureLoader.load('https://csgo-java.c5game.com/3d/202101/211854/20455515311_1.png');

      // model

      function onProgress(xhr: any) {
        if (xhr.lengthComputable) {
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log(`model ${Math.round(percentComplete, 2)}% downloaded`);
        }
      }

      function onError() {}

      const loader = new OBJLoader(manager);
      loader.load('https://csgo-java.c5game.com/csgo/obj/u-u-weapon_ak47.obj-5fa907ac83d12.obj', (obj) => {
        object = obj;
      }, onProgress, onError);

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // 控制器
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0.5, 0);
      controls.update();
      controls.enablePan = false;
      controls.enableDamping = true;

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
  };

  return (
    <div className="page15">
      <div className="canvas" />
    </div>
    );
};

export default page15;
