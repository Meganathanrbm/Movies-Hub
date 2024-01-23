import React from "react";
import { imageUrl } from "../constants";
import CircularRating from "./CircularRating";
import useScrennWidth from "../hooks/useScrennWidth";
import CButton from "./CButton";
import { useNavigate } from "react-router-dom";
import AddToFavoriteBtn from "./AddToFavoriteBtn";

const MovieCard = (props) => {
  const screenWidth = useScrennWidth();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/details/" + id);
    window.scrollTo(0,0);
    // window.location.reload();
  };

  return (
    <div className="mb-4    cursor-pointer group   relative">
      <img
        className={`cursor-default rounded-md ${props.imgStyle}`}
        src={imageUrl + props.movie.poster_path}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full p-2 h-full invisible  bg-gradient-to-t group-hover:visible  from-slate-950 to-rgba(20, 20, 20, 0.8)">
        <CircularRating
          className="absolute top-0 left-0"
          rating={props.movie.vote_average.toFixed(1)}
        />
        <div className="absolute top-0 right-0 p-2">
          <AddToFavoriteBtn
            ftype="card"
            className="absolute top-0 right-0"
            movie={props.movie}
          />
        </div>
      </div>
      <div className="card-body p-4 absolute bottom-0 left-0 hidden group-hover:flex flex-col">
        <div className="flex justify-between items-center flex-nowrap">
          <h3 className="text-white font-medium my-2 capitalize text-lg  lg:text-2xl">
            {props.movie.title.length > 15
              ? props.movie.title.slice(0, 10) + "..."
              : props.movie.title}
          </h3>
        </div>
        <p className="text-sm text-white font-normal mb-4">
          {(screenWidth > 1024
            ? props.movie.overview.slice(0, 50)
            : props.movie.overview.slice(0, 30)) + "..."}
        </p>
        <CButton
          title="View"
          onClick={() => handleClick(props.movie.id)}
          variant="contained"
          size="small"
        />
      </div>
    </div>
  );
};

export default MovieCard;
