import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      if (action.payload.results) {
        state.nowPlayingMovies =
          action.payload.page > 1
            ? [...state.nowPlayingMovies, ...action.payload.results]
            : action.payload.results;
      }
    },
    addTrailer: (state, action) => {
      if (action.payload.results) {
        state.trailer =
          action.payload.page > 1 && state.trailer
            ? [...state.trailer, ...action.payload.results]
            : action.payload.results;
      }
    },
    addPopularMovies: (state, action) => {
      if (action.payload.results) {
        state.popularMovies =
          action.payload.page > 1 && state.popularMovies
            ? [...state.popularMovies, ...action.payload.results]
            : action.payload.results;
      }
    },
    addUpcomingMovies: (state, action) => {
      if (action.payload.results) {
        state.upcomingMovies =
          action.payload.page > 1 && state.upcomingMovies
            ? [...state.upcomingMovies, ...action.payload.results]
            : action.payload.results;
      }
    },
    addTopRatedMovies: (state, action) => {
      if (action.payload.results) {
        state.topRatedMovies =
          action.payload.page > 1 && state.topRatedMovies
            ? [...state.topRatedMovies, ...action.payload.results]
            : action.payload.results;
      }
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice;
