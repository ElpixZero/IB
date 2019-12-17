import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main.jsx';
import PersonalKabinet from './pages/personalKabinet';
import Login from './components/Login';
import Policy from './pages/Policy';
import './style.css';

const styles = {
  'maxWidth': '1600px',
  'margin': '0 auto',
};

function App() {
  return (
    <div style={styles}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} className="pageContainer" />
        <Route exact path="/im" component={PersonalKabinet} className="pageContainer" />
        <Route exact path="/policy" component={Policy} className="pageContainer" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
