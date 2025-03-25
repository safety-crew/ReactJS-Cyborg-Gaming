import React from "react";
import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer, Hero } from "./Sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </>
  );
};

export default App;
