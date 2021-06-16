import { NavLink } from 'react-router-dom';
import Routing from '../../routing';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <h3>mokasfoci.hu</h3>
      </div>
      <div className="sidemenu">
        <div className="side-user">
          <div className="side-img" style={{ backgroundImage: 'url(/avatars/man-6.png)' }} />
          <div className="user">
            <small>Blaskovics</small>
            <p>Admin</p>
          </div>
        </div>
        <ul>
          {Routing.filter((x) => x.visibleinmenu && !x.disabled).map((route) => {
            return (
              <li key={route.id}>
                <NavLink
                  exact={route.path === '/' && true}
                  to={route.path === '/' ? '/' : `/${route.path}`}
                  activeClassName="active"
                >
                  <i className={route.icon} />
                  <span>{route.displayname}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
