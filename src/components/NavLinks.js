import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default NavLinks;