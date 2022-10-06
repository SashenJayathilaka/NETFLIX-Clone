import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Row from "./Row";
import axios from "./axios";

const Feed = () => {
  const [movies, setMovies] = useState([]);

  let Mysteries = [];
  let Documentaries = [];
  let US = [];
  let Horror = [];
  let Period = [];
  let Comedies = [];
  let Thrillers = [];
  let Fantasy = [];

  const getMovies = () => {
    try {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");
        setMovies(response.data);

        return response;
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  movies.map((movie) => {
    switch (movie.genre) {
      case "TV Mysteries":
        Mysteries = [...Mysteries, { id: movie._id, movie }];
        break;
      case "Period Pieces":
        Mysteries = [...Mysteries, { id: movie._id, movie }];
        break;
      case "ovies Based on Books":
        Mysteries = [...Mysteries, { id: movie._id, movie }];
        break;
      case "True Crime Documentaries":
        Documentaries = [...Documentaries, { id: movie._id, movie }];
        break;
      case "Documentaries":
        Documentaries = [...Documentaries, { id: movie._id, movie }];
        break;
      case "US Movies":
        US = [...US, { id: movie._id, movie }];
        break;
      case "Horror TV Serials":
        Horror = [...Horror, { id: movie._id, movie }];
        break;
      case "Movies Based on Books":
        Horror = [...Horror, { id: movie._id, movie }];
        break;
      case "Romantic TV Comedies":
        Comedies = [...Comedies, { id: movie._id, movie }];
        break;
      case "TV Comedies":
        Comedies = [...Comedies, { id: movie._id, movie }];
        break;
      case "Stand-Up Comedy":
        Comedies = [...Comedies, { id: movie._id, movie }];
        break;
      case "TV Thrillers":
        Thrillers = [...Thrillers, { id: movie._id, movie }];
        break;
      case "TV Dramas":
        Period = [...Period, { id: movie._id, movie }];
        break;
      case "Family Features":
        Period = [...Period, { id: movie._id, movie }];
        break;

      default:
        Fantasy = [...Fantasy, { id: movie._id, movie }];
        break;
    }
  });
  return (
    <div>
      <Banner Fantasy={Fantasy} />
      <Row tittle="NETFLIX ORIGINALS" fetchUrl={Mysteries} isLargeRow={true} />
      <Row tittle="Action Movies" fetchUrl={Thrillers} />
      <Row tittle="Popular on Netflix" fetchUrl={Documentaries} />
      <Row tittle="Top Rated" fetchUrl={US} />
      <Row tittle="Horror Movies" fetchUrl={Horror} />
      <Row tittle="The Stories Behind the Headlines" fetchUrl={Comedies} />
      <Row tittle="Watch In One Weekend" fetchUrl={Period} />
      <Row tittle="Released in the Past Year" fetchUrl={Fantasy} />
    </div>
  );
};

export default Feed;
