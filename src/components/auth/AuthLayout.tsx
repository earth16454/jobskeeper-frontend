import { Card, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const AuthLayoutStyled = styled(Layout)`
  background: linear-gradient(107.91deg, #eaabf0 7.37%, rgb(70, 35, 233) 95.19%);
  min-height: 100vh;
`;

const AuthContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const AuthFormWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  width: 420px;

  box-shadow: 0px 0px 12px rgba(21, 11, 67, 0.5);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const AuthLayout: React.FC<React.PropsWithChildren> & {
  Content: typeof Content;
  AuthFormWrapper: typeof AuthFormWrapper;
} = ({ children }) => {
  return <AuthLayoutStyled>{children}</AuthLayoutStyled>;
};

AuthLayout.Content = AuthContent;
AuthLayout.AuthFormWrapper = AuthFormWrapper;

export default AuthLayout;
