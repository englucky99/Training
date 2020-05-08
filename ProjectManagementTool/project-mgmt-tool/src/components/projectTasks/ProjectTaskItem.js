import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProjectTask } from "../../action/ProjectTaskActions";

class ProjectTaskItem extends React.Component {
    onDeleteClick(id) {
        console.log("delete method called", id);
        this.props.deleteProjectTask(id);
    };
    render() {
        const { projectTask } = this.props;
        const {projectId} = this.props;
        return (
            <div className="col-12">
                <div className="task-block">
                    <div className="col-md-12">
                        <div className="row">
                            <div className={projectTask.priority == 'high' ? 'high summary' : projectTask.priority == 'medium' ? 'medium summary' : 'low summary'}>
                                <h4>{projectTask.summary}--Priority: {projectTask.priority.toUpperCase()}</h4>
                            </div>
                            <div>
                                <p className="item-detail">{projectTask.acceptanceCriteria}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Link to={`/updateProjectTask/${projectId}/${projectTask._id}`}>
                                    <li className="btn btn-primary update">
                                        <i className="task-edit">View/Update</i>
                                    </li>
                                </Link>
                            </div>
                            <div className="col-6">
                                <li className="btn btn-danger delete"
                                    onClick={() => this.onDeleteClick(projectTask._id)}>
                                    <i className="task-delete">Delete</i>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ProjectTaskItem.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired,
};
export default connect(null, { deleteProjectTask })(ProjectTaskItem);


