import React from 'react';
import { Form } from 'antd';
import RegistrationView from '../components/Register'

const RegistrationForm: React.FC = (props: any) => {


  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <RegistrationView handleSubmit={handleSubmit} form={props.form} />
  );
}

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register
