import React from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from './useStore';
import { setCurrentRole } from '@/store/slices/accountSlice';

const useCheckLogin = () => {
  const navigate = useNavigate();
  const { currentRole } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  // const removeAllCookies = () => {
  //   deleteCookies('main');
  // };

  // const checkLogin = () => {
  //   try {
  //     const arrMainCookies = getMainCookieKeys();
  //     if (arrMainCookies?.length) {
  //       navigate('/standard/home');
  //       return;
  //     }
  //     removeAllCookies();
  //   } catch (err) {
  //     console.error(err);
  //     removeAllCookies();
  //   }
  // };

  const removeAllCookies = () => {
    dispatch(setCurrentRole());
  };

  const checkLogin = () => {
    try {
      if (currentRole) {
        navigate('/home');
        return;
      }
      removeAllCookies();
    } catch (err) {
      console.error(err);
      removeAllCookies();
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, [currentRole]);
};

export default useCheckLogin;
