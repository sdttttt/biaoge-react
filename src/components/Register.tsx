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

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

interface IProps {
  handleSubmit: (e: any) => void;
  form;
}

const RegistrationView: React.FC<IProps> = (props: IProps) => {

    const [ confirmDirty , setConfirmDirty ] = useState(false);
    const [autoCompleteResult , setAutoCompleteResult ] = useState([]);


    const { getFieldDecorator } = props.form;

    const compareToFirstPassword = (_rule, value, callback) => {

      const { form } = props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    const validateToNextPassword = (_ , value, callback) => {
      const { form } = props;
      if (value && confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    const handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      setAutoCompleteResult(autoCompleteResult);
    };

    const input = getFieldDecorator('email', {
      rules: [
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ],
    })(<Input />);

    const password = getFieldDecorator('password', {
      rules: [
        {
          required: true,
          message: 'Please input your password!',
        },
        {
          validator: validateToNextPassword,
        },
      ],
    })(<Input.Password />);

    const handleConfirmBlur = e => {
      const { value } = e.target;
      setConfirmDirty(confirmDirty || !!value );
    };

    const anginPassword = getFieldDecorator('confirm', {
      rules: [
        {
          required: true,
          message: 'Please confirm your password!',
        },
        {
          validator: compareToFirstPassword,
        },
      ],
    })(<Input.Password onBlur={handleConfirmBlur} />)

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const phone = getFieldDecorator('phone', {
      rules: [{ required: true, message: 'Please input your phone number!' }],
    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const website = getFieldDecorator('website', {
      rules: [{ required: true, message: 'Please input website!' }],
    })(
      <AutoComplete
        dataSource={websiteOptions}
        onChange={handleWebsiteChange}
        placeholder="website"
      >
        <Input />
      </AutoComplete>,
    )

    const captcha = getFieldDecorator('captcha', {
      rules: [{ required: true, message: 'Please input the captcha you got!' }],
    })(<Input />)

    const agreement = getFieldDecorator('agreement', {
      valuePropName: 'checked',
    })(
      <Checkbox>
        I have read the <a href="">agreement</a>
      </Checkbox>,
    )

    return (
      <Form onSubmit={props.handleSubmit}>
        <Form.Item label="E-mail">
          {input}
        </Form.Item>
        <Form.Item label="Password" hasFeedback={true}>
          {password}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback={true}>
          {anginPassword}
        </Form.Item>
        <Form.Item label="Phone Number">
          {phone}
        </Form.Item>
        <Form.Item label="Website">
          {website}
        </Form.Item>
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {captcha}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          {agreement}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );

}

export default RegistrationView;
