import React from 'react';
import EvenOddComponent from './EvenOddComponent';


class ArrayComponent extends React.Component{
    render()
    {
        var numList=[5,6,7,3,54,24,10,59];
        return(
            <div>
                <h3>List Of numbers</h3>
                {numList.map((num)=><span>{num} </span>)};
                <br/>
                <EvenOddComponent numbers={numList} />
            </div>                                   
        )
    }
}

export default ArrayComponent;