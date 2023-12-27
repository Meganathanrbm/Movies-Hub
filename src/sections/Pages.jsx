import ProtectedRoute from "../components/ProtectedRoute";
import DetialsPage from "./DetialsPage";
import FavoriteMovies from "./FavoriteMovies";
import Home from "./Home";
import MoviesSection from "./MoviesSection";
import SearchResults from "./SearchResults";
import ViewAll from "./ViewAll";

export const HomePage = () => {
  return (
    <ProtectedRoute>
      <Home />
      <MoviesSection name="Popular" title="popularMovies" />
      <MoviesSection name="Top Rated" title="topRatedMovies" />
      <MoviesSection name="Upcoming" title="upcomingMovies" />
    </ProtectedRoute>
  );
};
export const ViewAllPage = () => {
  return (
    <ProtectedRoute>
      <ViewAll />
    </ProtectedRoute>
  );
};
export const MovieDetailsPage = () => {
  return (
    <ProtectedRoute>
      <DetialsPage />
    </ProtectedRoute>
  );
};
export const SearchResultsPage = () => {
  return (
    <ProtectedRoute>
      <SearchResults />
    </ProtectedRoute>
  );
};

export const FavoriteMoviesPage = () => {
  return (
    <ProtectedRoute>
      <FavoriteMovies />
    </ProtectedRoute>
  );
};
