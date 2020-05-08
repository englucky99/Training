import React from'react';
import {Link} from 'react-router-dom';
const CreateProjectTaskButton=(props)=>
{
    return(
 <React.Fragment>       
<Link to={`/addProjectTask/${props.id}`} className="btn btn-lg btn-info">
 Create a Project task
</Link>

</React.Fragment>
    );
}

export default CreateProjectTaskButton;