import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/main.scss';
import Menu from './components/Menu';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';

const App = () => (
  <>
    <Menu/>
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
    </>
);

export default App;
