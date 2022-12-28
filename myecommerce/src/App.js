import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
