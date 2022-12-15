import React from "react";

const Contex = React.createContext({
  token: "",
  email: "",
  addToken: (token, email) => {},
});

export default Contex;
