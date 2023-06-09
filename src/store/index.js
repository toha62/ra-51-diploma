import { configureStore } from "@reduxjs/toolkit";
import topSalesReducer from './topSalesSlice';

export const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
  },
});
