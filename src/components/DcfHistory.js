import React, { useContext } from "react";
import moment from "moment";
import { Table, Button } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import DcfHistoryContext from "../context/DcfHistoryContext";

function DcfHistoryRow(props) {
  const dcfHistory = useContext(DcfHistoryContext);
  const { data } = props;
  const upsideColor = data.upside > 0 ? "green" : "red";
  return (
    <tr>
      <td>{moment(data.timestamp).fromNow()}</td>
      <td>{data.ticker}</td>
      <td>{data.freeCashFlow}</td>
      <td>{data.terminalMultiple}</td>
      <td>{data.discountRate}</td>
      <td>{data.growthRate}</td>
      <td>{data.fairStockPrice}</td>
      <td className={`bold ${upsideColor}`}>{`${data.upside}%`}</td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            dcfHistory.removeDcf(data.key);
          }}
        >
          <XCircleFill />
        </Button>
      </td>
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
          <th>Upside</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.history.map((entry) => (
          <DcfHistoryRow key={entry.key} data={entry} />
        ))}
      </tbody>
    </Table>
  );
}
