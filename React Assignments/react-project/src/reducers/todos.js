import { todos } from './data';
const TodoReducer = (state = todos, action) => {    
    switch (action.type) {
        case 'addTodo':
            {
                if (action.value) {
                    todos.push(action.value);
                    state = todos;
                    return state;
                } else {
                    return state;
                }

            }
        case 'editTodo':
            {
                if (action.value) {
                    let currentTodo = todos[action.value.index];
                    currentTodo.name = action.value.newValue;
                    state = todos;
                    return state
                }
                else {
                    return state
                }
            }
        case 'deleteTodo':
            {
                if (action.value) {                    
                    todos.splice(action.value.index,1);                    
                    state = todos;
                    return state
                }
                else {
                    return state
                } 
            }
        case 'ChangeStatus':
            {
                if (action.value) {                    
                    todos[action.value.index].complete=!todos[action.value.index].complete;                    
                    state = todos;
                    return state
                }
                else {
                    return state
                } 
            }

        default:
            return state;
    }
}

export default TodoReducer;