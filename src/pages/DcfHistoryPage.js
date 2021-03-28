import React from "react";
import { Container, Row } from "react-bootstrap";

import DcfHistoryContext from "../context/DcfHistoryContext";

export default class DcfHistoryPage extends React.Component {
  static contextType = DcfHistoryContext;

  render() {
    return (
      <Container>
        <Row>AAA</Row>
      </Container>
    );
  }
}
