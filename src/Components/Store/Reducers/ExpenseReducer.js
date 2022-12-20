import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  expansearr: [],
  totalSpend: 0,
  id: 0,
};
const expanseSlice = createSlice({
  name: "Expanse",
  initialState: initialState,
  reducers: {
    assignDatabasData: (state, action) => {
      state.expansearr = action.payload.expansearr || [];
      state.totalSpend = Number(action.payload.totalSpend);
      state.id = Number(action.payload.id);
    },
    addExpanse: (state, action) => {
      const newobj = {
        amount: Number(action.payload.money),
        description: action.payload.des,
        category: action.payload.category,
        id: Number(state.id) + 1,
      };
      state.id += 1;
      state.expansearr.push(newobj);
      state.totalSpend =
        Number(state.totalSpend) + Number(action.payload.money);
    },
    deleteExpanse: (state, action) => {
      const ele = state.expansearr.findIndex(
        (item) => item.id === action.payload
      );
      state.totalSpend -= state.expansearr[ele].amount;
      const newexparr = state.expansearr.filter((item) => {
        return item.id !== action.payload;
      });

      state.expansearr = [...newexparr];
    },
    removeAllExpanse: (state) => {
      state.expansearr = [];
      state.totalSpend = 0;
      state.id = 0;
    },
    editExpanse: (state, action) => {
      const ele = state.expansearr.findIndex(
        (item) => item.id === action.payload.id
      );

      let existingele = state.expansearr[ele];
      state.totalSpend =
        state.totalSpend -
        Number(existingele.amount) +
        Number(action.payload.amount);
      existingele.amount = Number(action.payload.amount);
      existingele.description = action.payload.description;
      existingele.category = action.payload.category;
      existingele.id = Number(action.payload.id);
    },
  },
});
const expansereducer = expanseSlice.reducer;
const expanseActions = expanseSlice.actions;
export default expansereducer;
export { expanseActions };
