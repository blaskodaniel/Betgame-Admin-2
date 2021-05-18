import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import LayoutPage from './pages/Layout';
import AuthenticationProvider from './contexts/AuthContext';
import ErrorHandler from './components/ErrorHandler';

const AppRoot = () => {
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <BrowserRouter>
          <AuthenticationProvider>
            <LayoutPage />;
          </AuthenticationProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default AppRoot;
