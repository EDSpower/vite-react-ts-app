/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2021-11-19 16:07:38
 */
import React from 'react';
import LazyLoad from 'react-lazyload';
import './index.scss';

const Page7: React.FC = () => {
  console.log('Page7: ');

  return (
    <div className="page8">
      <ul className="container">
        <div className="box">
          {Array(12)
            .fill('$')
            .map((e) => (
              <LazyLoad once overflow height={100} key={e}>
                <li className="item">{e}</li>
              </LazyLoad>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default Page7;
