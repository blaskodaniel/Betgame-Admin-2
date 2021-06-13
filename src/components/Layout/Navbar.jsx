import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthContext';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Navbar = () => {
  const authctx = useContext(AuthenticationContext);
  return (
    <header>
      <label htmlFor="menu-toggler" className="menu-toggle">
        <i className="las la-bars" />
      </label>
      <div className="search">
        <p />
      </div>
      <div className="head-icons" role="presentation" onClick={() => authctx.onLogout()}>
        <i className="las la-sign-out-alt" /> Kilépés
      </div>
    </header>
  );
};

export default Navbar;
