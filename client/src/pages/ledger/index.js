import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'
import LedgerItem from '../../components/ledger-item'

import { apiFetch } from '../../modules/api-fetch'

export default function Ledger() {

  const [ledger, setLedger] = useState([])

  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json)
    });
  }, [])

  return <div>
    <div> <LedgerEntry setLedger={setLedger} /></div>
    {ledger.length > 0 ? (
      <div>
        {ledger.map((entry, index) => {
          return (
            <LedgerItem
              props={entry}
              key={index} />
          )
        })}
      </div>
    ) : (
        <div>No Ledger Entries</div>
      )}
  </div>
}
