import axios from "axios";

const getTrailer = async (movieId) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=" +
        process.env.REACT_APP_MOVIES_API_KEY +
        "&append_to_response=videos"
    );
    const videoId = response.data.videos.results[0].key;
    const trailerLink =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    return trailerLink;
  } catch (err) {
    console.log(err);
  }
};

export default getTrailer;
