import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/main.scss';
import Menu from './components/Menu';
import Month from './components/Month';
<<<<<<< HEAD
import Week from './components/Week';
import Day from './components/Day';
=======
>>>>>>> 87246c33d692921f59669e1a7590f527f97f6ef2

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
