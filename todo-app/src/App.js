import { CreateTodo } from "./components/Todos/CreateTodo";
import { Todos } from "./components/Todos/Todos";
import { TodoContextProvider } from "./contexts/TodoContext";
import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
