import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../utils';

const initialState = { list: [], isLoading: 'idle', error: null};

export const fetchTopSales = createAsyncThunk(
  'topSales/fetchData',
  fetchData,
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
      .addCase(fetchTopSales.pending, (state) => {        
        state.isLoading = 'loading';
        state.error = null;
      })
      .addCase(fetchTopSales.fulfilled, (state, action) => {        
        state.list = action.payload;  
        state.isLoading = 'idle';    
      })
      .addCase(fetchTopSales.rejected, (state, action) => {        
        state.isLoading = 'failed';
        state.error = action.error;
      });
  },
});

export const { loadTopSales } = topSalesSlice.actions;
export default topSalesSlice.reducer;