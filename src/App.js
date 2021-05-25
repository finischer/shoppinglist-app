import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation';


//Pages
import Home from './containers/Home';
import MyLists from './containers/MyLists';
import ShoppinglistPage from './containers/ShoppinglistPage';
import Login from './containers/Login';
import Signup from './containers/Signup';
// import MyListsItem from './components/Shoppinglist/MyListsItem';
// import ShoppinglistItem from './components/Shoppinglist/ShoppinglistItem';

// HOOKS
import useToken from './Hooks/useToken';


function App() {

    const { token, setToken } = useToken();


    if(!token){
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Router>
                            <Route exact path="/">
                                <Login setToken={setToken} />
                            </Route>
                            <Route path="/login">
                                <Login setToken={setToken} />
                            </Route>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                        </Router>
                    </Switch>
                </BrowserRouter>
            </>
            
        )
    }
    return (
    <div className="wrapper">
        
        <Navigation />
        <BrowserRouter>
            <Switch>
                <Router>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/shoppinglists">
                        <MyLists />
                    </Route>
                    <Route exact path="/shoppinglists/list">
                        <ShoppinglistPage />
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken} />
                    </Route>
                </Router>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;


