import React from 'react';

class FilterComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Customer having starting name with 'A' and from India</h3>
                <table>
                <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                    </tr>
                    {
                        this.props.cusList.filter((customer) => {
                            return customer.customerName.toLowerCase().startsWith('a') && customer.customerAddress.toLowerCase() === 'india';
                        }).map((customer) => {
                            return (
                                <tr>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerAddress}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
        )
    }
}

export default FilterComponent; 