/* eslint-disable jsx-a11y/label-has-associated-control */
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import Routing from '../routing';

const Layout = () => {
  return (
    <div className="mf-layout">
      <input type="checkbox" id="menu-toggler" />
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main>
          <Switch>
            {Routing.filter((x) => !x.disabled).map((route) => {
              if (route.param) {
                return <Route path={`/${route.path}${route.param}`} component={route.component} key={route.id} />;
              }
              return <Route path={`/${route.path}`} component={route.component} key={route.id} />;
            })}
          </Switch>
        </main>
      </div>
      <label className="close-mobile-menu" htmlFor="menu-toggler" />
    </div>
  );
};

export default Layout;
