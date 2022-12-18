import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./Reducers/AuthReducer";
import expansereducer from "./Reducers/ExpenseReducer";
const store = configureStore({
  reducer: { auth: authreducer, expanse: expansereducer },
});
export default store;
