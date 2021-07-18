import React from "react";

import 'react-dropdown/style.css';

export default function ShortLedger({ props }) {

  return (
    <div className='one-time-ledger-list'>
      {props.map((row) => {
        return <button
          type='button'
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `ledgers/${row.id}`;
          }}
        >{new Intl.DateTimeFormat("en-GB", {
          weekday: "short",
          month: "long",
          day: "2-digit"
        }).format(props.created_at)}: {row.users}</button>
      })}
    </div>
  )

}