import React from 'react';
import './App.css';
import { Homepage } from './Homepage';
import { HashRouter, Route, Redirect } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <HashRouter>
      <Route exact path="/homepage">
        <Homepage />
      </Route>
      <Redirect to="/homepage/" />
    </HashRouter>
  );
}

export default App;
