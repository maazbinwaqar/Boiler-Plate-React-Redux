import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
// import createBrowserHistory from './createHistory'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from '../Components/home'
const history = createBrowserHistory();


class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path='/' component={Home} />
            </Router>
        )
    }
}

export default Routers;
