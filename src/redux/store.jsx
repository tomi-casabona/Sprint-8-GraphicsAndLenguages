import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import compareReducer from "./slices/compareSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    compare: compareReducer,
  },
});
