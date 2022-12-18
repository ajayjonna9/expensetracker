import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: false,
};
const themeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    addDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
const themereducer = themeSlice.reducer;
const themeActions = themeSlice.actions;
export default themereducer;
export { themeActions };
