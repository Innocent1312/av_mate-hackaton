import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {

  return (
    <div className="menu">
      <NavLink to="month">
        Month
      </NavLink>
      <NavLink to="week">
        Week
      </NavLink>
      <NavLink to="day">
        Day
      </NavLink>
    </div>
  )
};
export default Menu;
