import React from "react";
import { getVote } from "../services/apiCalls";

const Card = ({
  title,
  vote_average,
  poster_path,
  id,
  overview,
  vote_count,
  release_date,
}) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div navigate={`/${id}`}>
      <h3>{title}</h3>
      <img src={IMG_API + poster_path} />
      <span>{overview}</span>
      <span style={{ backgroundColor: `${getVote(vote_average)}` }}>
        {vote_average}
        {vote_count}
        {release_date}
      </span>
    </div>
  );
};

export default Card;
