import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const localstorageToken = localStorage.getItem("token");
  const localstorageEmail = localStorage.getItem("email");
  const [token, setToken] = useState(localstorageToken);
  const [gmail, setGmail] = useState(localstorageEmail);
  const addToken = (token, email) => {
    setToken(token);
    setGmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const contexValues = {
    token: token,
    email: gmail,
    addToken: addToken,
  };

  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
