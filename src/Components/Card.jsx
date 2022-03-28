import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const CardComponent = ({event}) => {
  return (
    <React.Fragment>
      <Col>
        <Card key={event._id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 100}`} />
          <Card.Body>
            <Card.Title>Title: {event.title}</Card.Title>
            <Card.Text>
              Description: {event.description}
            </Card.Text>
            <Card.Text>
              Address: {event.address}
            </Card.Text>
            <Card.Text>
              Category: {event.category}
            </Card.Text>
            <Button variant="primary">Attend</Button>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardComponent;
