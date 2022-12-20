import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Forgetpassword = () => {
  const email = useRef();
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        requestType: "PASSWORD_RESET",
        email: email.current.value,
      };

      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCCO6oxBDXyShDKpQc3CuIvIiZCPNoSXQA",
        obj
      );
      alert("Link send to your Email");
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  return (
    <div className="form">
      <Card>
        <Card.Body>
          <p className="m-4">Enter your email that you registered </p>
          <Form onSubmit={onsubmit}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={email}
              required
            />

            <Button variant="success" type="submit" className="mt-5 ">
              Send Link
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Forgetpassword;
