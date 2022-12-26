import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_ALL,
  REMOVE_DONE_TODO,
  REMOVE_TODO,
} from "./todoActions";
import { todosState } from "./todoStates";

export const todoReducers = (state = todosState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case EDIT_TODO:
      newTodos = [...state];
      let index = newTodos.findIndex((t) => t.id == action.payload.id);
      if (index !== -1) {
        newTodos[index] = action.payload;

        return newTodos;
      }
    case REMOVE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((t) => t.id !== action.payload);
      return newTodos;
    case REMOVE_DONE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((t) => !t.checked);
      return newTodos;

    case REMOVE_ALL:
      return [];
  }

  return state;
};
