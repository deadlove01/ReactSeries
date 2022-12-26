import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

export const DeleteTodo = ({todoId}) => {

    const {todos, setTodos} = useContext(TodoContext);

    const onDeleteTodo = () =>{
        const newTodos = [...todos];

        const remainingTodos = newTodos.filter(x => x.id !== todoId);
        setTodos(remainingTodos);

    }


  return (
    <i className="fa fa-trash" aria-hidden="true" onClick={onDeleteTodo}> Delete</i>
  )
}
