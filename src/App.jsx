import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Menu from './components/Menu';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';

const App = () => {
  const [y, setY] = useState(new Date().getFullYear());
  const [m, setM] = useState(new Date().getMonth() + 1);
  const w = new Date(y, m - 1, 1).getDay();


  const handleClickPrev = () => {
    if (m === 0) {
      setY(y - 1);
      setM(11);
    } else {
      setM(m - 1);
    }
  };
  const handleClickNext = () => {
    if (m === 11) {
      setY(y + 1);
      setM(0);
    } else {
      setM(m + 1);
    }
  };

  const dayOfMonth = 32 - new Date(y, m - 1, 32).getDate();

  return (
    <div className="main">
      <header className="header">
        <Menu
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
          y={y}
          m={m}
        />
      </header>

      <div className="components-wrapper">
        <main className="components">
          <Switch>
            <Route
              path="/month"
              render={() => (<Month y={y} m={m} w={w} dayOfMonth={dayOfMonth} />)}
            />
            <Route
              path="/week"
              component={Week}
            />
            <Route
              path="/day"
              component={Day}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;
