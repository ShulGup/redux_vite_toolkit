import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      {user?.name && user.name}
      <NavLink to="/">Movies</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default NavBar;
