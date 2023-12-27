import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { userActions } from '../utils/store/userSlice';
import { toast } from 'react-toastify';

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((user)=>{
      dispatch(userActions.isAuth(true));
      dispatch(userActions.addUsername(user.user.displayName));
      dispatch(userActions.addEmail(user.user.email));
      dispatch(userActions.addUserId(user.user.uid));
      localStorage.setItem("user",JSON.stringify(user.user))
        navigate("/");
    })
    .catch((err)=>{
        dispatch(userActions.addEmail(""));
        dispatch(userActions.addPassword(""));
        dispatch(userActions.addUserId(""));
        dispatch(userActions.addError(err.message));
        toast.error('Failed to SignIn', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        console.log(err.message);
    })
  };
  return signIn;
}

export default useSignIn;