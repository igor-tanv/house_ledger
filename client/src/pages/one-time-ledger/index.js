import React, { useEffect, useState } from "react";

import { apiFetch } from '../../modules/api-fetch'

export default function OneTimeLedgers() {

  const [ledgers, setLedgers] = useState([])

  useEffect(() => {
    apiFetch('ledger/temp').then((json) => {
      console.log(json, 17)
      setLedgers(json)
    }).then();
  }, [])


  return <div className="container-wrapper">
    <h1>Temp Ledger</h1>
    {ledgers.length > 0 ? (
      <div>
        yes
      </div>
    ) : (
      <div>No Active Ledgers</div>
    )}


  </div>
}
