import React from "react";
import { useDispatch } from "react-redux";
import { removeAllTodo, removeDoneTodo } from "../../stores/todos/todoActions";

export const DeleteTasks = () => {

    const dispatch = useDispatch();

    const deleteDoneTasks = () =>{
        dispatch(removeDoneTodo())
    }

    const deleteAllTasks = () =>{
        dispatch(removeAllTodo())
    }

  return (
    <section className="delete__tasks">
      <button onClick={deleteDoneTasks}>Delete done tasks</button>
      <button onClick={deleteAllTasks}>Delete all tasks</button>
    </section>
  );
};
