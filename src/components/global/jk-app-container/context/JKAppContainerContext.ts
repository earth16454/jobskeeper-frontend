import { createContext, useContext } from 'react';

export interface JKAppContainerContextProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const JKAppContainerContext = createContext<JKAppContainerContextProps | null>(null);

export const useJKAppContainerContext = () => {
  const JKAppContainerConsumer = useContext(JKAppContainerContext);
  const label = 'useJKAppContainerContext must be used within a useJKAppContainerContextProvider';

  if (!JKAppContainerConsumer) {
    throw new Error(label);
  }
  return JKAppContainerConsumer;
};

export default JKAppContainerContext;
