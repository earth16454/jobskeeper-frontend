import { useAppSelector } from '@/hooks/useStore';
import { Avatar, Flex, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Text } = Typography;

const ProfileWrapper = styled(Flex)`
  padding-block: 2rem;
  padding-inline: 1.5rem;

  text-align: center;

  .name {
  }
  .position {
    font-size: 12px;
  }
  .profile-image {
    box-shadow: 4px 4px 14px rgba(78, 78, 78, 0.2);
    margin-bottom: 0.5rem;
  }
`;

export interface ProfileProps {
  collapsed?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ collapsed }) => {
  const { name, position, img } = useAppSelector(({ auth }) => auth);
  return (
    <ProfileWrapper align="center" justify="center" vertical>
      {collapsed ? (
        <>
          <Avatar src={img} size={40} className="profile-image" />
        </>
      ) : (
        <>
          <Avatar src={img} size={100} className="profile-image" />
          <Text className="name" style={{ width: 212 }} ellipsis={{ tooltip: name }}>
            {name}
          </Text>
          <Text className="position" type="secondary">
            {position}
          </Text>
        </>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
