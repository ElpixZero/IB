import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main.jsx';
import PersonalSpace from './pages/PersonalSpace';
import Header from './components/Header/index.jsx';
import Policy from './pages/Policy';
import AuthModalWindow from './components/AuthModalWindow';
import Partners from './components/Partners';
import Footer from './components/Footer';

import './style.css';

const styles = {
  'maxWidth': '1600px',
  'margin': '0 auto',
};

function App() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div style={styles}>
      <Header setOpenLoginWindow={setOpen} />
      <AuthModalWindow isOpen={isOpen} setClose={setOpen} />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} className="pageContainer" />
          <Route exact path="/im" component={PersonalSpace} className="pageContainer" />
          <Route exact path="/policy" component={Policy} className="pageContainer" />
          <Route exact path="/partners" component={Partners} className="pageContainer" />
        </Switch>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
