import React from "react";
import axios from "axios";
import { authActions } from "../Store/Reducers/AuthReducer";
import { useDispatch } from "react-redux";
import Signup from "./Signup";

const SignUpAuth = (obj, head) => {
  const dispatcher = useDispatch();

  return async function Signup() {
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
      navigator("/home");
    } catch (err) {
      alert("somthing went wrong, please try again");
    }
  };
};

export default SignUpAuth;
