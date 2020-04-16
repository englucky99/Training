import React from 'react';

class SearchComponent extends React.Component{
    render(){
        return(
            <div id="search-form">
            <form>
                <table>
                    <tr>
                        <td>
                            <input type="text" placeholder="Enter issue Id" />
                        </td>
                        <td>
                            <button type="submit">Search</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        )
    }
}

export default SearchComponent;