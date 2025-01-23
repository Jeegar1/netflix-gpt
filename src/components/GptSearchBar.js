import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // make an api call to GPT API and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like example result given ahead. Example: Gadar, Sholay. ";

    const gptResults = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: gptQuery }],
      stream: true,
    });

    // Movie1, Movie2, Movie3, Movie4
    const gptMovies = gptResults.choices?.[0].message.content.split(",");

    // [Movie1, Movie2, Movie3, Movie4]
    // For each movie will search in TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[30%] md:pt-[20%] lg:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-2/3 lg:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 mr-0 rounded-md col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 bg-red-700 text-white rounded-md col-span-3 hover:bg-opacity-90"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
