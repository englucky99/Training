import React from 'react';
import EmployeDetailComponent from './EmployeDetailComponent';

class EmployeComponent extends React.Component{
    render(){
        var employeDetail={
            empid:'101',
            empName:'Maharshi',
            empCompany:'Yash'
        }
        return(
            <div>
                <EmployeDetailComponent empid={employeDetail.empid} empName={employeDetail.empName} />
            </div>
        )
    }
}

export default EmployeComponent;