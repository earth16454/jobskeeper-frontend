import React from 'react';
import { Avatar, Button, Flex, Layout, Popover, Spin, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useJKAppContainerContext } from '../jk-app-container/context/JKAppContainerContext';
import styled from 'styled-components';
import { useAppSelector } from '@/hooks/useStore';
import JKAccountInformation from '../js-account-information';

const { Header } = Layout;

const HeaderStyled = styled(Header)<{ $bgColor: string }>`
  padding-inline: 1rem;
  background-color: ${(props) => props.$bgColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const JKHeader: React.FC = () => {
  const { name, img } = useAppSelector(({ auth }) => auth);
  const { sidebarCollapsed, setSidebarCollapsed } = useJKAppContainerContext();
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <HeaderStyled $bgColor={colorBgLayout}>
        <Button
          type="text"
          icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{
            fontSize: '16px',
          }}
        />
        <Popover
          placement="bottomRight"
          content={<JKAccountInformation />}
          trigger="click"
          styles={{
            body: { width: 280 },
            root: { inset: '64px 16px auto auto' },
          }}
        >
          <Flex align="center" gap={8}>
            <Typography>{name}</Typography>
            <Spin spinning={isLoading} size="small">
              <Avatar key={'profile'} size={40} src={img} style={{ cursor: 'pointer' }} />
            </Spin>
          </Flex>
        </Popover>
      </HeaderStyled>
    </>
  );
};

export default JKHeader;
