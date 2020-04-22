import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { EditTodo,ChangeStatus, Delete } from "../actions/todos";

const TodoComponent = (props) => {
    const[isEdit,setIsEdit]  = useState(false);
    let inputTodo='';
    const dispatch= useDispatch();
    let updateTodo = (event) => {
        event.preventDefault();
        dispatch(EditTodo(inputTodo.value,props.index ));
        toggleState();
        props.GetUpdatedState();

    }

    let toggleState = () => {
        setIsEdit(!isEdit);
    }

    return (
        <section>
            {
                isEdit ?
                    <form onSubmit={updateTodo} className="todoItem">
                        <input type="text"
                            defaultValue={props.todo.name}
                            ref={(value) => { inputTodo = value; }}
                        ></input>
                        <button type="submit">Update</button>
                    </form>
                    :
                    <li className={props.todo.complete ? 'complete todoItem' : 'todoItem'}>
                        <label className="inline-check"><input type="checkbox" checked={props.todo.complete} onChange={()=>{ dispatch(ChangeStatus(props.index));props.GetUpdatedState();}}/></label>                        
                        {props.todo.name}
                        <button onClick={(event) => { event.stopPropagation(); dispatch(Delete(props.index));props.GetUpdatedState(); }}>x</button>
                        <button onClick={(event) => { event.stopPropagation(); toggleState() }}>EditTodo</button>
                    </li>
            }

        </section>

    )

}

export default TodoComponent;