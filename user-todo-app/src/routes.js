import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import NotFound from "./components/notfound";
import Register from "./components/register";

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
