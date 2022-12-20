import { createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../Store/Reducers/AuthReducer";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";

import "./Home.css";

const Home = () => {
  const profile = useSelector((state) => state.auth.profile);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const gotoProfile = () => {
    navigator("/profile");
  };
  const onLogout = () => {
    dispatcher(authActions.onLogout());
    dispatcher(expanseActions.removeAllExpanse());
    navigator("/");
  };
  const onLogin = () => {
    dispatcher(authActions.onLogout());
    dispatcher(expanseActions.removeAllExpanse());
    navigator("/login");
  };
  const onHome = () => {
    navigator("/");
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
      alert("verify link send to your email");
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="d-flex flex-row w-100 ">
          <p className="home flex-grow-1 text-light" onClick={onHome}>
            Welcome to Expense Tracker
          </p>
          {isLoggedin ? (
            <div>
              {profile && (
                <button className="home" onClick={verifyEmail}>
                  verify email
                </button>
              )}

              <button className="home" onClick={gotoProfile}>
                your profile is incomplete
              </button>

              <button className="home" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="home" onClick={onLogin}>
              Login
            </button>
          )}
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Home;
