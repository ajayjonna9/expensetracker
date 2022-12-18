import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  expansearr: [],
};
const expanseSlice = createSlice({
  name: "Expanse",
  initialState: initialState,
  reducers: {
    addExpanse: (state, action) => {
      state.expansearr.push(action.payload);
    },
    deleteExpanse: (state, action) => {
      state.expansearr = state.expansearr.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
const expansereducer = expanseSlice.reducer;
const expanseActions = expanseSlice.actions;
export default expansereducer;
export { expanseActions };
