import React from 'react';
import { createProjectTask, getProjectTask } from "../../action/ProjectTaskActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class AddProjectTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: "",
            dueDate: "",
            projectId: "",
            errors: {},
            project: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.SetStateDefault = this.SetStateDefault.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        if (nextProps.projectTask) {               
            const {
                _id,
                summary,
                acceptanceCriteria,
                priority,
                status,
                dueDate,
                projectId
            } = nextProps.projectTask;
            this.setState({
                _id,
                summary,
                acceptanceCriteria,
                priority,
                status,
                dueDate,
                projectId
            });
        }
    }

    componentDidMount() {
        const projectId = this.props.match.params.projectId;
        if (this.props.projects && this.props.projects.projects.length > 0) {
            let project = this.props.projects.projects.find(project => project._id == projectId);
            this.setState({
                project: project
            });
        }
        this.setState({
            projectId: projectId
        })
        const taskId = this.props.match.params.taskId;
        if (taskId) {
            this.props.getProjectTask(taskId, this.props.history);
        }
    }
    onSubmit(event) {
        event.preventDefault();
        if (!this.state._id) {            
            const newProjectTask = {
                summary: this.state.summary,
                acceptanceCriteria: this.state.acceptanceCriteria,
                status: this.state.status,
                priority: this.state.priority,
                dueDate: this.state.dueDate,
                updatedAt: new Date().getTime().toString(),
                createdAt:new Date().getTime().toString(),
                projectId: this.state.projectId,
            };
            this.props.createProjectTask(newProjectTask, this.props.history);
        } else {
            const updateProjectTask = {
                _id: this.state._id,
                summary: this.state.summary,
                acceptanceCriteria: this.state.acceptanceCriteria,
                status: this.state.status,
                priority: this.state.priority,
                dueDate: this.state.dueDate,
                updatedAt: new Date().getTime().toString(),
                projectId: this.state.projectId,
            };
            this.props.createProjectTask(updateProjectTask, this.props.history);
        }

        this.SetStateDefault();
    }

    SetStateDefault() {
        this.setState({
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: "",
            dueDate: "",
            projectId: "",
            errors: {},
            project: {}
        });
    }
    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Add/Update Project Task</h5>
                            <h6 className="project-title">{this.state.project.projectName} : {this.state.project._id}</h6>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Summary"
                                        name="summary"
                                        value={this.state.summary}
                                        onChange={this.onChange} />
                                    <p>{this.state.errors.summary}</p>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Acceptance Criteria"
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange} />
                                    <p>{this.state.errors.acceptanceCriteria}</p>
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="dueDate"
                                        value={this.state.dueDate}
                                        onChange={this.onChange} />
                                    <p>{this.state.errors.dueDate}</p>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={this.onChange} >
                                        <option value="">Select Priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                    <p>{this.state.errors.priority}</p>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange} >
                                        <option value="">Select Status</option>
                                        <option value="todo">To Do</option>
                                        <option value="inprogress">In Progress</option>
                                        <option value="complete">Done</option>
                                    </select>
                                    <p>{this.state.errors.status}</p>
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddProjectTask.propTypes = {
    createProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    errors: state.errors,
    projects: state.projects,
    projectTask: state.projectTasks.projectTask
});

export default connect(mapStateToProps, { getProjectTask, createProjectTask })(AddProjectTask);
