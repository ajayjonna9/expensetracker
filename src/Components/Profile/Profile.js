import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import Home from "../Home/Home";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Reducers/AuthReducer";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [readOnly, setReadOnly] = useState(true);
  const dispatcher = useDispatch();
  const navigator = useNavigate();

  const onEdit = () => {
    setReadOnly(false);
  };
  const onchangeName = (e) => {
    setName(() => e.target.value);
  };
  const onchangephotoUrl = (e) => {
    setPhotoUrl(() => e.target.value);
  };
  const onCancel = () => {
    navigator("/");
  };
  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      // console.log(contexVal.token, contexVal.email);
      console.log("photo", photoUrl);
      const obj = {
        idToken: localStorage.getItem("token"),
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

      setReadOnly(true);
      // console.log("useup", resData);
      alert("profile updated Successfully");
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  useEffect(() => {
    async function getData() {
      try {
        // console.log(contexVal.token, contexVal.email);
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

        dispatcher(authActions.verifiyEmail());
        console.log("use", resData);
      } catch (err) {
        alert("somthing went wrong");
      }
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profilebackground">
        <h1 className="text-center">profile</h1>
        <div className=" profile ">
          <div className="d-flex flex-row mb-5 ">
            <h5 className="flex-grow-1">Contact Details</h5>
            <button className="cancelbutton" onClick={onCancel}>
              cancel
            </button>
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
      </div>
    </>
  );
};

export default Profile;
