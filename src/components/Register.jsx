import React from 'react';
import './Register.css';
import { Form, Checkbox, Button, Radio, Input, Row, Col } from 'antd';

const Register = () => {
  return (
    <Form
      name="validate"
      labelCol={{
        span: 4,
      }}
    >
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item name="radio-group" label="Radio">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="checkbox-group" label="Checkbox">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox
                value="A"
                style={{
                  lineHeight: '32px',
                }}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="B"
                style={{
                  lineHeight: '32px',
                }}
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="C"
                style={{
                  lineHeight: '32px',
                }}
              >
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="D"
                style={{
                  lineHeight: '32px',
                }}
              >
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="E"
                style={{
                  lineHeight: '32px',
                }}
              >
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="F"
                style={{
                  lineHeight: '32px',
                }}
              >
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 10,
        }}
      >
        <Button>Зарегистрировать</Button>
      </Form.Item>
    </Form>
  );
};

export default Register;

// <div className="register">
// <h1>Регистрация</h1>
// </div>
