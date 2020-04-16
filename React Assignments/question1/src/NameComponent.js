import React from 'react';


class NameComponent extends React.Component{    
    render(){
        var Name ='Maharshi';
        return(            
                <h1>Hello {Name} </h1>            
        )
    }
}

export default NameComponent