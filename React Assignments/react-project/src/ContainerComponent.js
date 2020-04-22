import React from "react";
import {
    Router,
    Switch,
    Route
} from "react-router-dom";

import UserDashboard from './TodoModule/UserDashboard';
import PrivateRoute from './CommonComponent/privateRoute';
import { LoginPage, RegisterPage } from './LoginModule';

import { useSelector } from 'react-redux';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


const ContainerComponent = (props) => {

    let isLogin = useSelector(state => state.login);
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute exact isAuthenticated={isLogin} path="/">
                        <UserDashboard isAuthenticated={isLogin} />
                    </PrivateRoute>
                    <PrivateRoute exact isAuthenticated={isLogin} path="/dashboard/home">
                        <UserDashboard isAuthenticated={isLogin} />
                    </PrivateRoute>                                           
                    <PrivateRoute exact isAuthenticated={isLogin} path="/dashboard/about">
                        <UserDashboard isAuthenticated={isLogin} />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}



export default ContainerComponent;










