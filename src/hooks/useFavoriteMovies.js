import React, { useEffect } from "react";
import { firebaseDbUrl } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userActions } from "../utils/store/userSlice";

const useFavoriteMovies = (userId) => {
  const dispatch = useDispatch();
  const getFavMovies = async () => {
    try {
      if (userId) {
        const url = firebaseDbUrl + userId + "/.json";
        const response = await axios.get(url);
        const data = response.data;
        // dispatch(userActions.addToFavorite(Object.values(data)[0]));
        dispatch(userActions.addToFavorite(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFavMovies();
  }, [userId]);
};

export default useFavoriteMovies;
