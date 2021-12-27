/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2021-12-25 17:01:36
 */
import React from 'react';
import LazyImg from './components/LazyImg';
import './index.scss';

const imgList = [
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
];

const page9: React.FC = () => {
  console.log('page9: ');

  return (
    <div className="page9">
      {imgList.map((e) => (
        <LazyImg key={e} url={e} />
      ))}
    </div>
  );
};

export default page9;
