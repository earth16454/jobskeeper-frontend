import { createContext, useContext } from 'react';

export interface RegisterContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(undefined);

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error('useRegisterContext must be used within a RegisterProvider');
  }
  return context;
};

export default RegisterContext;
