import React from "react";

import users from '../../data/users/users.json'

import './styles.css'


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
        <div className="col-head">How Much</div>
      </td>
    </tr>
  );
}

const renderItem = (props, index) => {
  return (
    <tr key={index} className="single-row">
      <td>{props.user}</td>
      <td>{props.item} </td>
      <td>{props.cost}</td>
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

