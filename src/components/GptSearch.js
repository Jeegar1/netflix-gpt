import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_IMG_URL} alt="bg-image" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearch;
