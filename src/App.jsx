import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main.jsx';
import Login from './components/Login';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} className="pageContainer" />
        <Route exact path="/auth" component={Login} className="pageContainer" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
