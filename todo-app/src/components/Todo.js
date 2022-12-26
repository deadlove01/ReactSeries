import React from "react";

export const Todo = () => {
  return (
    <div className="todo">
      <div className="todo__title">
        <p>todo title 1</p>
      </div>
      <div className="todos__btns">
        <label htmlFor="check"></label>
        <input type="checkbox" name="check" id="check" />
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};
