import { ConfigProvider } from 'antd';
import './App.css';
// import Register from './pages/auth/register';
import { theme } from './config/configProvider';
import Routing from './Routing';
import { Provider } from 'react-redux';
import { store } from './store';
import { Outlet } from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Routing />
        <Outlet />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
