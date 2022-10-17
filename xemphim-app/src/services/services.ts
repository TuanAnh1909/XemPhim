import axios from "axios";
const API_KEY = '90ae6cc743216f8def8281d3a6ac40d0'
const API_URL = 'https://api.themoviedb.org/3/'
export const fetchMovies = async () => {
  const data = await axios.get(`${API_URL}discover/movie?api_key=${API_KEY}`);  
  return data;
}