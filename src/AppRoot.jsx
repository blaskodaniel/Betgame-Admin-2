import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LayoutPage from './pages/Layout';
import AuthenticationProvider from './contexts/AuthContext';

const AppRoot = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <RecoilRoot>
          <LayoutPage />;
        </RecoilRoot>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoot;
