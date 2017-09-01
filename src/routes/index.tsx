import * as React from 'react';
import { Route, Switch } from 'react-router';

import About from '../views/About';
import Home from '../views/Home';

export const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);