import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoTitle({ title, overview }) {
  const playIcon = <FontAwesomeIcon icon={faPlay} />;
  return (
    <div className="px-6 md:px-14 absolute text-white pt-[20%] bg-gradient-to-r from-black aspect-video h-full">
      <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-4 text-md w-2/4 xl:w-1/4">{overview}</p>
      <div className="flex items-center gap-3 my-3">
        <button className="rounded-md bg-white text-black px-2 md:px-5 py-2 md:py-3 w-32 text-md hover:bg-opacity-90">
          {playIcon} Play
        </button>
        <button className="hidden md:block rounded-md bg-gray-500 bg-opacity-50 text-white px-5 py-3 w-32 text-md">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
