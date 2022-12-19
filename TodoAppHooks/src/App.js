import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>

            <form>
                <input type="text" name="todos" id="todos" required placeHolder="What needs to be done?"/>
                <button type="submit">Create</button>
            </form>

            <ul>
                <li>
                    <label htmlFor>
                      <input type="checkbox" id="" />
                      Cooking To Do
                    </label>
                    <button>Edit</button>
                </li>

                <li>
                    <label htmlFor>
                      <input type="checkbox" id="" />
                      Cooking To Do 2
                    </label>
                    <button>Edit</button>
                </li>
            </ul>

            <div>
              <label>
                <input type="checkbox" name="all" id="all" />
                All
              </label>
              <p>You have 0 to do</p>
              <button>Delete</button>
            </div>
        </div>
    );
}

export default App;
