import axios from 'axios';
import { GET_ERRORS, GET_PROJECT_TASKS, GET_PROJECT_TASK, DELETE_PROJECT_TASK } from './types';


export const createProjectTask = (projectTask, history) => async dispatch => {
    if(projectTask._id){
        const res = await axios.post(`http://localhost:8000/api/projectTask/${projectTask._id}`, projectTask);        
        if (res.data.response.success==0) {
            dispatch({
                type: GET_ERRORS,
                payload: res.data.response.data
            });
        } else {
            history.push("/projectDashboard/"+projectTask.projectId);
        }
    } else {
        const res = await axios.post("http://localhost:8000/api/projectTask/add", projectTask);
        if (res.data.response.success==0) {
            dispatch({
                type: GET_ERRORS,
                payload: res.data.response.data
            });
        } else {
            history.push("/projectDashboard/"+projectTask.projectId);
        }
    }
    

};

export const getProjectTasks = (id) => async dispatch => {
    const res = await axios.get("http://localhost:8000/api/projectTask/"+id);
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data.data
    });
};

export const getProjectTask = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8000/api/projectTask/getProjectTaskById/${id}`);
    dispatch({
        type: GET_PROJECT_TASK,
        payload: res.data.response.data
    });
};


export const deleteProjectTask = id => async dispatch => {
    await axios.delete(`http://localhost:8000/api/projectTask/${id}`);
    dispatch({
        type: DELETE_PROJECT_TASK,
        payload: id
    });
};



