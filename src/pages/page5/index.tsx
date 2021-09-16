import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 640,
  height: 480,
  antialias: true,
  resolution: 1,
});

const Page5: React.FC = () => {
  useEffect(() => {
    const canvasDom = document.querySelector('#canvas5');

    if (canvasDom) {
      canvasDom.appendChild(app.view);
      // 画火舞
      app.loader
        .add('bg', '/src/static/bg2.jpg')
        .add('hw_1', '/src/static/hw/hw_1.png')
        .add('hw_2', '/src/static/hw/hw_2.png')
        .add('hw_3', '/src/static/hw/hw_3.png')
        .add('hw_4', '/src/static/hw/hw_4.png')
        .add('hw_5', '/src/static/hw/hw_5.png')
        .add('hw_6', '/src/static/hw/hw_6.png')
        .add('hw_7', '/src/static/hw/hw_7.png')
        .add('hw_8', '/src/static/hw/hw_8.png')
        .add('hw_9', '/src/static/hw/hw_9.png')
        .add('hw_10', '/src/static/hw/hw_10.png')
        .add('hw_11', '/src/static/hw/hw_11.png')
        .add('hw_12', '/src/static/hw/hw_12.png')
        .add('hw_13', '/src/static/hw/hw_13.png')
        .add('hw_14', '/src/static/hw/hw_14.png')
        .add('hw_15', '/src/static/hw/hw_15.png')
        .add('hw_16', '/src/static/hw/hw_16.png')
        .add('hw_17', '/src/static/hw/hw_17.png')
        .add('hw_18', '/src/static/hw/hw_18.png')
        .add('bs_1', '/src/static/bs/bs_1.png')
        .add('bs_2', '/src/static/bs/bs_2.png')
        .add('bs_3', '/src/static/bs/bs_3.png')
        .add('bs_4', '/src/static/bs/bs_4.png')
        .add('bs_5', '/src/static/bs/bs_5.png')
        .add('bs_6', '/src/static/bs/bs_6.png')
        .add('bs_7', '/src/static/bs/bs_7.png')
        .add('bs_8', '/src/static/bs/bs_8.png')
        .add('bs_9', '/src/static/bs/bs_9.png')
        .load(loadImg);
    }
  }, []);

  const loadImg = (loader: PIXI.Loader, resources: PIXI.utils.Dict<PIXI.LoaderResource>) => {
    const hwList = [];
    const bsList = [];
    for (let i = 1; i <= 18; i++) {
      const element = resources[`hw_${i}`].texture;
      if (element) {
        hwList.push(element);
      }
    }
    for (let i = 1; i <= 9; i++) {
      const element = resources[`bs_${i}`].texture;
      if (element) {
        bsList.push(element);
      }
    }

    // // 平铺背景
    if (resources.bg.texture) {
      const tilingSprite = new PIXI.TilingSprite(resources.bg.texture, app.screen.width, app.screen.height);
      tilingSprite.tilePosition.set(-(tilingSprite.width + app.screen.width) / 2, 0);
      app.stage.addChild(tilingSprite);
      // app.ticker.add(() => {
      //   tilingSprite.tilePosition.x += 2;
      // });
    }

    // 创建火舞动画序列帧
    const hwObj = new PIXI.AnimatedSprite(hwList);
    hwObj.scale.set(1.5);
    hwObj.position.set(hwObj.width, 300);

    hwObj.animationSpeed = 0.2; // 动画播放的速度，默认为1,每秒播放60张图片
    hwObj.loop = true; // 动画是否循环
    hwObj.gotoAndPlay(1); // 从第几帧开始播放

    // 创建八神动画序列帧
    const bsObj = new PIXI.AnimatedSprite(bsList);
    bsObj.position.set(app.screen.width - bsObj.width, 300);
    bsObj.scale.set(-1.5, 1.5);
    bsObj.animationSpeed = 0.2; // 动画播放的速度，默认为1,每秒播放60张图片
    bsObj.loop = true; // 动画是否循环
    bsObj.gotoAndPlay(1); // 从第几帧开始播放

    // 创建字体
    const style = new PIXI.TextStyle({
      align: 'center',
      dropShadow: true,
      dropShadowAngle: 0.9,
      dropShadowBlur: 3,
      fill: ['#dc651c', '#f6a718', '#dc651c'],
      fillGradientType: 1,
      fontFamily: 'Impact, Charcoal, sans-serif',
      fontSize: 60,
      fontWeight: '600',
      miterLimit: 0,
      strokeThickness: 2,
      wordWrapWidth: 1000,
    });
    const text = new PIXI.Text('vs', style);
    text.anchor.set(0.5);
    text.position.set(app.screen.width / 2, 350);

    app.stage.addChild(hwObj, bsObj, text);
  };

  return <div id="canvas5">page5</div>;
};

export default Page5;
