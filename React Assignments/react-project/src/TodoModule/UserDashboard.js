import React from 'react';
import {
    useHistory,NavLink, Route
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { logout } from '../actions/login';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const UserDashboard = (props) => {
    let history = useHistory();
    const dispatch = useDispatch()
    let signout = () => {
        dispatch(logout());
        history.push("/")
    }
    return (
        <div>
            <div className="page-header header">
                <p>
                    TodoList
                   
                </p>
                <button className="btn btn-info"
                                onClick={() => {
                                    signout();
                                }}
                            >
                                Sign out
                    </button>
                <div className="">
                    <NavLink className="" exact activeClassName="active" to="/">Home</NavLink> <span>| </span> 
                    <NavLink className="" exact activeClassName="active" to="/dashboard/about">About</NavLink>
                </div>
            </div>
            <div className="page-content">
                    <Route exact path="/" component={HomePage} />  
                    <Route exact path="/dashboard/home" component={HomePage} />                                        
                    <Route exact path="/dashboard/about" component={AboutPage} />
            </div>
            <div className="page-footer"></div>
        </div>

    );
}

export default UserDashboard;