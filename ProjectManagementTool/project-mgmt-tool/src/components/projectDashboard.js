import React from 'react';
import ProjectTaskItem from './projectTasks/ProjectTaskItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjectTasks } from "../action/ProjectTaskActions";
import CreateProjectTaskButton from './projectTasks/CreateProjectTaskButton';
class ProjectDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId: ''
        }
    }

    componentDidMount() {
        const projectId= this.props.match.params.projectId;
        this.setState({
            projectId: projectId
        })
        this.props.getProjectTasks(projectId);
    }
    render() {
        const { projectTasks } = this.props.projectTasks;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">                            
                            <CreateProjectTaskButton id={this.state.projectId} />
                            <br />
                            <hr />
                            <div className="row">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 todo">
                                            <h1>TO DO</h1>
                                        </div>
                                        {projectTasks.filter(projectTask=>projectTask.status=='todo').map(projectTask => (
                                            <ProjectTaskItem key={projectTask._id} projectId={this.state.projectId} projectTask={projectTask} />
                                        ))}
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 inprogress">
                                            <h1>In Progress</h1>
                                        </div>
                                        {projectTasks.filter(projectTask=>projectTask.status=='inprogress').map(projectTask => (
                                            <ProjectTaskItem key={projectTask._id} projectId={this.state.projectId} projectTask={projectTask} />
                                        ))}
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 done">
                                            <h1>Done</h1>
                                        </div>
                                        {projectTasks.filter(projectTask=>projectTask.status=='complete').map(projectTask => (
                                            <ProjectTaskItem key={projectTask._id} projectId={this.state.projectId} projectTask={projectTask} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ProjectDashboard.propTypes = {
    projectTasks: PropTypes.object.isRequired,
    getProjectTasks: PropTypes.func.isRequired
};
const mapStateToProps = state => (
    {
        projectTasks: state.projectTasks
    });


export default connect(mapStateToProps, { getProjectTasks })(ProjectDashboard);
