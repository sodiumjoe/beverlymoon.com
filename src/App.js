import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Project from './routes/Project';
import NotFound from './routes/NotFound';

import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/portfolio/:id" component={Project} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Nav>
  </Router>
);

export default App;
