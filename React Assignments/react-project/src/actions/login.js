export const login = (user=null) => {
    return {
        type: 'login',
        value: user
    };
}

export const logout = () => {
    return {
        type: 'logout'        
    };
}

export const register = (user) => {
    return {
        type: 'register',
        value: user
    };
}
