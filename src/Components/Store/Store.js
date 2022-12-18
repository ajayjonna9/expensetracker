import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./Reducers/AuthReducer";
import expansereducer from "./Reducers/ExpenseReducer";
import themereducer from "./Reducers/TheamReducer";
const store = configureStore({
  reducer: { auth: authreducer, expanse: expansereducer, theme: themereducer },
});
export default store;
