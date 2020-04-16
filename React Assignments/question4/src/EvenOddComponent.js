import React from 'react';

class EvenOddComponent extends React.Component{
    render()
    {
      
        return(
            <div>
                <h3>Even Numbers</h3>
                {this.props.numbers.filter((num)=>num%2===0).map((num)=>{
                    return <span>{num} </span>
                })};
                <br/>
                <h3>Odd Numbers</h3>
                {this.props.numbers.filter((num)=>num%2).map((num)=>{
                    return <span>{num} </span>
                })};
            </div>
            
            
        )
    }
}

export default EvenOddComponent;

