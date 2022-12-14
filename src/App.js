import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
