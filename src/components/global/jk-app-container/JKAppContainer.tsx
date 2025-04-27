import React, { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import LoadingComponent from '@/components/loading/LoadingComponent';
import JKAppContainerContextProvider from './context/JKAppContainerContextProvider';

const JKSidebar = lazy(() => import('../jk-sidebar'));
const JKHeader = lazy(() => import('../jk-header'));

const { Content } = Layout;

export interface JKAppContainerProps {
  children?: React.ReactNode;
}

const JKAppContainer: React.FC<JKAppContainerProps> = ({ children }) => {
  return (
    <JKAppContainerContextProvider>
      <Suspense fallback={<LoadingComponent />}>
        <Layout>
          <JKSidebar />
          <Layout>
            <JKHeader />
            <Content>
              <div id="jk-layout-content-main">{children}</div>
            </Content>
          </Layout>
        </Layout>
      </Suspense>
    </JKAppContainerContextProvider>
  );
};

export default JKAppContainer;
