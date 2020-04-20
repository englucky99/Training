import React from 'react';
import {   
    Link,   
    useHistory   
} from "react-router-dom";


const LoginPage =(props)=> {
    let username='';
    let password='';
    let history = useHistory();    
    let { from } = { from: { pathname: "/" } };
    let login = () => {
        let loginObj ={
            username:username.value,
            password:password.value
        }
        props.authenticate(loginObj,(isValid)=>{            
            if(isValid){
                history.replace(from);  
            } else {
                alert('Invalid login');
            }
        });           
    };

    return (
        <div>
            <input type="text"
            ref={(value)=>{username=value;}}
             placeholder="Enter username" />
            <input type="password" 
            ref={(value)=>{password=value;}}
            placeholder="Enter password" />
            <button onClick={login}>Log in</button>
            <Link to="/register">Register here..</Link>
        </div>
    );
}

export default LoginPage;
