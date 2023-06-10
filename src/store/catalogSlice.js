import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../utils';

const initialState = { categoriesList: [], itemsList: [], isLoading: 'idle', error: null};

export const fetchCategories = createAsyncThunk(
  'catalog/fetchCategories',
  fetchData,
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  // reducers: {
  //   loadTopSales(state, action) {
  //     // console.log('payload', action.payload);
  //     state.list = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {        
        state.isLoading = 'loading';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {        
        state.categoriesList = action.payload;  
        state.isLoading = 'idle';    
      })
      .addCase(fetchCategories.rejected, (state, action) => {        
        state.isLoading = 'failed';
        state.error = action.error;
      });
  },
});

export const { loadCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;