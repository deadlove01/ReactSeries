import React from 'react'

export const Todos = () => {

    const todoList = [
        {
            id: 1,
            title: 'this is title',
            checked: true
        },
        {
            id: 2,
            title: 'this is title 2',
            checked: false
        },
        {
            id: 3,
            title: 'this is title 3',
            checked: false
        }
    ]


  return (
    <section className="todos__container">
        <h1>ToDo List</h1>

        {todoList.map((todo, i) =>{
            
        })}

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

        <div className="todo">
          <div className="todo__title">
            <p>todo title 2</p>
          </div>
          <div className="todos__btns">
            <label htmlFor="check"></label>
            <input type="checkbox" name="check" id="check" />
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </div>
        </div>
      </section>
  )
}
