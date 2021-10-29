import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './app/components/Navbar';
import About from './app/features/About/About';
import Converter from './app/features/converter/Converter';
import Rates from './app/features/rates/Rates';
import Container from '@mui/material/Container/Container'

const App = () => {
  return (
    <Container >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={'/'} exact component={Rates}></Route>
          <Route path={'/converter'} component={Converter}></Route>
          <Route path={'/about'} component={About}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
