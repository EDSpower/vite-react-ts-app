/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-06-02 13:56:22
 */
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import './index.scss';

const page12: React.FC = () => {
  console.log('page12: ');
  useEffect(() => {
    let mixer: THREE.AnimationMixer;
    const clock = new THREE.Clock();
    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 2, 8);

    // 创建渲染画布
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;

    // dom
    const canvasDom = document.querySelector('.canvas');
    if (canvasDom) {
      canvasDom.appendChild(renderer.domElement);
    }

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // todo 加载光线
    // const ambLight = new THREE.AmbientLight(0xbfe3dd, 0.5);
    // const pointLight = new THREE.PointLight(0xbfe3dd, 0.8);
    // const directionalLight = new THREE.DirectionalLight(0xbfe3dd, 0.5);
    // pointLight.position.set(100, 10, 0);
    // pointLight.receiveShadow = true;
    // scene.add(ambLight);
    // scene.add(pointLight);
    // scene.add(directionalLight);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('node_modules/three/examples/js/libs/draco/gltf/');

    // 加载glt 模型
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      'src/static/LittlestTokyo.glb',
      (gltf) => {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        console.log('gltf: ', gltf);
        mixer.clipAction(gltf.animations[0]).play();

        animate();
      },
      undefined,
      (e) => {
        console.error(e);
      },
    );

    // // 正方体
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    // 适应屏幕变化
    window.onresize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // 帧动画
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      renderer.render(scene, camera);
    };
  }, []);

  return (
    <div className="page12">
      <div className="canvas" />
    </div>
  );
};

export default page12;
