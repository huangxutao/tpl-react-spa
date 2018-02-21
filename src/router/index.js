import React from 'react';
// change to hashRouter
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About } from '../pages';
import { NotFound } from '../components';

const RouteConfig = (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default RouteConfig;
