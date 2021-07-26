import React from "react";
import { usersToObject } from '../../modules/users-to-object'

import './styles.css'

function calculateBalance(ledger, ledgerUsers) {

  const userArray = ledgerUsers.split(' ')

  // calculate ledger total per user
  const shareOfTotal = (ledger.reduce((total, entry) => {
    return total += entry.cost
  }, 0) / userArray.length)

  //create user object and assign each user shareOfTotal
  const users = userArray.reduce((acc, cur) => (acc[cur] = shareOfTotal, acc), {});

  //loop through ledger and subtract any entry made by user from their total
  ledger.map((entry) => users[entry.user] -= entry.cost)

  return users
}

function calculateShortLedgerBalance(ledger) {

  const { transactions } = ledger

  const userArray = ledger[0].users.split(' ')

  // calculate ledger total per user
  const shareOfTotal = (transactions.reduce((total, row) => total + row.cost, 0) / userArray.length)

  //create user object and assign each user shareOfTotal
  const users = userArray.reduce((acc, cur) => (acc[cur] = shareOfTotal, acc), {});

  //loop through ledger transactions and subtract any entry made by user from their total
  transactions.map((entry) => users[entry.user] -= entry.cost)

  return users
}

function renderBalanceClass(userShare) {
  if (userShare > 0) return 'positive'
  else return 'negative'
}

export default function LedgerBalance({ props, users }) {
  let userShare;
  if (props.transactions !== undefined) userShare = calculateShortLedgerBalance(props)
  else userShare = calculateBalance(props, users)

  const userNames = usersToObject(users)

  return (
    <div className="table-container">
      <div className="ledger-balance">
        {Object.keys(userShare).map((user, index) => {
          return <h2 key={index} className={`user-balance-${renderBalanceClass(userShare[user])}`}>{userNames[user]}: {(Math.round(userShare[user] / 1000) * 1000).toLocaleString()}</h2>
        })}
      </div>
    </div>
  );
}
