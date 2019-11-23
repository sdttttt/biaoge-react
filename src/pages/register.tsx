import React, { FormEvent } from 'react';
import { Form, notification ,Button } from 'antd';
import RegistrationView from '../components/Register'
import * as UserHttp from '@/http/UserHttp';
import { noticeError, noticeSuccess } from '@/util/tip';

const RegistrationForm: React.FC = (props: any) => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      // 验证是否存在錯誤
      if (!err) {
        UserHttp.RegisterUserApi(values.username , values.password , values.repassword).then( req => {
          // 请求成功了？
          if (req.data.error){
            noticeError("Sorry. We Failed ...",`${req.data.error}`)
          } else {
            noticeSuccess("We Succeeded !",`村里来了一位年轻人，这位年轻人是 ${values.username}`);
          }

        });


      }
    });
  };

  return (
    <RegistrationView handleSubmit={handleSubmit} form={props.form} />
  );
};

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register
