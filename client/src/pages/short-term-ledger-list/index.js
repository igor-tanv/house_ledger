import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiFetch } from '../../modules/api-fetch'

import HomeButton from '../../ui/home-button'

export default function ShortTermLedgerList() {

  const [ledgers, setLedgers] = useState([])

  useEffect(() => {
    apiFetch('ledger/short').then((json) => {
      setLedgers(json)
    })
  }, [])

  return <div className="container-wrapper">
    <HomeButton />
    <div>Active Short Term Ledgers</div>
    {ledgers.length > 0 ? (
      <div>
        {ledgers.map((ledger) => {
          return <div><Link to={`/short/${ledger.id}`}>
            <button className="ledger-list-button">{
              ledger.users
            }</button>
          </Link></div>
        })}
      </div>
    ) : (
      <div>No Ledger Entries</div>
    )}
  </div>
}