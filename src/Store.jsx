import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import movieSlice from "./features/movieSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    movies: movieSlice,
  },
});
