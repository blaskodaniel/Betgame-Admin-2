import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import AuthenticationProvider from './contexts/AuthContext';
import ErrorHandler from './components/ErrorHandler';
import Layout from './pages/Layout';

const AppRoot = () => {
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <BrowserRouter>
          <AuthenticationProvider>
            <Layout />;
          </AuthenticationProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default AppRoot;
