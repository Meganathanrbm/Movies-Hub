import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
const options = {
    method: 'GET',
    url: url,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI3N2ZhMWYxZjJiMTkwMDY2ZWQyMjFiNTlkZTRjZSIsInN1YiI6IjY1NTA5NDNiNjdiNjEzNDVkYmJlYTRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8U5lJ6SkTbjRsYNhenZ9YcdgQ0uebIByC2b3ZxazXxs'
    }
  }; 
    useEffect(()=>{
        const fetchData = async()=>{
        try{
            const response = await axios.request(options);
            setData(response.data)
          }catch(err){
            setError(err)
          }
          finally{
            setLoading(false);
          }
    }
    fetchData();
},[url])
    return {data, error, loading}
}

export default useFetch;
