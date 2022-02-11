/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-01-28 13:46:30
 */
import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import LazyLoad, { forceCheck } from 'react-lazyload';
import './index.scss';

const imgList = [
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://static.airmart.top/mall/61e9099d4ae43a0060e26854.png',
  'https://static.airmart.top/mall/61e8dab577b49a0056d679b6.png',
  'https://static.airmart.top/mall/61e90230d83c0b004f405b7e.png',
  'https://static.airmart.top/mall/61ea4affb282660059fdc593.png',
  'https://static.airmart.top/mall/61e5360dd2314e00577b1c52.png',
  'https://static.airmart.top/mall/61eb7a21a439bb00580042f8.png',
  'https://static.airmart.top/mall/61eb7a0fbf605700519e1a5d.png',
  'https://static.airmart.top/mall/61db9b1be6151a0050d85d1e.png',
  'https://static.airmart.top/mall/61e8d4f5d2314e00577b1c80.png',
];

const page11: React.FC = () => {
  console.log('page11: ');

  const props = useSpring({
    to: { y: -200 * imgList.length + 1200 },
    from: { y: 0 },
    delay: 1000,
    config: { duration: 7000, easing: easings.easeInOutQuart },
    onChange: (val) => {
      console.log('val: ', val);
      forceCheck();
    },
  });

  return (
    <div className="page11">
      <div className="content_box">
        <animated.div style={props} className="move_wrap">
          {imgList.map((e, i) => (
            <LazyLoad once height={200} key={e + i}>
              <img className="move_item" src={e} />
            </LazyLoad>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default page11;
