import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  expansearr: [],
  totalSpend: 0,
};
const expanseSlice = createSlice({
  name: "Expanse",
  initialState: initialState,
  reducers: {
    addExpanse: (state, action) => {
      state.expansearr.push(action.payload);
      state.totalSpend =
        Number(state.totalSpend) + Number(action.payload.money);
    },
    deleteExpanse: (state, action) => {
      state.expansearr = state.expansearr.filter((item) => {
        if (item.id === action.payload) {
          state.totalSpend =
            Number(state.totalSpend) - Number(action.item.money);
        }
        return item.id !== action.payload;
      });
    },
  },
});
const expansereducer = expanseSlice.reducer;
const expanseActions = expanseSlice.actions;
export default expansereducer;
export { expanseActions };
