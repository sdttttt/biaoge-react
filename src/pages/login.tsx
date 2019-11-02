import React from 'react';
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

@Form.create({ name: 'login' })
@connect(mapStateToProps,dispatchToProps)
export default class Login extends React.Component {

  public handleSubmit = e => {
    e.preventDefault();

    (this.props as any).form.validateFields((err, values) => {
      if (err) {
        console.log("fuck you", values);
      } else {
        console.log(this.props);
        (this.props as any).login(values.username);
      }
    });
  };

  public componentWillMount(){
    if (this.props.username != null && this.props.isLogin){
      router.push('/');
    }
  }

  public componentDidUpdate(){
    if (this.props.username != null && this.props.isLogin){
      router.push('/');
    }
  }

  public render() {
    return (
      <LoginView handleSubmit={this.handleSubmit} form={(this.props as any).form} />
    );
  }
}
