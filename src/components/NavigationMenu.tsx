import React from 'react';
import router from 'umi/router';
import { Menu , Icon  } from 'antd';

interface IProps {
  theme?: string;
}

const NavigationMenu: React.FC<IProps> = (props: IProps) =>{

  return (
    <Menu  mode="horizontal">
        <Menu.Item onClick={()=>{router.push('/login')}} key="login">
          <Icon type="user" />
          Login
        </Menu.Item>
        <Menu.Item onClick={()=>{router.push('/')}} key="home">
          <Icon type="bank" />
          Home
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
  );
}

export default NavigationMenu;
