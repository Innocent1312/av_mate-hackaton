import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Menu from './components/Menu';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';

const App = () => {
  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const w = new Date(y, m - 1, 1).getDay();

  const dayOfMonth = 32 - new Date(y, m - 1, 32).getDate();


  return (
    <div className="main">
      <header className="header">
        <Menu />
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
