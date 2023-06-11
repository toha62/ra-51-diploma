import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../utils';

const initialState = {
  categoriesList: [],
  itemsList: [],
  offset: 0,
  activeNavigator: "All",
  isButtonAvailable: true,
  isLoading: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'catalog/fetchCategories',
  fetchData,
);

export const fetchItems = createAsyncThunk(
  'catalog/fetchItems',
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
      })
      .addCase(fetchItems.pending, (state) => {        
        state.isLoading = 'loading';
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {        
        state.itemsList.push(...action.payload); 
        state.offset += 6; 
        if (action.payload.length < 6) {
          state.isButtonAvailable = false;
        } 
        state.isLoading = 'idle';    
      })
      .addCase(fetchItems.rejected, (state, action) => {        
        state.isLoading = 'failed';
        state.error = action.error;
      });
  },
});

export const { setActiveNavigator } = catalogSlice.actions;
export default catalogSlice.reducer;