import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'
import LedgerTable from '../../components/ledger-table'
import LedgerBalance from '../../components/ledger-balance'

import users from '../../data/users/users.json'

import { apiFetch } from '../../modules/api-fetch'

import './styles.css'

export default function LongTermLedger() {

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
    <h1>The Crown Ledger</h1>
    <button onClick={handleSubmit}>Clear Ledger Entries</button>
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/short/new';
      }}
    >
      Create Short-Term Ledger
    </button>

    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/short';
      }}
    >
      Active Short-Term Ledgers
    </button>

    <div className="ledger-entry">
      <LedgerEntry
        setLedger={setLedger}
        users={users}
      />
    </div>
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
