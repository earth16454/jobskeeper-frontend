import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Profile from './Profile';
import { useNavigate } from 'react-router';
import { useJKAppContainerContext } from '../jk-app-container/context/JKAppContainerContext';
import styled from 'styled-components';

const { Sider } = Layout;

const SiderStyled = styled(Sider)`
  background-color: #fff;
`;

const JKSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { sidebarCollapsed } = useJKAppContainerContext();
  const menuItems: MenuProps['items'] = [
    {
      key: 'dashboard',
      icon: React.createElement(UserOutlined),
      label: 'Dashboard',
      onClick: () => {
        navigate('/home');
      },
    },
    {
      key: 'MyJobApplication',
      icon: React.createElement(UserOutlined),
      label: 'My Job Application',
      onClick: () => {
        navigate('/my-job-application');
      },
    },
  ];
  return (
    <>
      <SiderStyled width={260} trigger={null} collapsible collapsed={sidebarCollapsed}>
        <Profile collapsed={sidebarCollapsed} />
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems}
        ></Menu>
      </SiderStyled>
    </>
  );
};

export default JKSidebar;
