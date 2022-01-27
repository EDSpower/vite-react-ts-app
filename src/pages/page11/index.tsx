/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-01-27 16:23:09
 */
import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import './index.scss';

const imgList = [
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
  'https://oss.86skins.com/mall/61c2df1f99e49f00565635b7.png',
  'https://static.airmart.top/goods_details/Z61.png',
  'https://oss.86skins.com/mall/6178f3f11a6ce90050153b00.png',
  'https://oss.86skins.com/mall/61c2ebfb99e49f00565635b9.jpg',
  'https://oss.86skins.com/mall/61693cd548ebee00508a48c0.png',
  'https://oss.86skins.com/mall/617bbe4348aad9004f927d9c.png',
];

const page11: React.FC = () => {
  console.log('page11: ');

  const props = useSpring({
    to: { x: -200 * imgList.length + 1200 },
    from: { x: 0 },
    delay: 1000,
    config: { duration: 7000, easing: easings.easeInOutQuart },
  });

  return (
    <div className="page11">
      <div className="content_box">
        <animated.div style={props} className="move_wrap">
          {imgList.map((e, i) => (
            <img className="move_item" key={i} src={e} />
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default page11;
