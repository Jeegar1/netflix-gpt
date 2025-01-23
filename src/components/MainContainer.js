import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[2];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0 relative">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
}

export default MainContainer;
