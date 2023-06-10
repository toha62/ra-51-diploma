import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { list: []};

export const fetchTopSales = createAsyncThunk(
  'topSales/fetchData',
  async () => {
    const response = await fetch(`${import.meta.env.VITE_SHOP_API_URL}/top-sales`);
    const data = await response.json();
   
    return data;
  }
);

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    loadTopSales(state, action) {
      // console.log('payload', action.payload);
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSales.fulfilled, (state, action) => {        
        state.list = action.payload;
    })
  },
});

export const { loadTopSales } = topSalesSlice.actions;
export default topSalesSlice.reducer;