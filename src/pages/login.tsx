import React, {useEffect} from 'react';
import { Form } from 'antd';
import { LOGIN } from '../redux/action-type';
import { connect } from 'react-redux';
import router from 'umi/router';
import LoginView from '../components/Login';

/*
  将 state对象 映射到 Props 上
*/
const mapStateToProps = (state) => state

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

const LoginForm: React.FC = (props: any) => {

  const handleSubmit = e => {
    e.preventDefault();

    (props as any).form.validateFields((err, values) => {
      if (err) {
        console.log("fuck you", values);
      } else {
        console.log(props);
        (props as any).login(values.username);
      }
    });
  };

  useEffect( () => {
    if(props.isLogin) {
      router.push('/');
    }
  },[props.isLogin]);

    return (
      <LoginView handleSubmit={handleSubmit} form={(props as any).form} />
    );
}

const Login = connect(mapStateToProps,dispatchToProps)(Form.create({name: 'login'})(LoginForm));

export default Login;
