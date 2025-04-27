import AuthLayout from '@/components/auth/AuthLayout';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React from 'react';
import { LoginFormInterface } from '../interface';
import { useNavigate } from 'react-router';
import { setCurrentRole } from '@/store/slices/accountSlice';
import { useAppDispatch } from '@/hooks/useStore';
import useCheckLogin from '@/hooks/useCheckLogin';

const { Link, Title } = Typography;
const { Content, AuthFormWrapper } = AuthLayout;

const LoginPage: React.FC = () => {
  const [form] = Form.useForm<LoginFormInterface>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { currentRole } = useAppSelector(({ auth }) => auth);

  const onFinish = (value: LoginFormInterface) => {
    console.log('value:', value);
    dispatch(setCurrentRole({ name: 'member', code: 'MEMBER' }));
  };

  useCheckLogin();

  return (
    <AuthLayout>
      <Content>
        <AuthFormWrapper>
          <Title level={2}>Login</Title>
          <Form<LoginFormInterface> form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter a valid email address' }, { type: 'email' }]}
            >
              <Input placeholder="Email"></Input>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required' }]}>
              <Input.Password placeholder="Password"></Input.Password>
            </Form.Item>
            <Form.Item<LoginFormInterface> name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item style={{ marginTop: '1rem' }}>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
            <Typography>
              Need an account? <Link onClick={() => navigate('/register')}>Sign up</Link>
            </Typography>
          </Form>
        </AuthFormWrapper>
      </Content>
    </AuthLayout>
  );
};

export default LoginPage;
