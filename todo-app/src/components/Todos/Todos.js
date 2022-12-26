import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { CreateTodo } from "./CreateTodo";
import { DeleteTasks } from "./DeleteTasks";
import { EditTodo } from "./EditTodo";
import { Todo } from "./Todo";

export const Todos = () => {

  const todos = useSelector(state => state);

  const [create, setCreate] = useState(true);
  const [id, setId] = useState("");

  const onEditHandler = (todoId) =>{
    setCreate(false);
    setId(todoId)
  }

  const successfulEdit = () =>{
    setCreate(true);
  }


  return (
    <div>
      {create ? <CreateTodo /> : <EditTodo todoId={id} successfulEdit={successfulEdit} />}
      <section className="todos__container">
        <h1>Todo List</h1>

        {todos.length > 0 ? (
          todos.map((todo) => <Todo key={todo.id} todo={todo} onEditHandler={onEditHandler} />)
        ) : (
          <p>No todos here!</p>
        )}
      </section>

      <DeleteTasks  />
    </div>
  );
};
