import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../stores/todos/todoActions";

export const EditTodo = ({todoId, successfulEdit }) => {
    const currentTodo = useSelector(state => state.find(t => t.id === todoId));
    const dispatch = useDispatch();

    const [input, setInput] = useState(currentTodo.title)

    const onEditTodo = (e) => {
        e.preventDefault();
        if(input === '')
            return;
        
        dispatch(editTodo({...currentTodo, title: input}));
        setInput("")
        successfulEdit();
    }

  return (
    <section className="add__todo">
      <h1>ToDo App Edit</h1>
      <form className="add__todo__form" onSubmit={onEditTodo}>
        <label htmlFor="todo"></label>
        <input type="text" id="todo" name="todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add__todo__btn">Edit Task</button>
        {/* <p className="errors">{err}</p> */}
      </form>
    </section>
  );
};
