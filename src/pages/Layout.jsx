import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Layout/Navigation';
import Routing from '../routing';

const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  return (
    <Layout className="bet-game-layout">
      <Header className="header">
        <Navigation />
      </Header>
      <Content className="content">
        <div className="content-wrapper">
          <Switch>
            {Routing.filter((x) => !x.disabled).map((route) => {
              if (route.param) {
                return <Route path={`/${route.path}${route.param}`} component={route.component} key={route.id} />;
              }
              return <Route path={`/${route.path}`} component={route.component} key={route.id} />;
            })}
          </Switch>
        </div>
      </Content>
      <Footer className="footer">Bet Game ©2021</Footer>
    </Layout>
  );
};

export default LayoutPage;
