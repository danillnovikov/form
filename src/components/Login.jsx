import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';

const Login = () => {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="username">
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 16,
        }}
      >
        <Button>Войти</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
