import React from 'react';

class HeaderComponent extends React.Component{
    render(){
        return(
            <div id="header">
            <div id="logo">
                logo
                </div>
            <div id="issue-navigation">
                <a href="#">Home</a>|
                <a href="#">About</a>|
                <a href="#">Services</a>|
                <a href="#">Contact</a>
            </div>
        </div>
        )
    }
}

export default HeaderComponent;