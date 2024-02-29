import React from "react";
import"../components/MovieCard.css"
import {Link} from "react-router-dom"

export function MovieCard({movie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  
  return (
    <div className="movieCard">
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className="moviImage"
        />
      </Link>
      <div className="movietitle">{movie.title}</div>
      
    </div>
  );
}