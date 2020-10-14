import React from "react";
import { Route, Switch } from "wouter";
import MainPage from './pages/Main';
import UsersPage from './pages/Users';

export default () => (
    <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/users" component={UsersPage} />
    </Switch>
)

