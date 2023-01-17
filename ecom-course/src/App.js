import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Auth from './pages/auth/auth';
import { Home } from './pages/homepage/home';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<Auth />} />
      </Routes>

    </div>
  );
}

export default App;
