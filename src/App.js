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
import useUser from './Hooks/useUser';


function App() {

    const { token, setToken } = useToken();
    const {user, setUser} = useUser();


    if(!token){
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Router>
                            <Route exact path="/">
                                <Login setToken={setToken} setUser={setUser} />
                            </Route>
                            <Route path="/login">
                                <Login setToken={setToken} setUser={setUser} />
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
                        <Home user={user} />
                    </Route>
                    <Route exact path="/home">
                        <Home user={user} />
                    </Route>
                    <Route exact path="/shoppinglists">
                        <MyLists user={user} />
                    </Route>
                    <Route path="/shoppinglists/list">
                        <ShoppinglistPage user={user} />
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


