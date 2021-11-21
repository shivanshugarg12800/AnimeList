import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnimes } from "../redux/actions/actions";
const Search = () => {
  // states
  const [searchItem, setSearchItem] = useState("");
  const [url, setUrl] = useState("");
  // getting all the animes

  const animes = useSelector((state) => state);
  // calling the dispatch instant
  const dispatch = useDispatch();

  // FUNCTIONS.................
  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAnime(searchItem);
    setUrl(`https://api.jikan.moe/v3/search/anime?q=${searchItem}`);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}}`
    ).then((res) => res.json());

    dispatch(setAnimes(temp.results));
  };
  console.log("ALL THE ANIMES", animes);
  return (
    <div className="searchComp">
      <h1>
        The <span>Anime </span>List
      </h1>
      <form className="search-box" onSubmit={HandleSearch}>
        <input
          type="search"
          placeholder="Search for an anime..."
          required
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
      <h4>API Call : {url}</h4>
    </div>
  );
};
export default Search;
