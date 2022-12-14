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
  const [showPassword, setShowPassword] = useState(false);

  const navigator = useNavigate();
  const onclicktoggle = () => {
    navigator("/signup");
  };
  const showpassword = () => {
    setShowPassword(!showPassword);
  };
  const onsubmit = (e) => {
    e.preventDefault();

    const obj = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(obj);
    async function Login() {
      try {
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA";

        const res = await axios.post(url, obj);
        console.log("login success");
        navigator("/home");
      } catch (err) {
        alert("somthing went wrong, please try again");
      }
    }
    Login();
  };
  return (
    <div className="form">
      <Card>
        <Card.Body>
          <Card.Title className="m-4">Login</Card.Title>
          <Form onSubmit={onsubmit}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={email}
              required
            />
            <Form.Control
              type={!showPassword ? "password" : "text"}
              placeholder="Enter password"
              ref={password}
              className="mt-2"
              required
            />
            <div className="mt-2 text-start">
              <input type="checkbox" id="vehicle1" onClick={showpassword} />
              <label forhtml="vehicle1">Show Password </label>
            </div>

            <Button variant="success" type="submit" className="mt-5 ">
              Login
            </Button>
            <div className="mt-2 mb-2">
              <a href="">forget password</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div>
        <button className="togglelogin" onClick={onclicktoggle}>
          Don't have an account?SignUp
        </button>
      </div>
    </div>
  );
};

export default Login;
