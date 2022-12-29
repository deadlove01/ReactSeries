import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes, useParams } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { NavBar } from "./layouts/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
