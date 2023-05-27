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
          <div>Your one stop weather service.</div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
