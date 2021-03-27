import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'
import LedgerTable from '../../components/ledger-table'
import LedgerBalance from '../../components/ledger-balance'

import { apiFetch } from '../../modules/api-fetch'

import './styles.css'

export default function Ledger() {

  const [ledger, setLedger] = useState([])

  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json)
    }).then();
  }, [])

  return <div className="container-wrapper">
    <h1>The Ledger of the Seacrow</h1>
    <div className="ledger-entry"> <LedgerEntry setLedger={setLedger} /></div>
    {ledger.length > 0 ? (
      <div>
        <LedgerBalance props={ledger} />
        <LedgerTable props={ledger} />
      </div>
    ) : (
        <div>No Ledger Entries</div>
      )}
  </div>
}
