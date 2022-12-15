import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import ContexProvider from "./Components/Store/ContexProvider";
function App() {
  return (
    <ContexProvider>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </ContexProvider>
  );
}

export default App;
