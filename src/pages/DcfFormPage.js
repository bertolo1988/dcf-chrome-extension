import React from "react";
import _ from "lodash";
import { Container, Row } from "react-bootstrap";
import DcfForm from "../components/DcfForm";
import DiscountedCashFlow from "discounted-cash-flow";
import DcfResults from "../components/DcfResults";

export default class DcfFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPresentValue: 0, fairMarketCap: 0, fairStockPrice: 0 };
  }

  calculate(data) {
    const {
      ticker,
      sharePrice,
      marketCap,
      cash,
      debt,
      freeCashFlow,
      growthRate,
      discountRate,
      terminalMultiple,
    } = data;
    const result = DiscountedCashFlow.calculate(
      freeCashFlow,
      [growthRate],
      terminalMultiple,
      discountRate
    );
    const totalPresentValue = result.totalPresentValue;
    const fairMarketCap = result.totalPresentValue - debt + cash;
    const fairStockPrice = _.round((fairMarketCap * sharePrice) / marketCap, 2);
    this.setState({ totalPresentValue, fairMarketCap, fairStockPrice });
  }

  render() {
    return (
      <Container>
        <Row>
          <DcfForm
            calculate={(formData) => {
              this.calculate(formData);
            }}
          />
        </Row>
        <hr className="rounded" />
        <Row>
          <DcfResults
            totalPresentValue={this.state.totalPresentValue}
            fairMarketCap={this.state.fairMarketCap}
            fairStockPrice={this.state.fairStockPrice}
          />
        </Row>
      </Container>
    );
  }
}