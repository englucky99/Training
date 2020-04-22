export const addTodo = (todoItem) => {
    return {
        type: 'addTodo',
        value: todoItem
    };
}


export const EditTodo = (newValue,index) => {
    return {
        type: 'editTodo',
        value: {
            newValue:newValue,
            index:index
        }
    };
}

export const Delete = (index) => {
    return {
        type: 'deleteTodo',
        value: {           
            index:index
        }
    };
}

export const ChangeStatus = (index) => {
    return {
        type: 'ChangeStatus',
        value: {            
            index:index
        }
    };
}


