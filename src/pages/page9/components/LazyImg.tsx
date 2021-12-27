/*

 * @Author: EDSPower

 * @Email: 766782971@qq.com

 * @Date: 2021-12-25 16:11:37

 * @Description:

 * @LastEditors: EDSPower

 * @LastEditTime: 2021-12-25 17:01:38

 */

import React, { useEffect, useRef, useState } from 'react';

const LazyImg = (props: { url: string }) => {
  const ref = useRef(undefined);
  const [showFlag, setshowFlag] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (changes) => {
          for (const change of changes) {
            // Unclipped area of root

            // 根元素的矩形区域信息，即为getBoundingClientRect方法返回的值

            console.log('根元素的矩形区域信息，即为getBoundingClientRect方法返回的值========>11', change.rootBounds);

            // target.boundingClientRect()

            // 目标元素的矩形区域的信息

            console.log('目标元素的矩形区域的信息=======>22', change.boundingClientRect);

            // boundingClientRect, clipped by its containing block ancestors,

            // and intersected with rootBounds

            // 目标元素与视口（或根元素）的交叉区域的信息

            console.log('目标元素与视口（或根元素）的交叉区域的信息======>33', change.intersectionRect);

            // Ratio of intersectionRect area to boundingClientRect area

            // 目标元素的可见比例，即intersectionRect占boundingClientRect的比例，

            // 完全可见时为1，完全不可见时小于等于0
            console.log('完全可见时为1，完全不可见时小于等于0=======>44', change.intersectionRatio);
            if (change.intersectionRatio) {
              console.log('显示');

              setshowFlag(true);
              observer.unobserve(ref.current);
            } else {
              console.log('隐藏');
              setshowFlag(false);
            }
          }
        },
        {
          rootMargin: '300px 300px 300px 300px',
        }
      );

      // Watch for intersection events on a specific target Element.

      // 对元素target添加监听，当target元素变化时，就会触发上述的回调

      // eslint-disable-next-line no-unused-expressions
      observer.observe(ref.current);
    }
  }, [ref.current]);

  return <img ref={(ele) => (ref.current = ele)} className="img_box" src={showFlag ? props.url : ''} />;
};

export default LazyImg;
