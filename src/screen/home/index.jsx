import React from "react";
import Cards from "../../components/cards";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import TitleName from "../../components/title";
import { Routes, Route, Link } from "react-router-dom";
import Movie from "../movie";
import { Container } from "../../theme/global";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TitleName color={"black"} size={"2.5rem"} title={"popular movies"} />
      <Container>
        <Cards />
      </Container>
    </div>
  );
};

export default Home;
