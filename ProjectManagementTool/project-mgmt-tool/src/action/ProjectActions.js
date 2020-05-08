import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from './types';


export const createProject = (project, history) => async dispatch => {
    if(project._id){
        const res = await axios.post(`http://localhost:8000/api/project/${project._id}`, project);        
        if (res.data.response.success==0) {
            dispatch({
                type: GET_ERRORS,
                payload: res.data.response.data
            });
        } else {
            history.push("/dashboard");
        }
    } else {
        const res = await axios.post("http://localhost:8000/api/project/add", project);        
        if (res.data.response.success==0) {
            dispatch({
                type: GET_ERRORS,
                payload: res.data.response.data
            });
        } else {
            history.push("/dashboard");
        }
    }
    

};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8000/api/project");
   
    dispatch({
        type: GET_PROJECTS,
        payload: res.data.data
    });
};

export const getProject = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8000/api/project/${id}`);    
    dispatch({
        type: GET_PROJECT,
        payload: res.data.response.data
    });
};


export const deleteProject = id => async dispatch => {
    await axios.delete(`http://localhost:8000/api/project/${id}`);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    });
};



