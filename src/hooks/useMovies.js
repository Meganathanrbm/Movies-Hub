import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesUrls, options } from "../constants";
import axios from "axios";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrailer,
  addUpcomingMovies,
} from "../utils/store/moviesSlice";

// custorm hook for get movies details for these
// NowPlayingMovies
// PopularMovies
// TopRatedMovies
// Trailer
// UpcomingMovies

const useMovies = (movieType, page = 1) => {
  const movies = useSelector((state) => state.movies[movieType]);
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      const response = await axios.request(
        moviesUrls[movieType] + page,
        options
      );

      //to check initial store value are null then update
      if (!movies) {
        switch (movieType) {
          case "nowPlayingMovies":
            dispatch(addNowPlayingMovies({results:response.data.results, page:page}));
            break;
          case "popularMovies":
            dispatch(addPopularMovies({results:response.data.results, page:page}));
            break;
          case "upcomingMovies":
            dispatch(addUpcomingMovies({results:response.data.results, page:page}));
            break;
          case "topRatedMovies":
            dispatch(addTopRatedMovies({results:response.data.results, page:page}));
            break;
          case "trailer":
            dispatch(addTrailer({results:response.data.results, page:page}));
            break;
          default:
            break;
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []); // Only run once on mount
};

export default useMovies;
