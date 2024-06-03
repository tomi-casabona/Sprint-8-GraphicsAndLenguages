import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { weekData: {lunes : 20, martes: 10, miercoles: 20, jueves: 23, viernes:33, sabado: 123, domingo:33} },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const setData = dataSlice.actions;
export default dataSlice.reducer;
