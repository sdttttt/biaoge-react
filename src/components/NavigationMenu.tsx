import React , { useEffect } from 'react';
import router from 'umi/router';
import { Menu , Icon  } from 'antd';
import { connect } from 'react-redux';

interface IProps {
  theme?: string;
}

const mapStateToProps = (state) => state;

const NavigationMenuView: React.FC<IProps> = (props: IProps) => {
  return (
    <Menu  mode="horizontal">
        <Menu.Item onClick={()=>{router.push('/login')}} key="login" disabled={props.isLogin} >
          <Icon type="user" />
          Login
        </Menu.Item>
        <Menu.Item onClick={()=>{router.push('/')}} key="home">
          <Icon type="bank" />
          Home
        </Menu.Item>
        <Menu.Item onClick={()=>{router.push('/register')}} key="app">
          <Icon type="user-add" />
          Register
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="#"  rel="noopener noreferrer">
            {props.username}
          </a>
        </Menu.Item>
      </Menu>
  );
}

/*
  连接到 Redux 上
*/
const NavigationMenu = connect(mapStateToProps)(NavigationMenuView);

export default NavigationMenu;
