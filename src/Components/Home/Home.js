import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contex from "../Store/Contex";
import "./Home.css";

const Home = () => {
  const contexVal = useContext(Contex);
  const navigator = useNavigate();

  const gotoProfile = () => {
    navigator("/profile");
  };
  const verifyEmail = async () => {
    try {
      const obj = {
        requestType: "VERIFY_EMAIL",
        idToken: localStorage.getItem("token"),
      };

      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
        obj
      );
      console.log(res);
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  return (
    <>
      <div className="d-flex ">
        <p className="home flex-grow-1">Welcome to Expense Tracker</p>

        <button className="home" onClick={gotoProfile}>
          your profile is incomplete
        </button>

        <button className="home" onClick={verifyEmail}>
          verify email
        </button>
      </div>
      <hr />
    </>
  );
};

export default Home;
