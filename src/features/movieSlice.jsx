import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/apiCalls";
const initialState = {
  moviesList: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("movies/fetchMovies", async () => {
  return await getMovies();
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMoviesList: (state) => {
      state.moviesList = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.moviesList = payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
