import React from 'react';
import {       
    useHistory   
} from "react-router-dom";
const AdminDashBoard=(props)=> {
    let history = useHistory();    
    return (
        <p>
            Welcome to Admin DashBoard.
            <button
                onClick={() => {
                    props.signout(() => history.push("/"));
                }}
            >
                Sign out
      </button>
        </p>
    );
}

export default AdminDashBoard;