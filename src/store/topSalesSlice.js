import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: []};

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    loadTopSales(state, action) {
      console.log('payload', action.payload);
      state.list = action.payload;
    },
  },
});

export const { loadTopSales } = topSalesSlice.actions;
export default topSalesSlice.reducer;