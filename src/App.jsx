import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Menu from './components/Menu';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';

const App = () => (
  <div className="main">
    <header className="header">
      <Menu />
    </header>

    <div className="components-wrapper">
      <main className="components">
        <Switch>
          <Route
            path="/month"
            component={Month}
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

export default App;
