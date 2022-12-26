import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import uuid from 'react-uuid';

export const CreateTodo = () => {

    const {todos, setTodos} = useContext(TodoContext)

    const [input, setInput] = useState('')

    const onCreateTodo = (e) =>{
        e.preventDefault();

        const newTodos = [...todos, {
            id: uuid(),
            title: input,
            checked: false
        }];


        setTodos(newTodos);
        setInput('');
    }


  return (
    <section className="add__todo">
      <h1>ToDo App</h1>
      <form className="add__todo__form" onSubmit={onCreateTodo}>
        <label htmlFor="todo"></label>
        <input type="text" id="todo" name="todo" placeholder="Add todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add__todo__btn">Add New Task</button>
        {/* <p className="errors">{err}</p> */}
      </form>
    </section>
  );
};
