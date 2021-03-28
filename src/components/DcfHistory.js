import React from "react";
import moment from "moment";
import { Table } from "react-bootstrap";

function DcfHistoryRow(props) {
  return (
    <tr>
      <td>{moment(props.data.timestamp).fromNow()}</td>
      <td>{props.data.ticker}</td>
      <td>{props.data.freeCashFlow}</td>
      <td>{props.data.terminalMultiple}</td>
      <td>{props.data.discountRate}</td>
      <td>{props.data.growthRate}</td>
      <td>{props.data.fairStockPrice}</td>
    </tr>
  );
}

export default function DcfHistory(props) {
  return (
    <Table striped size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Ticker</th>
          <th>Free cash flow</th>
          <th>Terminal multiple</th>
          <th>Discount rate</th>
          <th>Growth rate</th>
          <th>Fair Stock Price</th>
        </tr>
      </thead>
      <tbody>
        {props.history.map((entry) => (
          <DcfHistoryRow key={entry.timestamp} data={entry} />
        ))}
      </tbody>
    </Table>
  );
}
