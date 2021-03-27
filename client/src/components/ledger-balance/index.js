import React, { useState, useEffect } from "react";

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

export default function LedgerBalance(props) {

  //FIX THIS HACK
  props = props.props

  const userShare = calculateBalance(props)

  return (
    <div className="table-container">
      <div className="ledger-balance">
        <h2>Igor: {(Math.round(userShare.igor / 1000) * 1000).toLocaleString()}</h2>
        <h2>Nick: {(Math.round(userShare.nick / 1000) * 1000).toLocaleString()}</h2>
        <h2>Seb: {(Math.round(userShare.seb / 1000) * 1000).toLocaleString()}</h2>
      </div>
    </div>
  );
}