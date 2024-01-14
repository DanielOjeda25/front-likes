import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  instagramServices: [],
  status: 'idle',
  error: null,
};

export const fetchInstagramServices = createAsyncThunk(
  'serviciosInstagram/fetchInstagramServices',
  async () => {
    try {
      const response = await axios.get(
        'https://vps-3849674-x.dattaweb.com/service/find-all-services-category?category=Instagram'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const serviciosInstagramSlice = createSlice({
  name: 'serviciosInstagram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstagramServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInstagramServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.instagramServices = action.payload;
      })
      .addCase(fetchInstagramServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serviciosInstagramSlice.reducer;

export const selectInstagramServices = (state) => state.serviciosInstagram.instagramServices;

