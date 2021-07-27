import React from "react";
import './styles.css'

import formatDate from '../../modules/format-date'
import { usersToObject } from '../../modules/users-to-object'




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

const renderItem = (props, index, users) => {
  return (
    <tr key={index} className="single-row">
      <td>{usersToObject(users)[props.user]}</td>
      <td>{props.item} </td>
      <td>{formatDate(props.purchase_date)}</td>
      <td>{props.cost.toLocaleString()}</td>
    </tr>
  );
}

export default function LedgerTable({ props, users }) {

  return (
    <div className="table-container">
      <table className="table-ledger-entry">
        <thead>{renderHead()}</thead>
        <tbody>{props.map((row, index) => renderItem(row, index, users))}</tbody>
      </table>
    </div>
  );
}

