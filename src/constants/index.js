import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";


//Nav links
export const navLinks = [
  { label: "Home", icon: <HomeIcon className="mr-4" />, url: "/#Home" },
  {
    label: "Popular",
    icon: <TrendingUpIcon className="mr-4" />,
    url: "/#Popular",
  },
  {
    label: "Upcoming",
    icon: <UpcomingIcon className="mr-4" />,
    url: "/#Upcoming",
  },
  {
    label: "Favorite",
    icon: <FavoriteIcon className="mr-4" />,
    url: "/favoriteMovies",
  },
];





// for option for api request for movies
export const options = {
  method: "GET",
  // url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI3N2ZhMWYxZjJiMTkwMDY2ZWQyMjFiNTlkZTRjZSIsInN1YiI6IjY1NTA5NDNiNjdiNjEzNDVkYmJlYTRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8U5lJ6SkTbjRsYNhenZ9YcdgQ0uebIByC2b3ZxazXxs",
  },
};
export const empty_arr = Array(10).fill("1");

export const moviesUrls = {
  popularMovies:
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=",
  topRatedMovies:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=",
  upcomingMovies:
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=",
  nowPlayingMovies: 
    "https://api.themoviedb.org/3/movie/now_playing?page=",
};


//Image url 
export const imageUrl = "https://image.tmdb.org/t/p/original/";

export const subUrls = {
  base:"https://api.themoviedb.org/3/movie/",
  details:"?language=en-US",
  cast:"/credits?language=en-US",
  recommanded:"/recommendations?language=en-US&page=1",
  similar:"/similar?language=en-US&page=1"
}

//firebase realtime database url
export const firebaseDbUrl = "https://movies-hub-3454f-default-rtdb.firebaseio.com/favorite/";



//Footer links
export const social_link = [
  { title: "Instagram", icon: <InstagramIcon /> },
  { title: "LinkedIn", icon: <LinkedInIcon /> },
  { title: "Facebook", icon: <FacebookIcon /> },
  { title: "Twitter", icon: <TwitterIcon /> },
];





