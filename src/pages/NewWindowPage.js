import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewWindow from "../components/NewWindow";

export default class NewWindowPage extends React.Component {
  render() {
    return (
      <Container className="container-vertical-margin">
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <NewWindow />
          </Col>
        </Row>
      </Container>
    );
  }
}
