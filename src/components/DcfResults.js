import React, { Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function ReadOnlyLabelValue(props) {
  return (
    <Fragment>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        className={`bold ${props.color}`}
        size="sm"
        type="text"
        value={props.value}
        readOnly
      />
    </Fragment>
  );
}

export default function DcfResults(props) {
  return (
    <Container>
      <Row className="small-vertical-margin">
        <ReadOnlyLabelValue
          label="Fair enterprise value ($B)"
          value={props.totalPresentValue}
        />
      </Row>
      <Row className="small-vertical-margin">
        <ReadOnlyLabelValue
          label="Fair market cap ($B)"
          value={props.fairMarketCap}
        />
      </Row>
      <Row className="small-vertical-margin">
        <ReadOnlyLabelValue
          label="Fair stock price ($)"
          value={props.fairStockPrice}
        />
      </Row>
      <Row className="small-vertical-margin">
        <ReadOnlyLabelValue
          color={props.upside > 0 ? "green" : "red"}
          label="Upside"
          value={`${props.upside}%`}
        />
      </Row>
    </Container>
  );
}
