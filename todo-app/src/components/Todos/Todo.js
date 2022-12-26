import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { DeleteTodo } from "./DeleteTodo";

export const Todo = ({todo, onEditHandler}) => {

  const {todos, setTodos} = useContext(TodoContext);

  const [isChecked, setIsChecked] = useState(todo.checked);

  const onChangeCheck = () =>{
    const newTodos = [...todos];

    const updateTodo = newTodos.find(t => t.id === todo.id);
    if(updateTodo)
    {
      updateTodo.checked = !todo.checked
      setIsChecked(updateTodo.checked);
    }

    setTodos(newTodos);
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
