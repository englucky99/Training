import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/login';
import {   
    useHistory
} from "react-router-dom";

const RegisterPage = (props) => {
    const dispatch = useDispatch();
    const history =useHistory();
    let firstname='';
    let lastname='';
    let username='';
    let password='';
    let registerUser = (eve) => {
        eve.preventDefault();
        const user = {
            username: username.value,
            password: password.value,
            firstname: firstname.value,
            lastname: lastname.value
        }
        alert('User has registered.')
        dispatch(register(user));
        history.push('/');
    }

    return (
        <div className="container">
<form onSubmit={registerUser}>
            <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" className="form-control" placeholder="enter first name" id="firstname"
                    ref={(value) => { firstname = value; }}
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" className="form-control" placeholder="enter last name" id="lastname"
                    ref={(value) => { lastname = value; }}
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input type="text" placeholder="enter username" className="form-control" id="username"
                    ref={(value) => {username = value; }}
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="enter password" className="form-control" id="password"
                    ref={(value) => { password = value; }}
                ></input>
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
        
    );


}

export default RegisterPage;