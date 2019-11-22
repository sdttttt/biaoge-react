import React , {useState} from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import styles from './register.css';
import { WrappedFormUtils } from 'antd/es/form/Form';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

interface IProps {
  handleSubmit: (e: any) => void;
  form: WrappedFormUtils;
}

const RegistrationView: React.FC<IProps> = (props: IProps) => {

  const { getFieldDecorator } = props.form;

  /*
  * username field
  * */
  const username: React.ReactNode = getFieldDecorator('username' , {
    rules: [
      { required: true , message: '你怎么了' }
    ]
  })(
    <Input
      prefix={<Icon type='user' />}
      placeholder='Username'
    />
  );

  const password: React.ReactNode = getFieldDecorator('password' , {
    rules: [
      { required: true , message: '别这样。' }
    ]
  })(
    <Input
      prefix={<Icon type='key' />}
      placeholder='Password'
    />
  );

  const passwordAgain: React.ReactNode = getFieldDecorator('repassword' , {
    rules: [
      { required: true , message: '你这个提交就提交了马勒戈壁的' }
    ]
  })(
    <Input
      prefix={<Icon type='key' />}
      placeholder='RePassword'
    />
  );

  const fieldArray: Array<React.ReactNode> = [
    username,
    password,
    passwordAgain
  ];

  return (
    <div className={styles.regBox}>
      <Form onSubmit={props.handleSubmit}>
        {fieldArray.map( (field ,index ) =><Form.Item key={index} >{field}</Form.Item>)}
        <Button htmlType='submit' type='primary' > 走，我们去探险 </Button>
      </Form>
    </div>
  );
}

export default RegistrationView;
