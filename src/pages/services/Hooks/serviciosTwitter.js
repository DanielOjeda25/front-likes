// twitterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  twitterServices: [],
  status: 'idle',
  error: null,
};

export const fetchTwitterServices = createAsyncThunk(
  'serviciosTwitter/fetchTwitterServices',
  async () => {
    try {
      const response = await axios.get(
        'https://vps-3849674-x.dattaweb.com/service/find-all-services-category?category=Twitter'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const serviciosTwitterSlice = createSlice({
  name: 'serviciosTwitter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTwitterServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTwitterServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.twitterServices = action.payload;
      })
      .addCase(fetchTwitterServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serviciosTwitterSlice.reducer;

export const selectTwitterServices = (state) => state.serviciosTwitter.twitterServices;
