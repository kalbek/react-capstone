import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav>
        <div className="flex-around w-100 fixed pt-1">
          <NavLink to="/">
            <div className="logo">Logo</div>
          </NavLink>
          <div className="menus">
            <div className="flex gap-1">
              <NavLink to="/">
                <div className="menu ptr">Menu 1</div>
              </NavLink>
              <NavLink to="/pollution-details">
                <div className="menu ptr">Menu 2</div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
  