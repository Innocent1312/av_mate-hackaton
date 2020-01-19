import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewEvent from './NewEvent';

const Menu = ({ handleClickPrev, handleClickNext, m, y }) => {

  const months = ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'APR', 'SEP', 'OCT', 'NOV'];

  return (
    <nav className="nav">
      <div className="nav__arrows">
        <div
          className="ui basic button nav__arrows--left"
          onClick={() => handleClickPrev()}
        >
          {'<'}
        </div>
        <div
          className="ui basic button nav__arrows--right"
          onClick={() => handleClickNext()}
        >
          {'>'}
        </div>
      </div>
      <div className="nav__current-date">
        {`${months[m]} of ${y}`}
      </div>
      <div className="nav__right-block">
        <div className="nav__links block">
          <NavLink
            className="nav__links"
            activeClassName="nav__link--active"
            to="month"
          >
            Month
          </NavLink>
          <NavLink
            className="nav__links"
            activeClassName="nav__links--active"
            to="week"
          >
            Week
          </NavLink>
          <NavLink
            className="nav__links"
            activeClassName="nav__link--active"
            to="day"
          >
            Day
          </NavLink>
        </div>
        <div className="nav__create-button">
          <NewEvent />
        </div>
      </div>
    </nav>
  );
};
export default Menu;
