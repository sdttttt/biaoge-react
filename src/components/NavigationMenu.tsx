import React from 'react';
import router from 'umi/router';
import { Menu , Icon  } from 'antd';
import { connect } from 'react-redux';

interface IProps {
  theme?: string;
}

const mapStateToProps = (state) => state;

const NavigationMenuView: React.FC<IProps> = (props: IProps | any) => {

    const toLogin = () => {router.push('/login')};
    const toHome = () => { router.push('/'); };
    const toRegister = () => { router.push('/register'); };

  return (
    <Menu  mode="horizontal">
      <Menu.Item onClick={toLogin} key="login" disabled={props.userStatus.isLogin}>
          <Icon type="user" />
          Login
        </Menu.Item>
        <Menu.Item onClick={toHome} key="home">
          <Icon type="bank" />
          Home
        </Menu.Item>
        <Menu.Item onClick={toRegister} key="app">
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
