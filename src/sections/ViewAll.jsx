import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { viewAllBg } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { empty_arr } from "../constants";
import CButton from "../components/CButton";
import loadMoreMovies from "../utils/loadMoreMovies";
import CircularProgress from '@mui/material/CircularProgress';
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrailer,
  addUpcomingMovies,
} from "../utils/store/moviesSlice";
import MovieCard from "../components/MovieCard";
import MovieCardSke from "../components/skeleton/MovieCardSke";

const ViewAll = () => {
  // pagename is to get the page name form the address url path
  const { pagename } = useParams();
  // pageref is used for page no. reference we may use usestate ,
  const pageRef = useRef(1);
  const dispatch = useDispatch();
  const [loadMoreBtnProgress, setLoadMoreBtnProgress] = useState(false);
  const [movies, setMovies] = useState(
    useSelector((state) => state.movies[pagename])
  );
  // this moviesVar is used to update the state when user clik load more button
  const moviesVar = useSelector((state) => state.movies[pagename]);

  async function handleLoadMore() {
    //set loader true 
    setLoadMoreBtnProgress(true);
    // loadMoreMovies return the promise
    if(pageRef.current > 1){
    const data = await loadMoreMovies(pagename, pageRef.current);
      // update next page movie list redux store based on the pagename
      switch (pagename) {
        case "nowPlayingMovies":
           dispatch( addNowPlayingMovies({results:data, page:pageRef.current}));
          break;
        case "popularMovies":
          dispatch(addPopularMovies({results:data,page:pageRef.current}));
          break;
        case "upcomingMovies":
          dispatch(addUpcomingMovies({results:data, page:pageRef.current}));
          break;
        case "topRatedMovies":
          dispatch(addTopRatedMovies({results:data, page:pageRef.current}));
          break;
        case "trailer":
          dispatch(addTrailer({results:data, page:pageRef.current}));
          break;
        default:
          break;
      }
  }
      //update page no.
      pageRef.current++;
  }

  // if movie is not loaded , set load more btn loading
  useEffect(()=>{
    // handleloladmore called here because 1first time btn time dont update the state so, 
    handleLoadMore();
    (!movies && setLoadMoreBtnProgress(true) ) 
  },[])

  //when page no. change it update the state
  useEffect(() => {
    setMovies(moviesVar);
     // set loader fasle after getting the data
     setLoadMoreBtnProgress(false);
     
  }, [pageRef.current]);

  return (
    <main className="overflow-hidden ">
      <div className="center relative ">
        <img
          src={viewAllBg}
          className="w-screen min-h-[200px] brightness-[30%] object-cover object-center"
          alt=""
        />
        <div className="center flex-col absolute">
          <h2 className="lg:text-4xl md:text-3xl text-2xl my-2 lg:my-3 font-palanquin z-20 font-medium text-white capitalize">
            View all
          </h2>
          <p className="lg:text-lg text-lg font-palanquin z-20 font-bold text-red-500   capitalize">
            <Link className="" to="/">
              Home
            </Link>
            <span> > View All</span>
          </p>
        </div>
      </div>
      <section className="w-screen py-6 padding-x bg-black">
        <h2 className="font-semibold  text-2xl md:text-3xl mb-6 font-montserrat text-white">
          {/* give title based on the url page title */}
          {pagename[0] == "t"
            ? "Top Rated"
            : pagename[0] === "u"
            ? "Upcoming"
            : "Popular"}
        </h2>
        <div className="card-container   center sm:justify-between gap-4 md:gap-7 lg:gap-10 flex-wrap">
          {movies ?
            movies.map((movie, i) => (
              <MovieCard 
                movie = {movie} 
                key={i}
                i={i}
                imgStyle = { "w-[150px] h-auto  md:w-auto md:h-[300px] lg:w-auto lg:h-[350px] "}
              />
            )) : (
              empty_arr.map((item,i)=>(
                <MovieCardSke key={i} />
              ))
            )}

          <div className="center w-full my-6">
            {/* display loading while fetching data  */}
            {!loadMoreBtnProgress ? (
              <CButton
                onClick={handleLoadMore}
                className="text-center text-bold"
                size="large"
                title="load more"
                variant="contained"
              />
            ) : (
              <CircularProgress disableShrink />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViewAll;
