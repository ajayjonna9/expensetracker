import React, { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../Login/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/Reducers/AuthReducer";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const onclicktoggle = () => {
    navigator("/login");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    dispatcher(authActions.setFirst());
    if (password.current.value === confirmPassword.current.value) {
      const obj = {
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      const head = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(obj);
      async function signUp() {
        try {
          const url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA";

          const res = await axios.post(url, obj, head);
          // const RegEx = /^[a-z0-9]+$/i;
          // let newMail = "";
          // for (let i = 0; i < res.data.email.length; i++) {
          //   if (RegEx.test(res.data.email[i])) {
          //     newMail = newMail + res.data.email[i];
          //   }
          // }
          //contexVal.addToken(res.data.idToken, newMail);
          //contexVal.addToken(res.data.)
          const values = {
            token: res.data.idToken,
            email: res.data.email,
          };
          dispatcher(authActions.addtoken(values));
          console.log("signup  success");
          navigator("/");
        } catch (err) {
          alert("somthing went wrong, please try again");
        }
      }
      signUp();
    } else {
      alert("confirmPassword is mismatch");
    }
  };
  return (
    <div className="background">
      <div className="form">
        <Card>
          <Card.Body>
            <Card.Title className="m-4">Sign Up</Card.Title>
            <Form onSubmit={onsubmit}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={email}
                required
              />

              <Form.Control
                type="password"
                placeholder="Enter password"
                ref={password}
                className="mt-2 "
                required
              />

              <Form.Control
                type="text"
                placeholder="confirm password"
                ref={confirmPassword}
                className="mt-2"
                required
              />

              <Button variant="success" type="submit" className="mt-4 mb-5">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div>
          <button className="togglelogin" onClick={onclicktoggle}>
            Have an account?Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
