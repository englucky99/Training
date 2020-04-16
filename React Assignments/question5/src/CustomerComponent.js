import React from 'react';
import FilterComponent from './FilterComponent';

class CustomerComponent extends React.Component{
        render(){
            var customerList=[
                {
                    customerId:1,
                    customerName:'Test user',
                    customerAddress:'USA'
                },
                {
                    customerId:2,
                    customerName:'Astro Dol',
                    customerAddress:'Australia'
                },
                {
                    customerId:1,
                    customerName:'Maharshi',
                    customerAddress:'India'
                }
                ,{
                    customerId:1,
                    customerName:'Aadrash',
                    customerAddress:'India'
                }
            ]

            return(
                <div>
                    <h3>Customer List:</h3>
                    <table>
                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                    </tr>
                        {
                            customerList.map((customer)=>{
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
                    <br/>
                    <FilterComponent cusList={customerList} />                    
                </div>
            )
        }

}

export  default CustomerComponent;