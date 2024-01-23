import React from "react";
import { PlayIcon } from "../assets/playBtn/PlayIcon";
import getTrailer from "../utils/getTrailer";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/store/moviesSlice";

const WatchTrailer = ({ toggleModal, movieId }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    getTrailer(movieId).then((data) => dispatch(addTrailer(data))); // dispatch the trailer link to the movies slice
    return toggleModal();
  };

  return (
    <div
      onClick={handleClick}
      className="playbtn center gap-4 group hover:cursor-pointer hover:text-red-500"
    >
      <PlayIcon name="playbtn" />
      <h3
        style={{ wordSpacing: "0.25em" }}
        className="text-2xl font-montserrat text-white transition duration-200 ease-in capitalize font-normal group-hover:text-red-500"
      >
        WATCH TRAILER
      </h3>
    </div>
  );
};

export default WatchTrailer;
