import axios from "axios";
import { options, subUrls } from "../../constants";

const movieDetails = async ({ movieid, name }) => {
  try {
    const url = subUrls.base + movieid + subUrls[name];
    const response = await axios.request(url, options);
    const data = response.data;
    
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default movieDetails;
