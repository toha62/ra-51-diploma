import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { list: [], isLoading: 'idle', error: null};

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