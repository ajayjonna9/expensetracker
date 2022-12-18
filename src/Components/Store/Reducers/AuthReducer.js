import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userID: "",
  isLoggedin: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    addtoken: (state, action) => {
      state.token = action.payload.token;
      state.userID = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      state.isLoggedin = true;
    },
  },
});
const authreducer = authSlice.reducer;
const authActions = authSlice.actions;
export default authreducer;
export { authActions };
