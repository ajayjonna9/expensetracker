import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import Contex from "../Store/Contex";

const Profile = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const contexVal = useContext(Contex);
  const [readOnly, setReadOnly] = useState(true);
  const onEdit = () => {
    setReadOnly(false);
  };
  const onchangeName = (e) => {
    setName(() => e.target.value);
  };
  const onchangephotoUrl = (e) => {
    setPhotoUrl(() => e.target.value);
  };
  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(contexVal.token, contexVal.email);
      console.log("photo", photoUrl);
      const obj = {
        idToken: contexVal.token,
        displayName: name,
        photoUrl: photoUrl,
        returnSecureToken: true,
      };
      const head = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
        obj,
        head
      );
      console.log(res);
      const obj1 = {
        idToken: contexVal.token,
      };

      const resData = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
        obj1,
        head
      );
      setReadOnly(true);
      console.log("useup", resData);
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  useEffect(() => {
    async function getData() {
      try {
        console.log(contexVal.token, contexVal.email);
        const obj1 = {
          idToken: localStorage.getItem("token"),
        };
        const head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resData = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
          obj1
        );
        console.log(resData.data.users[0].photoUrl);
        setName(() => resData.data.users[0].displayName);
        setPhotoUrl(() => resData.data.users[0].photoUrl);

        console.log("use", resData);
      } catch (err) {
        alert("somthing went wrong");
      }
    }
    getData();
  }, []);

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
          <button className="cancelbutton">cancel</button>
        </div>
        <form onSubmit={onUpdate}>
          <div className="d-flex flex-row">
            <label forhtml="name">Full Name:</label>
            <input
              type="text"
              id="name"
              onChange={onchangeName}
              value={name}
              readOnly={readOnly}
              required
            ></input>
            <label forhtml="upload-photo">
              Profile photo url
              <input
                type="file"
                name="photo"
                id="upload-photo"
                onChange={onchangephotoUrl}
              ></input>
            </label>
            <input type="text" name="url" value={photoUrl} readOnly></input>
            <button type="button" className="profileedit" onClick={onEdit}>
              Edit
            </button>
          </div>

          <button
            type="submit"
            data-toggle="modal"
            data-target="#notAvailable"
            className={
              readOnly
                ? " profileupdate profileupdatereadonly"
                : "profileupdate"
            }
          >
            update
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
