import React from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";

import { useDispatch, connect } from 'react-redux';

import { login } from '../actions/login';
import appStore from '../store';

const LoginPage = (props) => {

    let username = '';
    let password = '';
    let history = useHistory();
    const dispatch = useDispatch();
    let { from } = { from: { pathname: "/" } };
    let loggedIn = () => {
        let loginObj = {
            username: username.value,
            password: password.value
        }
        dispatch(login(loginObj));
        let state = appStore.getState();

        if (state.login) {
            history.replace(from);
        } else {
            alert('Invalid login');
        }



    };

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" className="form-control"
                        ref={(value) => { username = value; }}
                        placeholder="Enter username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control"
                        ref={(value) => { password = value; }}
                        placeholder="Enter password" id="password" />
                </div>
                <button type="button" onClick={loggedIn}>Log in</button>
                <Link to="/register">Register here..</Link>
            </form>
        </div>

    );
}
const mapStateToProps = state => {
    return {
        isLogin: state.login
    };
};
export default connect(mapStateToProps)(LoginPage);

