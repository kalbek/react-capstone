import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav>
        <div className="flex-around w-100 fixed pt-1">
          <NavLink to="/">
            <div className="logo">
              <img src="/images/OpenWeatherLogo.png" alt="" />
            </div>
          </NavLink>
          <div className="menus">
            <div className="flex gap-1">
              <NavLink to="/">
                <div className="menu ptr"></div>
              </NavLink>
              <NavLink to="/pollution-details">
                <div className="menu ptr">Pollution Details.</div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
