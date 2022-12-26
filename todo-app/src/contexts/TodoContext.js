import react, { createContext, useState } from "react";
import uuid from 'react-uuid';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "this is title 1",
      checked: true,
    },
    {
      id: uuid(),
      title: "this is title 2",
      checked: false,
    },
    {
      id: uuid(),
      title: "this is title 3",
      checked: false,
    },
  ]);


  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
