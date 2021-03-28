import React from "react";
import { Container, Row } from "react-bootstrap";

import DcfHistoryContext from "../context/DcfHistoryContext";
import DcfHistory from "../components/DcfHistory";

export default class DcfHistoryPage extends React.Component {
  static contextType = DcfHistoryContext;

  render() {
    return <DcfHistory history={this.context.dcfHistory} />;
  }
}
