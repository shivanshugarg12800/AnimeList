import { React } from "react";
import Card from "./Card";
// import axios from "axios";
// import { setAnimes } from "../redux/actions/actions";
const AllCards = ({ visible }) => {
  return (
    <div className="mainContainer">
      <Card visible={visible} />
    </div>
  );
};

export default AllCards;
