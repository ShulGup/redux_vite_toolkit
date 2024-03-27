import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { clearMoviesList, getNews } from "../features/movieSlice";

const Movies = () => {
  const { moviesList, loading, error } = useSelector((state) => state.movies);
  console.log("hello", moviesList, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    return () => {
      dispatch(clearMoviesList());
    };
  }, [dispatch]);

  return (
    <>
      <h1>News</h1>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading....</h1>}
      {!loading && (
        <div>
          {moviesList.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
