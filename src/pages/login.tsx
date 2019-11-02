import React from 'react';
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { LOGIN } from '../redux/action-type';
import { connect } from 'react-redux';
import { UserState } from '../redux/state';

/*
  将 state对象 映射到 Props 上
*/
const stateToProps: (state: UserState) => UserState = (state) => {
  return {
    isLogin: state.isLogin,
    username: state.username
  }
}

const dispatchToProps = dispatch => {
  return {
    login: username => {
      dispatch({
        type: LOGIN,
        data: username
      });
    }
  }
}

@Form.create({ name: 'login' })
@connect(stateToProps,dispatchToProps)
export default class Login extends React.Component {

  public handleSubmit = e => {
    e.preventDefault();

    (this.props as any).form.validateFields((err, values) => {
      if (err) {
        console.log("fuck you", values);
      } else {
        console.log(this.props);
        this.props.login(values.username);
      }
    });

  };

  public render() {

    const { getFieldDecorator } = (this.props as any).form;

    return (
      <div className={styles.LoginComponent}>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>

            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <br />
            Or <a href="">👉 register now! </a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
