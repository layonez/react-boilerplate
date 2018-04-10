import React, {Component} from 'react';
import MainLayout from 'components/layouts/MainLayout';
import LoginForm from 'components/common/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <MainLayout>
        <LoginForm></LoginForm>
      </MainLayout>
    );
  }
}

export default LoginPage;
