import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {

  return (
    <nav className="nav">
      <NavLink
        className=""
        activeClassName=""
        to="month">
        Month
      </NavLink>
      <NavLink to="week">
        Week
      </NavLink>
      <NavLink to="day">
        Day
      </NavLink>
    </nav>
  )
};
export default Menu;
