import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";
import { Home, Profile } from "./Pages/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Profile />
      </Container>
      <Footer />
    </>
  );
};

export default App;
