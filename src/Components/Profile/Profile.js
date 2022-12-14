import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="d-flex ">
        <p className="home flex-grow-1">Welcome to Expense Tracker</p>

        <p className="home">your profile is incomplete</p>
      </div>
      <hr></hr>
      <div className="profile ">
        <div className="d-flex flex-row mb-5">
          <h5 className="flex-grow-1">Contact Details</h5>
          <button>cancel</button>
        </div>

        <div className="d-flex flex-row">
          <label forhtml="name">Full Name:</label>
          <input type="text" id="name" className="flex-grow-1" />

          <label forhtml="name">Profile photo url</label>
          <input type="file" id="name" />
        </div>
      </div>
      <button className="profileupdate">update</button>
    </>
  );
};

export default Profile;
