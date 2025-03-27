import React from "react";
import "./App.css";
import { Container } from "./Components/index";
import {
  Header,
  Footer,
  Hero,
  MostPopular,
  GamingLibrary,
} from "./Sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary />
      </Container>
      <Footer />
    </>
  );
};

export default App;
