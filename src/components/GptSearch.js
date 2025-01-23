import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen xl:h-auto object-cover" src={BG_IMG_URL} alt="bg-image" />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearch;
