import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';

const app = new PIXI.Application({
  width: 640,
  height: 640,
  antialias: true,
  resolution: 1,
});

const Page4: React.FC = () => {
  const appRef = useRef<PIXI.Application>(app);

  useEffect(() => {
    const canvasDom = document.querySelector('#canvas4');
    if (canvasDom) {
      canvasDom.appendChild(appRef.current.view);
      const containerObj1 = addContainer1();
      appRef.current.stage.addChild(containerObj1);
      // 画龙
      appRef.current.loader.add('dragon', '/src/static/dragon/dragon.json').load((loader, res) => addDragon(loader, res, containerObj1));
      // gifSprite.pivot.set(gifSprite.width / 2, gifSprite.height / 2);

      appRef.current.ticker.add((delta) => {});
    }
  }, []);

  const addContainer1 = () => {
    const containerObj1 = new PIXI.Container();
    setTimeout(() => {
      console.log('containerObj1.width: ', containerObj1.width, containerObj1.height);
    }, 1000);
    const gifSprite = addGif();
    const circle = addCircle();
    containerObj1.addChild(gifSprite, circle);
    // containerObj1.setChildIndex(gifSprite, 1);
    return containerObj1;
  };

  const addDragon = (loader: PIXI.Loader, res: PIXI.utils.Dict<PIXI.LoaderResource>, container: PIXI.Container) => {
    const dragon = new Spine(res.dragon.spineData);

    dragon.position.set(300, 300);

    container.addChild(dragon);
    if (dragon.state.hasAnimation('flying')) {
      // run forever, little boy!
      dragon.state.setAnimation(0, 'flying', true);
      // dont run too fast
      dragon.state.timeScale = 1;
    }
  };

  const addGif = () => {
    app.loader.add('big_img', '/src/static/big.gif');

    const sprite = new PIXI.Sprite(PIXI.Texture.from('/src/static/big.gif'));
    // sprite.anchor.set(0.5);
    // sprite.position.set(appRef.current.screen.width / 2, appRef.current.screen.height / 2);
    sprite.tint = 0x00ff00;
    appRef.current.stage.addChild(sprite);
    return sprite;
  };

  const addCircle = () => {
    const circle = new PIXI.Graphics();
    circle.lineStyle(2, 0xfeeb77, 1);
    circle.beginFill(0xff0000);
    circle.drawCircle(100, 100, 50);
    circle.alpha = 0.5;
    circle.interactive = true;
    circle.buttonMode = true;
    circle.on('pointerdown', (event) => {
      console.log('event: ', event);
      alert('pointerdown!');
    });

    appRef.current.stage.addChild(circle);
    return circle;
  };

  return <div id="canvas5">page4</div>;
};

export default Page4;
