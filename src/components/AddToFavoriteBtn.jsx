import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../utils/store/userSlice";
import { firebaseDbUrl } from "../constants";
import axios from "axios";
import { Tooltip } from "@mui/material";
import { toast } from "react-toastify";

const AddToFavoriteBtn = ({ movie, ftype }) => {
  const userId = useSelector((state) => state.user.userId);
  const favoriteMovies = useSelector((state) => state.user.favorite);
  const [btnActive, setBtnActive] = useState(
    favoriteMovies && favoriteMovies.some((mov) => mov.id == movie.id)
  );
  const dispatch = useDispatch();

  const handleFavorite = () => {
    let favMovies = favoriteMovies ? favoriteMovies : [];
    //if btn active means the movies is already in favorite .then it remove form favorite;
    if (btnActive) {
      favMovies = favMovies.filter((mov) => mov.id != movie.id);
    } else {
      favMovies = [...favMovies, movie];
    }
    dispatch(userActions.addToFavorite(favMovies));
    putFavoriteMovies(favMovies);
  };
  const putFavoriteMovies = (favoriteMovie) => {
    try {
      const url = firebaseDbUrl + userId + ".json";
      const response = axios.put(url, JSON.stringify(favoriteMovie));
      toast.success((!btnActive ?"Added to Favorite!": " Removed from Favorite"), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const btnStatus =
      favoriteMovies && favoriteMovies.some((mov) => mov.id === movie.id);
    setBtnActive(btnStatus);
  }, [btnActive, favoriteMovies]);
  return (
    <div className="ml-6">
      <Tooltip title={btnActive ? "Remove from Favorite" : "Add to Favorite"}>
        <div
          onClick={handleFavorite}
          className={`${
            ftype === "card"
              ? " p-1 text-white "
              : " bg-gray-800 p-2 ring-1 ring-gray-700"
          }  center rounded-full md:me-0 cursor-pointer `}
        >
          {btnActive ? (
            <FavoriteIcon
              style={{ fontSize: 30 }}
              className="text-red-500 w-full h-full"
            />
          ) : (
            <FavoriteIcon style={{ fontSize: 30 }} className={`text-white`} />
          )}
        </div>
      </Tooltip>
    </div>
  );
};

export default AddToFavoriteBtn;
