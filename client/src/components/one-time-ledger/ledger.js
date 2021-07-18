import React, { useState, useEffect } from "react";

import { apiFetch } from '../../modules/api-fetch'

export default function OneTimeLedgerComponent(id) {

  const [ledger, setLedger] = useState({})

  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json)
    }).then();
  }, [])

  return <div>
    {ledger.users}
  </div>
}