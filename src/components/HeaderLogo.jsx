import { NavLink } from 'react-router-dom';
import headerLogo from "../img/header-logo.png";


function HeaderLogo() {  
  return (
    <NavLink to="/" className="navbar-brand">
      <img src={headerLogo} alt="Bosa Noga" />
    </NavLink>    
  );
}

export default HeaderLogo;