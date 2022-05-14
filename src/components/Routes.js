import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';
import initialDetails from '../data/initialDetails';

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Search details={initialDetails} />} />
  </Switch>
);

export default Routes;