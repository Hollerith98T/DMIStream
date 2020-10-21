import React from 'react';
import './App.css';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Subject } from './SubjectPage';

function App(): JSX.Element {
  return (
    <HashRouter>
      <Route exact path="/homepage">
        <Homepage />
      </Route>
      <Route exact path="/subjectpage">
        <Subject />
      </Route>
      <Redirect to="/homepage/" />
    </HashRouter>
  );
}

export default App;
