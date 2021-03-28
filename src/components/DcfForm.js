import React, { useState } from "react";
import { Form, Container, Row, Button } from "react-bootstrap";

function FormRow(props) {
  return (
    <Row className="small-vertical-margin dcf-form-row">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        size="sm"
        step={props.step || "0.01"}
        lang="en"
        type={props.type}
        onChange={(event) => {
          props.handleChange(event.target.value);
        }}
        value={props.value}
      />
    </Row>
  );
}

function DcfForm(props) {
  const [ticker, setTicker] = useState("AAPL");
  const [sharePrice, setSharePrice] = useState(125);
  const [marketCap, setMarketCap] = useState(2108);
  const [cash, setCash] = useState(76.8);
  const [debt, setDebt] = useState(112);
  const [freeCashFlow, setFreeCashFlow] = useState(73.3);
  const [growthRate, setGrowthRate] = useState(0.05);
  const [discountRate, setDiscountRate] = useState(0.1);
  const [terminalMultiple, setTerminalMultiple] = useState(12);

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          props.calculate({
            ticker,
            sharePrice: parseFloat(sharePrice),
            marketCap: parseFloat(marketCap),
            cash: parseFloat(cash),
            debt: parseFloat(debt),
            freeCashFlow: parseFloat(freeCashFlow),
            growthRate: parseFloat(growthRate),
            discountRate: parseFloat(discountRate),
            terminalMultiple: parseFloat(terminalMultiple),
          });
          event.preventDefault();
        }}
      >
        <Form.Group controlId="dcfForm">
          <FormRow
            label="Ticker"
            type="text"
            handleChange={(newValue) => {
              setTicker(newValue.toUpperCase());
            }}
            value={ticker}
          />
          <FormRow
            label="Share price ($)"
            type="number"
            handleChange={setSharePrice}
            value={sharePrice}
          />
          <FormRow
            label="Market cap ($B)"
            type="number"
            handleChange={setMarketCap}
            value={marketCap}
          />
          <FormRow
            label="Cash & Equivalents ($B)"
            type="number"
            handleChange={setCash}
            value={cash}
          />
          <FormRow
            label="Total debt ($B)"
            type="number"
            handleChange={setDebt}
            value={debt}
          />
          <FormRow
            label="Free cash flow ($B)"
            type="number"
            handleChange={setFreeCashFlow}
            value={freeCashFlow}
          />
          <FormRow
            label="Terminal multiple"
            type="number"
            step="1"
            handleChange={setTerminalMultiple}
            value={terminalMultiple}
          />
          <FormRow
            label="Discount rate (0.1 = 10%)"
            type="number"
            handleChange={setDiscountRate}
            value={discountRate}
          />
          <FormRow
            label="Growth rate (0.1 = 10%)"
            type="number"
            handleChange={setGrowthRate}
            value={growthRate}
          />
          <Row className="small-vertical-margin">
            <Button variant="primary" type="submit" className="full-width">
              Calculate fair value
            </Button>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default DcfForm;
