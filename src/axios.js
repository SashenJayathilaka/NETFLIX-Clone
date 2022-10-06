import axios from "axios";

//base url to make request to the movie database
const instance = axios.create({
  baseURL: "https://netflixmoviesashen.herokuapp.com",
});

export default instance;
