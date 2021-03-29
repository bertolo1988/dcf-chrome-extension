import React from "react";
import { Cash, Twitter } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import * as manifestInfo from "../manifest.json";

export default class AboutPage extends React.Component {
  renderVersionCard() {
    return (
      <Card className="small-vertical-margin">
        <Card.Body>
          <Card.Title>{manifestInfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {manifestInfo.version}
          </Card.Subtitle>
          <Card.Text className="text-justify">
            Calculate the fair valuation of an investment using discounted cash
            flow method.
          </Card.Text>
          <Container>
            <Row>
              <Col>
                <Card.Link
                  className="text-center"
                  target="_blank"
                  href="https://www.buymeacoffee.com/bertolo1"
                >
                  <Cash />
                </Card.Link>
              </Col>
              <Col>
                <Card.Link
                  className="text-center"
                  target="_blank"
                  href="https://twitter.com/TiagoBertolo"
                >
                  <Twitter />
                </Card.Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>{this.renderVersionCard()}</Col>
        </Row>
      </Container>
    );
  }
}
