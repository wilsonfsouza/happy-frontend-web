import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/orphanages-map" exact component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
