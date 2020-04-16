import React from 'react';

class DataTableComponent extends React.Component{
    render(){
        return(
            <div id="data-table">
                    <table border="1">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>scrum master</th>
                            <th>Team member</th>
                            <th></th>
                          
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Maharshi</td>
                            <td>React component</td>
                            <td>12</td>
                            <td><a href="">Edit</a>|<a href="">Delete</a></td>
                           
                        </tr>
                    </table>
                </div>
        )
    }
}

export default DataTableComponent;