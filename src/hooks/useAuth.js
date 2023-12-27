import { useDispatch } from 'react-redux';
import { userActions } from '../utils/store/userSlice';

// this for get the username and email from the localstorage session 
const useAuth = () => {
    const dispatch = useDispatch();
    const localSession = ()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch(userActions.isAuth(true))
            dispatch(userActions.addEmail(user.email))
            dispatch(userActions.addUserId(user.uid))
            dispatch(userActions.addUsername(user.displayName))
        }
    }
    return localSession;
}

export default useAuth