import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

//CSS
import './css/layout.css';

//Pages
import Home from './pages/Home';
import MyLists from './pages/MyLists';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={Navigation} />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/mylist" exact component={MyLists} />
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

