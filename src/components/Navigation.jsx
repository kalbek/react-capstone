import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <div className="">
      <NavLink to="/">
        <div className="logo absolute z-100">
          <img src="/images/OpenWeatherLogo.png" alt="OpenWeatherLogo" />
        </div>
      </NavLink>
    </div>
  </>
);

export default Navigation;
