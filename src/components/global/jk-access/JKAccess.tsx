import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router';
import LoadingComponent from 'components/loading/LoadingComponent';
import { useAppSelector } from '@/hooks/useStore';

const JKAccess: React.FC = () => {
  const { currentRole } = useAppSelector(({ auth }) => auth);

  const hasAccess = () => {
    console.log("currentRole:", currentRole);
    
    if (!currentRole) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {hasAccess() ? (
        <Suspense fallback={<LoadingComponent />}>
          <Outlet />
        </Suspense>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default JKAccess;
