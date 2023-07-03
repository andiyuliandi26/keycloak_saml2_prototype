import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://cdn.cdnlogo.com/logos/r/85/react.svg"
          alt="React JS"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};