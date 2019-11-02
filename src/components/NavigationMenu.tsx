import React from 'react';
import { Menu , Icon  } from 'antd';

interface IProps {
  theme?: string;
}

const NavigationMenu: React.FC<IProps> = (props: IProps) =>{

  return (
    <Menu  mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Login
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
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
