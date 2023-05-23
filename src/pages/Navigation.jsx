import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="flex-around w-100">
          <div className="logo">Logo</div>
          <div className="menus">
            <div className="flex gap-1">
              <div className="menu">Menu 1</div>
              <div className="menu">Menu 2</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
