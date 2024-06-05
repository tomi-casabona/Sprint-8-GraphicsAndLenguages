import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compareData: {
      today: {day:null, value:null},
      yesterday: {day:null, value:null},
    },
  },
  reducers: {
    setTodayData: (state, action) => {
        state.compareData.today= action.payload;
    },
    setYesterdayData: (state, action) => {
        state.compareData.yesterday= action.payload;
    },
  },
});

export const { setTodayData, setYesterdayData } = compareSlice.actions;
export default compareSlice.reducer;
