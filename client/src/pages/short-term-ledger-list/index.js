import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiFetch } from '../../modules/api-fetch'

export default function ShortTermLedgerList() {

  const [ledgers, setLedgers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch('ledger/short').then((json) => {
      setLedgers(json)
    }).catch((error) => {
      setError(`Server Error: ${JSON.stringify(error)}`)
    })
  }, [])

  return <div className="container-wrapper">
    {error && <span className="error">{error}</span>}
    {ledgers.length > 0 ? (
      <div>
        <div>Open Short Term Ledgers</div>
        {ledgers.map((ledger) => {
          return <div><Link to={`/short/${ledger.id}`}>
            <button className="ledger-list-button">{
              ledger.users
            }</button>
          </Link></div>
        })}
      </div>
    ) : (
      <div>No Open Short Term Ledgers</div>
    )}
  </div>
}