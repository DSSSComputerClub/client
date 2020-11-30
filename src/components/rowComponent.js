import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowComponent = (props) => {
  return (
    <Row className="pt-5 mb-5">
      <Col sm={true}>
        <h3>{props.heading}</h3>
        <p>{props.pText}</p>
        <Button
          variant={props.variant}
          className="mb-5"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.btnText}
        </Button>
      </Col>
      <Col sm={true} className="text-center">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt="Preview" />
        </a>
      </Col>
    </Row>
  );
};
export default RowComponent;
