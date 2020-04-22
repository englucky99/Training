import React from "react";
import {   
    Route,    
    Redirect   
} from "react-router-dom";


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

export default PrivateRoute;