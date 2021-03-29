import React from "react";
import './styles.css'

import users from '../../data/users/users.json'


const renderHead = () => {
  return (
    <tr>
      <td>
        <div className="col-head">Who</div>
      </td>
      <td>
        <div className="col-head">What </div>
      </td>
      <td>
        <div className="col-head">When </div>
      </td>
      <td>
        <div className="col-head">How Much</div>
      </td>
    </tr>
  );
}

const renderItem = (props, index) => {
  return (
    <tr key={index} className="single-row">
      <td>{users[props.user]}</td>
      <td>{props.item} </td>
      <td>
        {new Intl.DateTimeFormat("en-GB", {
          weekday: "short",
          month: "long",
          day: "2-digit"
        }).format(props.purchaseDate)}
      </td>
      <td>{props.cost.toLocaleString()}</td>
    </tr>
  );
}

export default function LedgerTable(props) {
  //FIX THIS HACK
  props = props.props

  return (
    <div className="table-container">
      <table className="table-ledger-entry">
        <thead>{renderHead()}</thead>
        <tbody>{props.map((row, index) => renderItem(row, index))}</tbody>
      </table>
    </div>
  );
}

