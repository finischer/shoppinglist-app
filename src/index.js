import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

//CSS
import './css/layout.css';

//Pages
import Home from './pages/Home';
import MyLists from './pages/MyLists';
import ShoppinglistPage from './pages/ShoppinglistPage';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={Navigation} />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/shoppinglists" exact component={MyLists} />
      <Route path="/shoppinglists/list" component={ShoppinglistPage} />
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

