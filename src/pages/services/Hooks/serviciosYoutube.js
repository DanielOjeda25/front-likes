// youtubeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  youtubeServices: [],
  status: 'idle',
  error: null,
};

export const fetchYouTubeServices = createAsyncThunk(
  'serviciosYouTube/fetchYouTubeServices',
  async () => {
    try {
      const response = await axios.get(
        'https://vps-3849674-x.dattaweb.com/service/find-all-services-category?category=YouTube'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const serviciosYouTubeSlice = createSlice({
  name: 'serviciosYouTube',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYouTubeServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchYouTubeServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.youtubeServices = action.payload;
      })
      .addCase(fetchYouTubeServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serviciosYouTubeSlice.reducer;

export const selectYouTubeServices = (state) => state.serviciosYouTube.youtubeServices;
