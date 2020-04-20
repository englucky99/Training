import React from 'react';
import Operations from './Operations';
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
        this.Increment =this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
        this.state={
            count:0
        }
    }

    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    Decrement(){
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <div>
                <Operations Increment={this.Increment} Decrement={this.Decrement} />
                <h1>Count:{this.state.count}</h1>
            </div>            
        )
    }
}

export default CounterComponent;