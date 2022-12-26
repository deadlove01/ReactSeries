import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export const EditTodo = ({todoId, successfulEdit }) => {

    const {todos, setTodos} = useContext(TodoContext);
    const currentTodo = todos.find(t => t.id === todoId);

    const [input, setInput] = useState(currentTodo.title)

    const onEditTodo = (e) => {
        e.preventDefault();
        if(input === '')
            return;
        
        const newTodos = [...todos];
        const updateTodo = newTodos.find(t => t.id === todoId);
        if(updateTodo)
        {
            updateTodo.title = input;
            setTodos(newTodos);
            setInput('')
            successfulEdit();
        }

        
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
