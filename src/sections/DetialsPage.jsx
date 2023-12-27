import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieDetails from "../utils/movieDetailsPage/movieDetails";
import AboutMovies from "./detailsPage/AboutMovies";
import CastSections from "./detailsPage/CastSections";
import SimilarRecommandations from "./detailsPage/SimilarRecommandations";
import AboutMoviesSkeleton from "../components/skeleton/AboutMoviesSkeleton";
import CastSke from "../components/skeleton/CastSke";

const DetialsPage = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setcast] = useState(null);
  const [similarmovies, setsimilarMovies] = useState(null);
  const [recommanded, setRecommanded] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    movieDetails({ movieid, name: "details" }).then((data) => setMovie(data));
    movieDetails({ movieid, name: "cast" }).then((data) => setcast(data?.cast));
    movieDetails({ movieid, name: "similar" }).then((data) =>
      setsimilarMovies(data?.results?.filter((data) => data.poster_path) ?? null)
    );
    movieDetails({ movieid, name: "recommanded" }).then((data) =>
      setRecommanded(data?.results?.filter((data) => data.poster_path) ?? null)
    );
  }, [movieid]);

  return (
    <main className="padding bg-[#040D12]">
      {/* movie gendral Details */}
      {movie ? <AboutMovies movie={movie} /> : <AboutMoviesSkeleton />}
      {/* movie Cast details */}
      {cast ? <CastSections cast={cast} /> : <CastSke />}
      {/* similar & recommanded movies section */}
      {similarmovies &&
        recommanded &&
        [
          { title: "Similar Movies", name: similarmovies },
          { title: "Recommandations", name: recommanded },
        ].map((movieTit, i) => (
          <SimilarRecommandations key={i} movieTit={movieTit} />
        ))}
    </main>
  );
};

export default DetialsPage;
