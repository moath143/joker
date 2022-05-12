import React from "react";
import Joker from "../../assets/joker.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <Link to="/movie">
        <img src={Joker} alt="joker" />
      </Link>
    </>
  );
};

export default Card;
