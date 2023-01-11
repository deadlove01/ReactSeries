import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';

function App() {
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
