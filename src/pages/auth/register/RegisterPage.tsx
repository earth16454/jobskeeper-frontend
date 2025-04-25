import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import { RegisterFormInterface } from '../interface';
import { useNavigate } from 'react-router';

const { Link } = Typography;
const { Content, AuthFormWrapper } = AuthLayout;

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterFormInterface>();

  const onFinish = (value: RegisterFormInterface) => {
    console.log('value:', value);
  };

  return (
    <AuthLayout>
      <Content>
        <AuthFormWrapper>
          <Typography.Title level={2}>Register</Typography.Title>
          <Form<RegisterFormInterface> form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter a valid email address' }]}
            >
              <Input placeholder="Email"></Input>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required' }]}>
              <Input.Password placeholder="Password"></Input.Password>
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Confirm Password is required' }]}
            >
              <Input.Password placeholder="Password"></Input.Password>
            </Form.Item>
            <Form.Item style={{ marginTop: '2rem' }}>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
            <Typography>
              Already Registered? <Link onClick={() => navigate('/login')}>Login</Link>
            </Typography>
          </Form>
        </AuthFormWrapper>
      </Content>
    </AuthLayout>
  );
};

export default RegisterPage;
