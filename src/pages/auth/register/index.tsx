import React from 'react';
import RegisterContextProvider from './context/RegisterContextProvider';
import RegisterPage from './RegisterPage';

const index: React.FC = () => {
  return (
    <RegisterContextProvider>
      <RegisterPage />
    </RegisterContextProvider>
  );
};

export default index;
