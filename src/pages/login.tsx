import React, {useEffect} from 'react';
import { Form } from 'antd';
import { todoLogin } from '@/redux/action-type';
import { connect } from 'react-redux';
import router from 'umi/router';
import LoginView from '../components/Login';
import { loginUserApi } from '@/http/UserHttp';
import { noticeError, noticeSuccess } from '@/util/tip';

/*
  将 state对象 映射到 Props 上
*/
const mapStateToProps = (state) => state;

const dispatchToProps = dispatch => {
  return {
    login: username => {
      dispatch(todoLogin(username));
    }
  }
};

const LoginForm: React.FC = (props: any) => {

  const handleSubmit = e => {
    e.preventDefault();

    (props as any).form.validateFields((err, values) => {
      if (!err) {
        loginUserApi(values.username, values.password).then(req => {
          if (req.data.error) {
            noticeError('Oh No! ', req.data.error);
          } else {
            // Redux action
            (props as any).login(values.username);
            noticeSuccess('Welcome!', 'this application in testing environment');
          }
        }).catch(error => noticeError('哇，表哥炸了！', '阿福打败了表哥'));
      }
    });
  };

  useEffect( () => {
    if (props.userStatus.isLogin) {
      router.push('/');
    }
  }, [props.userStatus.isLogin]);

    return (
      <LoginView handleSubmit={handleSubmit} form={(props as any).form} />
    );
};

const Login = connect(mapStateToProps,dispatchToProps)(Form.create({name: 'login'})(LoginForm));

export default Login;
