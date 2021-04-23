import { Layout } from 'antd';
import BGBreadcrumb from '../components/Layout/BreadCrumb.jsx';
import Navigation from '../components/Layout/Navigation.jsx';

const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  return (
    <Layout className="bet-game-layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navigation />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <BGBreadcrumb />
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Bet Game ©2021</Footer>
    </Layout>
  );
};

export default LayoutPage;
