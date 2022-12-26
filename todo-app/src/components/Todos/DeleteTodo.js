import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../stores/todos/todoActions";

export const DeleteTodo = ({ todoId }) => {
  const dispatch = useDispatch();

  return (
    <i
      className="fa fa-trash"
      aria-hidden="true"
      onClick={() => dispatch(removeTodo(todoId))}
    >
      Delete
    </i>
  );
};
