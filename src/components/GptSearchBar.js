import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 mr-0 rounded-md col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="px-4 py-2 m-4 bg-red-700 text-white rounded-md col-span-3 hover:bg-opacity-90">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
