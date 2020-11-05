import React from "react";
import GamePage from "../components/GamePage";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1>PLAY CHESS</h1>
      <GamePage />
    </Container>
  );
};

export default Home;