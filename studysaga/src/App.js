import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { addCartAction } from './redux/action';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
