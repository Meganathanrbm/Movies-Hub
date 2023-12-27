import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { userActions } from "../utils/store/userSlice";

const useSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = (username, email, password) => {
    const photo = Math.floor(Math.random() * 5) + 1;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
          photoURL: `./images/users/${photo}.png`,
        })
          .then(() => {
            navigate("/auth/login");
          })
          .catch((error) => {
            dispatch(userActions.addError(error.message));
          });
      })
      .catch(() => {
        dispatch(userActions.addUsername(""));
        dispatch(userActions.addEmail(""));
        dispatch(userActions.addPassword(""));
      });
  };
  return signup;
};

export default useSignUp;
