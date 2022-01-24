import React from "react";
import { Card } from "react-bootstrap";
function PersonCard(props) {
  return (
    <Card style={{ width: "100%", boxShadow: "0px 2px 5px grey" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default PersonCard;
