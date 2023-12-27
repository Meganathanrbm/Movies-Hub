import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import togglesignSlice from './togglesigninSlice';
import moviesSlice from './moviesSlice';

const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        toggleSign:togglesignSlice.reducer,
        movies:moviesSlice.reducer,
    }
});

export default store;