// Antes del código del componente InstagramComprar
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  facebookServices: [],
  status: "idle",
  error: null,
};

export const fetchFacebookServices = createAsyncThunk(
  "serviciosFacebook/fetchFacebookServices",
  async () => {
    try {
      const response = await axios.get(
        "https://vps-3849674-x.dattaweb.com/service/find-all-services-category?category=Facebook"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const serviciosFacebookSlice = createSlice({
  name: "serviciosFacebook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacebookServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFacebookServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.facebookServices = action.payload;
      })
      .addCase(fetchFacebookServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default serviciosFacebookSlice.reducer;

export const selectFacebookServices = (state) =>
  state.serviciosFacebook.facebookServices;

// Ahora sigue el código del componente InstagramComprar, reemplazando "Instagram" por "Facebook"
