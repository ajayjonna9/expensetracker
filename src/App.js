import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Login from "./Components/Login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Profile from "./Components/Profile/Profile";

import Forgetpassword from "./Components/ForgetPassword/Forgetpassword";
import AddExpense from "./Components/AddExpanses/AddExpense";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
      <Route path="/addexpanse" element={<AddExpense />}></Route>
    </Routes>
  );
}

export default App;
