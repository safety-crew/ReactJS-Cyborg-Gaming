import React from "react";
import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer, Hero, MostPopular } from "./Sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      <Footer />
    </>
  );
};

export default App;
