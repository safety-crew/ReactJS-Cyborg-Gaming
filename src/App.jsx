import React from "react";
import "./App.css";
import { Header, Container, Footer, Hero } from "./Components/index";

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
