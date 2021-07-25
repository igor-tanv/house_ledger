import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'
import LedgerTable from '../../components/ledger-table'
import LedgerBalance from '../../components/ledger-balance'

import { apiFetch } from '../../modules/api-fetch'
import { usersToObject } from '../../modules/users-to-object'

import { defaultValues } from '../../form-helpers/defaultEntryValues'

import './styles.css'

export default function LongTermLedger() {
  const [values, setValues] = useState(defaultValues)
  const [users, setUsers] = useState('')
  const [ledger, setLedger] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json.filter(row => row.id !== undefined))
      setUsers(json.filter(row => row.users !== undefined)[0].users)
    }).then();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    apiFetch(`ledger`, 'post', values)
      .then((json) => {
        setValues(defaultValues)
        apiFetch('').then((json) => {
          setLedger(json)
        });
      })
      .catch((error) => {
        setError(error)
      });
  }

  function clearActiveLedger(e) {
    e.preventDefault();
    apiFetch(`ledger/clear`, 'post')
      .then((json) => {
        setLedger(json)
      })
      .catch((error) => {
        setError(error)
      });
  }

  return <div className="container-wrapper">
    <h1>The Crown Ledger</h1>
    {error && <span className="error">{error}</span>}
    <button onClick={clearActiveLedger}>Clear Ledger Entries</button>
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
        values={values}
        setValues={setValues}
        users={usersToObject(users)}
        handleSubmit={handleSubmit}
      />
    </div>
    {ledger.length > 0 ? (
      <div>
        <LedgerBalance props={ledger} users={users} />
        <LedgerTable props={ledger} />
      </div>
    ) : (
      <div>No Ledger Entries</div>
    )}
  </div>
}
