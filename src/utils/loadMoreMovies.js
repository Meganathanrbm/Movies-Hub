import axios from 'axios';
import { moviesUrls, options } from '../constants';
//this functions fetch page 2 3 5 ... movies 
async function loadMoreMovies(movieType, page) {
  try{
    const response = await axios.request(moviesUrls[movieType] + page, options);
    const data =  await  response.data.results;
    return data;
  }catch(err){
    console.log(err)
  }
}

export default loadMoreMovies