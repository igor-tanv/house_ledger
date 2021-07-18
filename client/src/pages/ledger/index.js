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

  function handleSubmit(e) {
    e.preventDefault();
    apiFetch(`ledger/clear`, 'post')
      .then((json) => {
        setLedger(json)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return <div className="container-wrapper">
    <h1>The Daily Ledger</h1>
    <button onClick={handleSubmit}>Clear Ledger Entries</button>
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/new/ledger';
      }}
    >
      Create One-Time Ledger
    </button>

    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/active/ledgers';
      }}
    >
      Active One-Time Ledgers
    </button>

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
