import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../Login/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigator = useNavigate();
  const onclicktoggle = () => {
    navigator("/login");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (password.current.value === confirmPassword.current.value) {
      const obj = {
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      console.log(obj);
      async function signUp() {
        try {
          const url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA";

          const res = await axios.post(url, obj);
          console.log("signup  success");
          navigator("/home");
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
  );
};

export default Signup;
