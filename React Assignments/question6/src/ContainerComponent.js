import React from "react";
import {
    Router,
    Switch,
    Route,    
    Redirect   
} from "react-router-dom";
import RegisterPage from './RegisterComponent';
import LoginPage from './LoginComponent';
import AdminDashBoard from './AdminDashboard';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class ContainerComponent extends React.Component {
    constructor(props){
        super(props)
        this.registerUser = this.registerUser.bind(this);
        this.authenticate= this.authenticate.bind(this);
        this.signout=this.signout.bind(this);
        this.state={
            users:[],
            currentUser:{
                username:'',
                password:'',
                firstname:'',
                lastname:''
            },
            isAuthenticated: false,           
        }
        
    }
    
    registerUser(user){
        let users = this.state.users;
        users.push(user);            
        this.setState({users:users});  
        console.log(this.state.users);  
        alert('Registation has completed Successfully');           
        history.push('/');
    }
    
    authenticate(authenticate,callback) {        
        let userObj =this.state.users.find((user)=>user.username===authenticate.username && user.password===authenticate.password );
        if(userObj){
            this.setState({isAuthenticated:true});
            callback(true);
        } else {
            callback(false);
        }        
    }
    signout(callback) {
        this.setState({
            isAuthenticated:false
        });
        callback();      
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/register">
                            <RegisterPage 
                            registerUser={this.registerUser} />
                        </Route>
                        <Route path="/login">
                            <LoginPage authenticate={this.authenticate} />
                        </Route>
                        <PrivateRoute exact isAuthenticated={this.state.isAuthenticated} path="/">
                            <AdminDashBoard signout={this.signout} isAuthenticated={this.state.isAuthenticated} />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        );
    }

}


export default ContainerComponent;


const PrivateRoute =({ children, ...rest })=> {       
    return (
        <Route
            {...rest}
            render={ props  =>{
                console.log(props);
                return children.props.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
                
            }
        />
    );
}







