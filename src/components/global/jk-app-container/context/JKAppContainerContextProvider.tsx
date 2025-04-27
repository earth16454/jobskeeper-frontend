import React from 'react';
import JKAppContainerContext from './JKAppContainerContext';

const JKAppContainerContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState<boolean>(false);

  return (
    <JKAppContainerContext.Provider value={{ sidebarCollapsed, setSidebarCollapsed }}>
      {children}
    </JKAppContainerContext.Provider>
  );
};

export default JKAppContainerContextProvider;
