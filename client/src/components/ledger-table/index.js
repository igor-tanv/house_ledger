import React from "react";
import './styles.css'

import formatDate from '../../modules/format-date'

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
//extract date format to helper function
const renderItem = (props, index) => {
  return (
    <tr key={index} className="single-row">
      <td>{users[props.user]}</td>
      <td>{props.item} </td>
      <td>{formatDate(props.purchase_date)}</td>
      <td>{props.cost.toLocaleString()}</td>
    </tr>
  );
}

export default function LedgerTable({ props }) {

  return (
    <div className="table-container">
      <table className="table-ledger-entry">
        <thead>{renderHead()}</thead>
        <tbody>{props.map((row, index) => renderItem(row, index))}</tbody>
      </table>
    </div>
  );
}

