import React from "react";
import { useHistory } from "react-router-dom";
import "./Row.css";

const Row = ({ tittle, fetchUrl, isLargeRow }) => {
  const history = useHistory();
  return (
    <div className="row">
      <h2>{tittle}</h2>

      <div className="row__pottered">
        {fetchUrl.map((movie) => (
          <>
            <img
              key={movie.movie._id}
              onClick={() => history.push(`/detail/${movie.id}`)}
              className={`row__potter ${isLargeRow && "row__potterLardeg"}`}
              src={movie.movie.poster}
              alt={movie.movie.name}
            />
          </>
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};

export default Row;
