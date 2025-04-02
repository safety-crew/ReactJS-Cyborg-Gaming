import React from "react";
import "./Home.css";
import { Hero, MostPopular, GamingLibrary } from "../../Sections/index";

const Home = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </>
  );
};

export default Home;
