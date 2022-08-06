/*
 * @Author: EDSPower
 * @Date: 2022-08-06 17:53:07
 * @LastEditTime: 2022-08-06 18:01:09
 * @LastEditors: EDSPower
 * @Description: 
 * @FilePath: \vite-react-ts-app\src\pages\Page16\index.tsx
 * 766782971@qq.com
 */
import React, { FC, useState } from 'react';
import BetterScroll from '../../component/BetterScroll';
import './index.scss';

const Page16: FC = () => {
  const [pageData, setPageData] = useState({
    arr: 20,
    isLastPage: false,
  });

  const getAsyncList = () => new Promise((resolve) => {
      setTimeout(() => {
        setPageData((old) => ({
          ...old,
          arr: old.arr + 20,
          isLastPage: old.arr + 20 > 60,
        }));
        resolve(true);
      }, 20000);
    });

  const referAsyncList = () => new Promise((resolve) => {
      setTimeout(() => {
        setPageData((old) => ({
          ...old,
          arr: 20,
          isLastPage: old.arr + 20 > 60,
        }));
        resolve(true);
      }, 20000);
    });

  return (
    <div className="Page16">
      <BetterScroll
        pullupData={{
          pullingUpCallBack: getAsyncList,
          isLastPage: pageData.isLastPage,
        }}
        pulldownData={{
          pullingDownCallBack: referAsyncList,
        }}
      >
        <ul>
          {Array(pageData.arr)
            .fill('')
            .map((val, index) => (
              <li key={String(index)}>
                This a li itme【{index}】 <span>❤</span>
              </li>
            ))}
        </ul>
      </BetterScroll>
    </div>
  );
};

export default Page16;
