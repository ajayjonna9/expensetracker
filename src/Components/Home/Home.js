import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigator = useNavigate();
  const gotoProfile = () => {
    navigator("/profile");
  };
  return (
    <>
      <div className="d-flex ">
        <p className="home flex-grow-1">Welcome to Expense Tracker</p>

        <button className="home" onClick={gotoProfile}>
          your profile is incomplete
        </button>
      </div>
      <hr />
    </>
  );
};

export default Home;
