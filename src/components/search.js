import React, { useState } from "react";
import { useSelector } from "react-redux";

const Search = ({ setFilteredAnimes }) => {
  // getting all the animes
  const animes = useSelector((state) => state.allAnimes.animes);
  // states
  const [searchItem, setSearchItem] = useState("");
  // function to filterAnime
  const filterAnime = () => {
    const newAnimes = animes.filter((anime) => {
      if (anime.title.toLowerCase().includes(searchItem.toLowerCase()))
        return anime;
      else if (searchItem === "") return anime;
    });
    setFilteredAnimes(newAnimes);
  };

  return (
    <div className="searchComp">
      <h1>
        The <span>Anime </span>List
      </h1>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setSearchItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") filterAnime();
        }}
      ></input>
      <button className="btn2" onClick={filterAnime}>
        Submit
      </button>
    </div>
  );
};
export default Search;
