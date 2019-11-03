import React from 'react';
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

interface IProps {
  handleSubmit;
  form;
}

const LoginView: React.FC<IProps> = (props: IProps) => {

  const { getFieldDecorator } = props.form;

  const username = getFieldDecorator('username', {
    rules: [{ required: true, message: 'Please input your username!' }],
  })(
    <Input
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="Username"
    />,
  )

  const password = getFieldDecorator('password', {
    rules: [{ required: true, message: 'Please input your Password!' }],
  })(
    <Input
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="password"
      placeholder="Password"
    />,
  )

  return (
    <div className={styles.LoginComponent}>
      <Form onSubmit={props.handleSubmit} className={styles.loginForm}>
        <Form.Item>
          {username}
        </Form.Item>
        <Form.Item>
          {password}
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

export default LoginView;
