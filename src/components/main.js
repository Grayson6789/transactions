import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Login from './Login';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Login" component={Login} />
   
  </Switch>
)

export default Main;
