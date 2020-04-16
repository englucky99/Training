import React from 'react';
import NameComponent from './NameComponent';

class UserComponent extends React.Component{    
    render(){
        var Name ='Maharshi';
        return(
            <div>
                <NameComponent/>
            </div>
        )
    }
}

export default UserComponent