import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export const DeleteTasks = () => {

    const {todos, setTodos} = useContext(TodoContext)

    const deleteDoneTasks = () =>{
        const newTodos = [...todos];

        const remainingTodos = newTodos.filter(t => !t.checked);
        setTodos(remainingTodos);

    }

    const deleteAllTasks = () =>{
        setTodos([])
    }

  return (
    <section className="delete__tasks">
      <button onClick={deleteDoneTasks}>Delete done tasks</button>
      <button onClick={deleteAllTasks}>Delete all tasks</button>
    </section>
  );
};
