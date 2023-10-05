import "./App.css";
import Checkout from "./Checkout";
import Home from "./Home";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [state,dispatch]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "setUser",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "setUser",
          user: null,
        });
      }
    });
  }, []);

  return (
    
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
