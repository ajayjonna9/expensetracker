import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: false,
  edit: false,
  editVal: null,
};
const themeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    addDarkTheme: (state) => {
      state.darkTheme = true;
    },
    toggledarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    isEdited: (state, action) => {
      state.edit = true;
      state.editVal = action.payload;
      console.log(state.editVal);
      console.log("kkk");
    },
    removeEdit: (state) => {
      state.edit = false;
    },
  },
});
const themereducer = themeSlice.reducer;
const themeActions = themeSlice.actions;
export default themereducer;
export { themeActions };
