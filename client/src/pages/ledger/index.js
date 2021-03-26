import React, { useEffect, useState } from "react";

import LedgerEntry from '../../components/ledger-entry'
import LedgerTable from '../../components/ledger-table'

import { apiFetch } from '../../modules/api-fetch'

import './styles.css'

export function calculateBalance(ledger, setUserShare) {
  let igor = 0
  let nick = 0
  let seb = 0

  // calculate ledger total
  const shareOfTotal = (ledger.reduce((total, entry) => {
    return total += entry.cost
  }, 0) / 3)

  //loop through ledger and subtract any entry made by user from their total
  ledger.map((entry) => {
    if (entry.user === 'igor') igor -= entry.cost
    if (entry.user === 'nick') nick -= entry.cost
    if (entry.user === 'seb') seb -= entry.cost
    return entry
  })
  igor += shareOfTotal
  seb += shareOfTotal
  nick += shareOfTotal
  setUserShare({ igor: igor, nick: nick, seb: seb })
}

export default function Ledger() {

  const defaultShare = { igor: 0, seb: 0, nick: 0 }

  const [ledger, setLedger] = useState([])
  const [userShare, setUserShare] = useState(defaultShare)

  useEffect(() => {
    apiFetch('').then((json) => {
      setLedger(json)
      calculateBalance(json, setUserShare)
    }).then();
  }, [])

  ledger.map((l) => console.log(l))

  return <div className="container-wrapper">
    <div className="ledger-entry"> <LedgerEntry setLedger={setLedger} /></div>
    {ledger.length > 0 ? (
      <div>
        <div className="ledger-balance">
          <h2>Igor: {(Math.round(userShare.igor / 1000) * 1000).toLocaleString()}</h2>
          <h2>Nick: {(Math.round(userShare.nick / 1000) * 1000).toLocaleString()}</h2>
          <h2>Seb: {(Math.round(userShare.seb / 1000) * 1000).toLocaleString()}</h2>
        </div>
        <div>
          <LedgerTable props={ledger} />
        </div>

      </div>
    ) : (
        <div>No Ledger Entries</div>
      )}
  </div>
}
