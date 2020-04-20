import React from 'react';

const Operations =(props)=>{
    return(
        <div>
            <button type="button" onClick={()=>props.Increment()}>Increment</button>
            <button type="button" onClick={()=>props.Decrement()}>Decrement</button>            
        </div>
    )
}

export default Operations;