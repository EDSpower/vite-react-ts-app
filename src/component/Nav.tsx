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
    </Menu>
  );
};

export default Nav;
