import React from 'react';
import RegisterContext from './RegisterContext';
interface RegisterContextProviderProps {
  children: React.ReactNode;
}

const RegisterContextProvider: React.FC<RegisterContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  return <RegisterContext.Provider value={{ loading, setLoading }}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
