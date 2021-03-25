import React, { useState } from "react";
import ReactDropdown from "react-dropdown"
import 'react-dropdown/style.css';
//import './styles.css'

import { toValueLabel } from '../../modules/object'
import { apiFetch } from '../../modules/api-fetch'

import users from '../../data/users/users.json'

export default function LedgerEntry({ setLedger }) {

  const defaultValues = {
    user: null,
    item: '',
    cost: 0,
    timestamp: Date.now()
  }

  const [values, setValues] = useState(defaultValues)

  function updateCost(e) {
    let cost = parseInt(e.target.value) || 0;
    setValues((prev) => ({
      ...prev,
      cost,
    }))
  };

  function updateUser(e) {
    let user = e.value
    setValues((prev) => ({
      ...prev,
      user,
    }))
  };

  function updateItem(e) {
    let item = e.target.value
    setValues((prev) => ({
      ...prev,
      item,
    }))
  };

  function valid(values) {
    return Object.keys(values).map(function (key) {
      if (values[key] === '' || values[key] === 0) return false
      return key
    }).includes(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    apiFetch(`ledger`, 'post', values)
      .then((json) => {
        setValues(defaultValues)
        apiFetch('').then((json) => {
          setLedger(json)
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <ReactDropdown
          options={toValueLabel(users)}
          onChange={updateUser}
          placeholder="Select a user"
          value={values.user}
        />
        <input
          type="number"
          min="0"
          onChange={updateCost}
          value={String(values.cost)}
        />
        <textarea
          onChange={updateItem}
          value={values.item}
        />

        <button className="button" type="submit" disabled={valid(values)}>
          Submit Entry
        </button>
      </form>
    </div>
  )
}