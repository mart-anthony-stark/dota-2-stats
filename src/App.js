import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Heroes from './components/Heroes';
import HeroDetails from './components/HeroDetails';
import Teams from './components/Teams';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="app">
      <Router>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="tab">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/hero/:id" exact component={HeroDetails} />
            <Route path="/heroes" exact component={Heroes} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
