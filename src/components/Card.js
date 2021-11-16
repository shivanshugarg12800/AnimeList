import { React } from "react";
import { useSelector } from "react-redux";

const Card = ({ filteredAnimes, visible }) => {
  // getting all the animes
  const animes = useSelector((state) => state.allAnimes.animes);
  // rendering the components
  const renderlist = (filteredAnimes.length === 0 ? animes : filteredAnimes)
    .slice(0, visible)
    .map((anime) => {
      const { image_url, title, mal_id } = anime;
      return (
        <div className="cardContainer" key={mal_id}>
          <div className="imgContainer">
            <img src={image_url} alt={title} />
          </div>
          <div className="text">
            <h1>{title}</h1>
          </div>
        </div>
      );
    });
  return <>{renderlist}</>;
};

export default Card;
