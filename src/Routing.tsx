import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const JKAppContainer = lazy(() => import('components/global/jk-app-container'));
const JKAccess = lazy(() => import('components/global/jk-access'));
const Login = lazy(() => import('pages/auth/login'));
const Register = lazy(() => import('pages/auth/register'));
const MyJobApplication = lazy(() => import('pages/my-job-application'));
const Home = lazy(() => import('pages/home'));

const Routing: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <JKAppContainer>
          <JKAccess />
        </JKAppContainer>
      ),
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'my-job-application',
          element: <MyJobApplication />,
        },
      ],
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
