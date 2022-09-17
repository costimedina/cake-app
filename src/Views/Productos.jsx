import React from 'react';
import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";


function Productos() {
  return (
    <Container className="pt-5">
      <h1 className="text-center">Tenemos planes especiales para ti y su mascota</h1>
      
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>🙂 Caja solitario </Accordion.Header>
          <Accordion.Body>
            4 Crazy Muffins por $6.000
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>💕 Caja para dos </Accordion.Header>
          <Accordion.Body>
            8 Crazy Muffins por $12.000 para las tarde de series
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>🥳 Party Box</Accordion.Header>
          <Accordion.Body>
            25 Crazy Muffins para eventos especiales
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Productos;