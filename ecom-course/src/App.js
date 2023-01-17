import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth } from "./firebase/FirebaseUtils";
import Auth from "./pages/auth/auth";
import { Home } from "./pages/homepage/home";
import Shop from "./pages/shop/Shop";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth)
      {
        setCurrentUser(userAuth);
        console.log(userAuth);
      }
    });
  
    return async () => {
      unsub();
    }
  }, [])
  


  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
