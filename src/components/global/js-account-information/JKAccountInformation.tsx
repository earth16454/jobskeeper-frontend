import React from 'react';
import styled from 'styled-components';
import { Avatar, Col, Divider, Flex, Row, theme, Typography } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { setCurrentRole } from '@/store/slices/accountSlice';

const { Text } = Typography;

const JKAccountInformationWrapper = styled(Flex)<{ $colorPrimary: string }>`
  .account-menu-item {
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }

    span.anticon {
      margin-right: 8px;
    }
  }
`;

const JKAccountInformation: React.FC = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const { name, position, img } = useAppSelector(({ auth }) => auth);

  const handleLogout = () => {
    dispatch(setCurrentRole());
  };

  return (
    <>
      <JKAccountInformationWrapper gap={16} vertical $colorPrimary={colorPrimary}>
        <Row align={'middle'}>
          <Col span={6}>
            <Avatar src={img} size={50} />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={24}>
                <Text>{name}</Text>
              </Col>
              <Col span={24}>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {position}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider />
        <Text type="secondary" className="account-menu-item">
          <SettingOutlined />
          Setting
        </Text>
        <Text type="secondary" className="account-menu-item" onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </Text>
      </JKAccountInformationWrapper>
    </>
  );
};

export default JKAccountInformation;
