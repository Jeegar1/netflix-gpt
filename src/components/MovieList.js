import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 py-3">
      <h1 className="text-lg md:text-2xl font-bold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll gap-3">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;