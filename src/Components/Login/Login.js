import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const onsubmit = (e) => {
    e.preventDefault();
    if (password.current.value === confirmPassword.current.password) {
      const obj = {
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      console.log(obj);
      async function signUp() {
        try {
          const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
            obj
          );
          console.log("signup successfully");
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
              className="mt-2"
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
        <button className="togglelogin">Have an account?Login</button>
      </div>
    </div>
  );
};

export default Login;
