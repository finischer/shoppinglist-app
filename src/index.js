import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

//CSS
import './css/layout.css';

//Pages
import Home from './pages/Home';
import List from './pages/List';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={Navigation} />
      <Route path="/home" exact component={Home} />
      <Route path="/mylist" exact component={List} />
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

