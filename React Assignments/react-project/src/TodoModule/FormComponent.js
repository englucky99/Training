import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todos';

const FormComponent = (props) => {
    const dispatch = useDispatch();
    let inputTodo = '';
    let createTodo = (event) => {
        event.preventDefault();
        dispatch(addTodo({ name: inputTodo.value, complete: false }))
        props.GetUpdatedState();
        inputTodo.value = '';
    }
    return (
        <form onSubmit={createTodo} className="addtodo">
            <div className="row">
                <div className="col-10">
                    <input type="text" className="form-control"
                        placeholder='Add todo here..'
                        ref={(value) => { inputTodo = value; }}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>
            </div>
        </form>
    )
}

export default FormComponent;