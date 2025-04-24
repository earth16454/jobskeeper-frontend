import { createBrowserRouter, RouterProvider } from 'react-router';
import RegisterPage from './pages/auth/register/RegisterPage';
import Login from 'pages/auth/login';
import JKAccess from './components/global/jk-access/JKAccess';
import Home from 'pages/home';

const Routing: React.FC = () => {
  const router = createBrowserRouter([
    { path: '/', element: <JKAccess /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/home', element: <Home /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
