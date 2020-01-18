import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import NewEvent from "./NewEvent";

const Menu = () => {

  return (
    <nav className="nav">
      <div className="nav__arrows">
        <div
          className="nav__arrows--left">
          {`<`}
        </div>
        <div
          className="nav__arrows--right">
          {`>`}
        </div>
      </div>
      <div className="nav__current-date">
        18 jan
      </div>
      <div className="nav__right-block">
        <div className="nav__links">
          <NavLink
            className="nav__link"
            activeClassName="nav__link--active"
            to="month">
            Month
          </NavLink>
          <NavLink
            className="nav__link"
            activeClassName="nav__link--active"
            to="week">
            Week
          </NavLink>
          <NavLink
            className="nav__link"
            activeClassName="nav__link--active"
            to="day">
            Day
          </NavLink>
        </div>
        <div className="nav__create-button">
          <NewEvent />
        </div>
      </div>
    </nav>
  )
};
export default Menu;
