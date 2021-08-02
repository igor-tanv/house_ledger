import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { apiFetch } from '../../modules/api-fetch'
import { usersToObject } from '../../modules/users-to-object'

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

  function getUserNames(users) {
    return Object.values(usersToObject(users)).reduce((acc, cur) => acc += ' ' + cur, ' ')
  }

  return <div className="container-wrapper">
    {error && <span className="error">{error}</span>}
    {ledgers.length > 0 ? (
      <div>
        <div>Current Short Term Ledgers</div>
        <br></br>
        {ledgers.map((ledger) => {
          return <div><Link to={`/short/${ledger.id}`}>
            <Button color='secondary' variant='outlined'>
              {getUserNames(ledger.users)}
            </Button>
          </Link></div>
        })}
      </div>
    ) : (
      <div>No Open Short Term Ledgers</div>
    )}
  </div>
}