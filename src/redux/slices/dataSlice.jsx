import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    weekData: {
      Monday: 10,
      Tuesday: 70,
      Wednesday: 30,
      Thursday: 40,
      Friday: 50,
      Saturday: 120,
      Sunday: 40,
    },
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const setData = dataSlice.actions;
export default dataSlice.reducer;
