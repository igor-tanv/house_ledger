import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'

import { apiFetch } from '../../modules/api-fetch'

export default function Ledger() {

  const [ledger, setLedger] = useState([])

  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json)
    });
  }, []);


  return <div>
    <LedgerEntry />
  </div>
}
