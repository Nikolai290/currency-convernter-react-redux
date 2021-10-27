import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavMenu from './app/components/NavMenu';
import About from './app/features/About/About';
import Converter from './app/features/converter/Converter';
import Rates from './app/features/rates/Rates';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <NavMenu />
        <Switch>
          <Route path={'/'} exact component={Rates}></Route>
          <Route path={'/converter'} component={Converter}></Route>
          <Route path={'/about'} component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
