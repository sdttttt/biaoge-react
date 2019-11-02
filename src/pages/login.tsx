import React from 'react';
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

@Form.create({ name: 'login' })
export default class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault();

    (this.props as any).form.validateFields((err, values) => {
      if (err) {
        console.log("fuck you", values);
      } else {
        console.log('OK' , values);
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
