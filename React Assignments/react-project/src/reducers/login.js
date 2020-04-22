import {users} from './data';
const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'login':
            {               
                if (action.value) {
                    let user = users.find((user) => user.username === action.value.username && user.password === action.value.password);
                    if (user)
                        state = true;
                    else
                        state = false;
                    return state;
                } else {
                    return state;
                }

            }
        case 'logout':
            return state=false
        default:
            return state;
    }
}

const registerReducer = (state = 0, action) => {
    switch (action.type) {
        case 'register':
            {
                if (action.value) {
                    users.push(action.value);
                    console.log(users);
                    return state = 1;
                } else {
                    return state = 0;
                }
            }
        default:
         return state;
    }
}



export {
    loginReducer,
    registerReducer
}
