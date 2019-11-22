import React from 'react';
import { Form, notification ,Button } from 'antd';
import RegistrationView from '../components/Register'

const RegistrationForm: React.FC = (props: any) => {



  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {

        const key = '' + Date.now()

        const noteBtn = (
          <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Confirm
          </Button>
        )

        notification.success({
          message: "We Succeeded !",
          description:
            `村里来了一位年轻人，这位年轻人是 ${values.username} `,
          btn: noteBtn,
          key,
        });
      }
    });
  };

  return (
    <RegistrationView handleSubmit={handleSubmit} form={props.form} />
  );
}

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register
