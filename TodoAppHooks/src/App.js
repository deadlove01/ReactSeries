import './App.css';
import { FooterComponent } from './components/Footer';
import { FormInputComponent } from './components/FormInput';
import { ListComponent } from './components/List';

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>

            <FormInputComponent />
            <ListComponent />
            <FooterComponent />
            

          
        </div>
    );
}

export default App;
