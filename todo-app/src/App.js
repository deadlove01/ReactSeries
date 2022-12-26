import { Todos } from "./components/Todos";
import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <div className="App">
      <section className="add__todo">
        <h1>ToDo App</h1>
        <form className="add__todo__form" >
          <label htmlFor="todo"></label>
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Add todo"
          />
          <button className="add__todo__btn">Add New Task</button>
          {/* <p className="errors">{err}</p> */}
        </form>
      </section>


      <section className="add__todo">
            <h1>ToDo App Edit</h1>
            <form className="add__todo__form" >
                <label htmlFor="todo"></label>
                <input type="text"
                    id="todo"
                    name="todo" />
                <button className="add__todo__btn">Edit Task</button>
                {/* <p className="errors">{err}</p> */}
            </form>
        </section>


        <Todos />

      
    </div>
  );
}

export default App;
