import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../stores/todos/todoActions";
import { DeleteTodo } from "./DeleteTodo";

export const Todo = ({todo, onEditHandler}) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const dispatch = useDispatch();

  const onChangeCheck = () =>{
    dispatch(editTodo({...todo, checked: !todo.checked}))
    setIsChecked(!todo.checked);
  }

  return (
    <div className="todo">
      <div className="todo__title">
        <p style={isChecked ? {textDecoration : 'line-through'} : {textDecoration: 'none'}}>{todo.title}</p>
      </div>
      <div className="todos__btns">
        <label htmlFor="check"></label>
        <input type="checkbox" name="check" id="check" checked={isChecked} onChange={onChangeCheck} />
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={()=> onEditHandler(todo.id)}>Edit</i>

        <DeleteTodo todoId={todo.id} />
      </div>
    </div>
  );
};
