import React from 'react';
import PropTypes from 'prop-types';

class EmployeDetailComponent extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.empid}</p>
                <p>{this.props.empName}</p>
                <p>{this.props.empCompany}</p>
            </div>
        )
    }
}

EmployeDetailComponent.defaultProps = {
    empCompany: 'DefaultCom'
}

EmployeDetailComponent.propTypes = {
    empid: PropTypes.number
}

export default EmployeDetailComponent;