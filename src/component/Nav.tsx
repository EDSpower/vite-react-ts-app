/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-08-25 16:33:47
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-03-01 13:35:10
 */
import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { MenuInfo } from '../../node_modules/rc-menu/lib/interface';

const Nav: React.FC = () => {
  const [current, changeCurrent] = useState<string>('page1');
  const history = useHistory();

  const handleClick = (e: MenuInfo) => {
    const key = String(e.key);
    history.push(key);
    changeCurrent(key);
  };

  return (
    <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="page1" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="page2" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key="page3" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
      <Menu.Item key="page4" icon={<AppstoreOutlined />}>
        PIXI_dragon
      </Menu.Item>
      <Menu.Item key="page5" icon={<AppstoreOutlined />}>
        PIXI_AnimateSpring
      </Menu.Item>
      <Menu.Item key="page6" icon={<AppstoreOutlined />}>
        PIXI_TilingSpring
      </Menu.Item>
      <Menu.Item key="page7" icon={<AppstoreOutlined />}>
        Motion
      </Menu.Item>
      <Menu.Item key="page8" icon={<AppstoreOutlined />}>
        LazyImg
      </Menu.Item>
      <Menu.Item key="page9" icon={<AppstoreOutlined />}>
        SelfLazyImg
      </Menu.Item>
      <Menu.Item key="page10" icon={<AppstoreOutlined />}>
        fabric
      </Menu.Item>
      <Menu.Item key="page11" icon={<AppstoreOutlined />}>
        tranformX
      </Menu.Item>
      <Menu.Item key="page12" icon={<AppstoreOutlined />}>
        threejs
      </Menu.Item>
      <Menu.Item key="page13" icon={<AppstoreOutlined />}>
        threejs-react
      </Menu.Item>
      <Menu.Item key="page14" icon={<AppstoreOutlined />}>
        threejs-react【二】
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
