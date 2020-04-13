import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPlant from './AddPlant';
//import App from './App';

//function to hold the nav bar of the app

function NavBar () {

    return (
        <Router>
            <nav>
                <div className='bg-green-300'>
                    <ul className='inline-block p-4 font-bold text-xl text-gray-700'>
                        <li>
                            <Link to='/'>Plant Library</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/add-plant'>Add a Plant</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path='/add-plant'>
                    <AddPlant />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;