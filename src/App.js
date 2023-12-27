import React from "react";
import LoginSignup from "./sections/auth/LoginSignup";
import ForgetPassword from "./sections/auth/ForgetPassword";
import { Route, Routes } from "react-router-dom";
import useMovies from "./hooks/useMovies.js";
import Page404 from "./sections/Page404.jsx";
import {
  FavoriteMoviesPage,
  HomePage,
  MovieDetailsPage,
  SearchResultsPage,
  ViewAllPage,
} from "./sections/Pages.jsx";
import useFavoriteMovies from "./hooks/useFavoriteMovies.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const userId = useSelector((state) => state.user.userId);
  useMovies("upcomingMovies");
  useMovies("popularMovies");
  useMovies("nowPlayingMovies");
  useMovies("topRatedMovies");
  useFavoriteMovies(userId);

  return (
    <main className=" overflow-x-hidden w-screen h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}  hideProgressBar
        newestOnTop={false} closeOnClick
        rtl={false} pauseOnFocusLoss
        draggable pauseOnHover  theme="dark"
      />
      <Routes>
        {/* for authentication */}
        <Route path="auth">
          <Route path="login" element={<LoginSignup toggleSign={false} />} />
          <Route path="signup" element={<LoginSignup toggleSign={true} />} />
          <Route path="forgetPassword" element={<ForgetPassword />} />
        </Route>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        {/* View all page */}
        <Route path=":pagename/viewAll" element={<ViewAllPage />} />
        {/* Movies Details Page */}
        <Route path="details/:movieid" element={<MovieDetailsPage />} />
        {/* favorite movies    */}
        <Route path="favoriteMovies" element={<FavoriteMoviesPage />} />
        {/* search results  */}
        <Route
          path="searchResults/:movieName"
          element={<SearchResultsPage />}
        />
        {/* for error 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
