import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import _ from 'lodash';

const app = new PIXI.Application({
  width: 512,
  height: 384,
  antialias: true,
  resolution: 1,
});

const Page6: React.FC = () => {
  useEffect(() => {
    const canvasDom = document.querySelector('#canvas5');

    if (canvasDom) {
      canvasDom.appendChild(app.view);
      // 加载素材
      app.loader
        .add('bg_far', '/src/static/tiling/bg-far.png')
        .add('bg_mid', '/src/static/tiling/bg-mid.png')
        .add('wall_01', '/src/static/tiling/wall_01.png')
        .add('wall_02', '/src/static/tiling/wall_02.png')
        .add('wall_03', '/src/static/tiling/wall_03.png')
        .add('wall_04', '/src/static/tiling/wall_04.png')
        .add('wall_05', '/src/static/tiling/wall_05.png')
        .add('wall_06', '/src/static/tiling/wall_06.png')
        .add('wall_07', '/src/static/tiling/wall_07.png')
        .add('wall_08', '/src/static/tiling/wall_08.png')
        .load(loadResource);
    }
  }, []);

  const loadResource = (loader: PIXI.Loader, resources: PIXI.utils.Dict<PIXI.LoaderResource>) => {
    createBg(resources);
    createWallsList(resources);
    createText();
  };

  const createBg = (resources: PIXI.utils.Dict<PIXI.LoaderResource>) => {
    if (resources.bg_far.texture && resources.bg_mid.texture) {
      // 创建远背景
      const far = new PIXI.TilingSprite(resources.bg_far.texture, app.screen.width, app.screen.height);
      far.position.set(0, 0);
      // 创建中背景
      const mid = new PIXI.TilingSprite(resources.bg_mid.texture, app.screen.width, app.screen.height);
      mid.position.set(0, 128);
      app.ticker.add((dt) => {
        // console.log('dt: ==========>', dt);
        far.tilePosition.x -= 0.128;
        mid.tilePosition.x -= 0.64;
      });

      app.stage.addChild(far, mid);
    }
  };

  const createWallsList = (resources: PIXI.utils.Dict<PIXI.LoaderResource>) => {
    const bigContainer = new PIXI.Container();
    const lg = 10;
    const list = [];
    for (let i = 0; i < lg; i++) {
      const preOne = list[i - 1];
      const wallOne = createWalls(resources);

      if (preOne) {
        wallOne.position.x = bigContainer.width + 64;
      }

      bigContainer.addChild(wallOne);
      list.push(wallOne);
    }
    app.ticker.add((dt) => {
      bigContainer.position.x -= 3;
    });
    app.stage.addChild(bigContainer);
  };

  const createWalls = (resources: PIXI.utils.Dict<PIXI.LoaderResource>) => {
    // 创建街台
    const SliceType = {
      FRONT: 'wall_01',
      BACK: 'wall_05',
      STEP: 'wall_04',
      WINDOW: ['wall_02', 'wall_03', 'wall_06', 'wall_07', 'wall_08'],
    };

    const SliceWidth = 64;

    const randomHeight = _.random(0, 50);

    const wallContainer = new PIXI.Container();

    const wallsLength = _.random(5, 10);

    for (let i = 1; i <= wallsLength; i++) {
      let wallStr = '';
      if (i === 1) {
        wallStr = SliceType.FRONT;
      } else if (i === wallsLength) {
        wallStr = SliceType.BACK;
      } else {
        const randomIndex = _.random(0, 4);
        wallStr = SliceType.WINDOW[randomIndex];
      }

      const ele = resources[wallStr].texture;
      if (ele) {
        const spring = new PIXI.Sprite(ele);
        spring.position.set(SliceWidth * (i - 1), app.screen.height - spring.height + randomHeight);
        console.log('height', app.screen.height - spring.height + randomHeight);
        wallContainer.addChild(spring);
      }
    }

    return wallContainer;
  };

  const createText = () => {
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
    text.position.set(app.screen.width / 2, text.height);

    app.stage.addChild(text);
  };

  return <div id="canvas5">page6</div>;
};

export default Page6;
