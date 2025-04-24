import React from 'react';
import { Col, Spin, SpinProps } from 'antd';

const LoadingComponent: React.FC = ({ style = {}, props }: { style?: React.CSSProperties; props?: SpinProps }) => {
  return (
    <Col
      span={24}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        ...style,
      }}
    >
      <Spin {...props} />
    </Col>
  );
};

export default LoadingComponent;
