import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [isAccount, setIsAccount] = useState(false);
  const navigator = useNavigate();
  const onclicktoggle = () => {
    setIsAccount(!isAccount);
  };

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
          let url;
          if (isAccount) {
            url =
              "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA";
          } else {
            url =
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA";
          }
          const res = await axios.post(url, obj);
          if (!isAccount) {
            console.log("signup successfully");
          } else {
            console.log("Login Successfully");
            navigator("/home");
          }
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
          <Card.Title className="m-4">
            {!isAccount ? <h5>Sign Up</h5> : <h5>Login</h5>}
          </Card.Title>
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
              {!isAccount ? <h6>Sign Up</h6> : <h6>Login</h6>}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        <button className="togglelogin" onClick={onclicktoggle}>
          {!isAccount ? (
            <p className="mt-2">Have an account?Login</p>
          ) : (
            <p className="mt-2">Don't have an account?SignUp</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
