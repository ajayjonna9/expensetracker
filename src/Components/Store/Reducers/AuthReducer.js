import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  userID: localStorage.getItem("email"),
  isLoggedin: !!localStorage.getItem("token"),
  profile: false,
  isFirst: true,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    addtoken: (state, action) => {
      const RegEx = /^[a-z0-9]+$/i;
      let newMail = "";
      for (let i = 0; i < action.payload.email.length; i++) {
        if (RegEx.test(action.payload.email[i])) {
          newMail = newMail + action.payload.email[i];
        }
      }
      console.log(newMail);
      state.token = action.payload.token;
      state.userID = newMail;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", newMail);
      state.isLoggedin = true;
    },
    verifiyEmail: (state) => {
      state.profile = true;
    },
    onLogout: (state) => {
      state.token = null;
      state.userID = null;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      state.isFirst = true;
      state.isLoggedin = false;
    },
    isFirst: (state) => {
      state.isFirst = false;
    },
    setFirst: (state) => {
      state.isFirst = true;
    },
  },
});
const authreducer = authSlice.reducer;
const authActions = authSlice.actions;
export default authreducer;
export { authActions };
