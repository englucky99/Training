import React from 'react';
class RegisterPage extends React.Component  {
    constructor(props){
        super(props)
        this.registerUser =this.registerUser.bind(this)        
    }
    registerUser(eve){       
        eve.preventDefault();        
        const user={
            username:this.username.value,
            password:this.password.value,
            firstname:this.firstname.value,
            lastname:this.lastname.value
        }
        this.props.registerUser(user);               
    }
    render(){
        return (
            <form onSubmit ={this.registerUser}>
            <input type="text" placeholder="enter first name"           
              ref={(value)=>{this.firstname=value;}}
              ></input>
              <input type="text" placeholder="enter last name"           
              ref={(value)=>{this.lastname=value;}}
              ></input>
              <input type="text" placeholder="enter username"           
              ref={(value)=>{this.username=value;}}
              ></input>
              <input type="password" placeholder="enter password"           
              ref={(value)=>{this.password=value;}}
              ></input>
            <button type="submit">Register</button>
        </form>
        );
    }
    
}

export default RegisterPage;