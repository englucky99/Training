import {GET_PROJECT_TASKS,GET_PROJECT_TASK,DELETE_PROJECT_TASK} from'../action/types';
const initialState={
projectTasks:[],
projectTask:{}
};
export default function(state=initialState,action)
{    
    switch(action.type){
        case GET_PROJECT_TASKS:
        return{
            ...state,
            projectTasks:action.payload
        };
        case GET_PROJECT_TASK:
        return{
            ...state,
            projectTask:action.payload
        };
        case DELETE_PROJECT_TASK:
        return{
            ...state,
            projectTasks:state.projectTasks.filter(
            projectTask=>projectTask._id!=action.payload
            )           
        };
        default:
        return state;
        }
}