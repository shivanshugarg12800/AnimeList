import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { setAnimes } from "../redux/actions/actions";
const AllCards = ({ filteredAnimes, visible }) => {
  const animes = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios
      .get("https://api.jikan.moe/v3/search/anime?q=naruto&limit=20")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAnimes(response.data.results));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("ALL THE ANIMES", animes);
  return (
    <div className="mainContainer">
      <Card filteredAnimes={filteredAnimes} visible={visible} />
    </div>
  );
};

export default AllCards;
