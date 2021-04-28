import { BrowserRouter } from 'react-router-dom';
import LayoutPage from './pages/Layout';
import AuthenticationProvider from './contexts/AuthContext';

const AppRoot = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <LayoutPage />;
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoot;
