import React from "react";

import './styles.css'

function calculateBalance(ledger) {
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
  return { igor, nick, seb }
}

function renderBalanceClass(userShare) {
  if (userShare >= 0) return 'positive'
  else return 'negative'
}

export default function LedgerBalance(props) {

  //FIX THIS HACK
  props = props.props

  const userShare = calculateBalance(props)

  return (
    <div className="table-container">
      <div className="ledger-balance">
        <h2 className={`user-balance-${renderBalanceClass(userShare.igor)}`}>Igor: {(Math.round(userShare.igor / 1000) * 1000).toLocaleString()}</h2>
        <h2 className={`user-balance-${renderBalanceClass(userShare.nick)}`}>Nick: {(Math.round(userShare.nick / 1000) * 1000).toLocaleString()}</h2>
        <h2 className={`user-balance-${renderBalanceClass(userShare.seb)}`}>Seb: {(Math.round(userShare.seb / 1000) * 1000).toLocaleString()}</h2>
      </div>
    </div>
  );
}