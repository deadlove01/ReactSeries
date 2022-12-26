import React, { useContext, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "../../stores/todos/todoActions";

export const CreateTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const createTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        title: input,
        checked: false,
      })
    );
    setInput("");
  };

  return (
    <section className="add__todo">
      <h1>ToDo App</h1>
      <form className="add__todo__form" onSubmit={createTodo}>
        <label htmlFor="todo"></label>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add__todo__btn">Add New Task</button>
        {/* <p className="errors">{err}</p> */}
      </form>
    </section>
  );
};
