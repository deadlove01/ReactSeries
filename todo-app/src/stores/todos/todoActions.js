export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_DONE_TODO = "REMOVE_DONE_TODO";
export const REMOVE_ALL = "REMOVE_ALL";


export const addTodo = (todo) =>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export const removeTodo = (todoId) => {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}


export const removeDoneTodo = () => {
    return {
        type: REMOVE_DONE_TODO
    }
}


export const removeAllTodo = () => {
    return {
        type: REMOVE_ALL
    }
}