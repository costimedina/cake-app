import React from 'react';
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Crazy Muffin</span> 
      </h1>
      <h6> Los Muffins más ricos de Santiago </h6>

      <h1>🧁</h1>
    </Container>
  );
}

export default Home;
