import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../utils';

const initialState = { categoriesList: [], itemsList: [], activeNavigator: 12, isLoading: 'idle', error: null};

export const fetchCategories = createAsyncThunk(
  'catalog/fetchCategories',
  fetchData,
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setActiveNavigator(state, action) {
      // console.log('payload', action.payload);
      state.activeNavigator = action.payload;
    },
  },
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

export const { setActiveNavigator } = catalogSlice.actions;
export default catalogSlice.reducer;