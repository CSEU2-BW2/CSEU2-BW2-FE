import React, { useEffect, useReducer, useContext } from "react";
import Context from "./context";
import reducer from "./reducer";
import "./App.css";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/NavBar";

const token = "Token " + process.env.REACT_APP_API_KEY;
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};
//test

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init/", headers)
      .then(res => {
        //console.log(res.data);
        dispatch({ type: "FETCH_INIT", payload: res.data });
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({ type: "ERROR_INIT", payload: err.response.data });
      });

    return () => {};
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <Navbar />
        <Dashboard />
      </Context.Provider>
    </div>
  );
}

export default App;
