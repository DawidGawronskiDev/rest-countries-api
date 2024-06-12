import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      const { mode } = state;
      state.mode = mode ? "light" : "dark";
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
