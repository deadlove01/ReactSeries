import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes, useParams } from "react-router-dom";

const HatsPage = () => {
  const pa = useParams();
  return (
    <div>
    <h1>HATS PAGE {pa.hatId}</h1>
  </div>
  )

};


const JacketsPage = () => (
  <div>
    <h1>jacket PAGE </h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SneakersPage </h1>
  </div>
);


const WomensPage = () => (
  <div>
    <h1>WomensPage PAGE </h1>
  </div>
);


const MensPage = () => (
  <div>
    <h1>MensPage PAGE </h1>
  </div>
);





function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/jackets" element={<JacketsPage />} />

        <Route path="/hats/:hatId" element={<HatsPage />} />
        {/* <Route path="/topic/:topicId" element={<TopicDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
