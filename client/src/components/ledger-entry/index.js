import React, { useState } from "react";
import ReactDropdown from "react-dropdown"
import DatePicker from 'react-date-picker';



import { toValueLabel } from '../../modules/object'
import { apiFetch } from '../../modules/api-fetch'

import users from '../../data/users/users.json'

import 'react-dropdown/style.css';
import './styles.css'


export default function LedgerEntry({ setLedger }) {

  const defaultValues = {
    user: null,
    item: '',
    cost: 0,
    timestamp: new Date()
  }

  const [values, setValues] = useState(defaultValues)

  function updateCost(e) {
    let cost = parseInt(e.target.value) || 0;
    setValues((prev) => ({
      ...prev,
      cost
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

  function updateDate(e) {
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
    <div className="ledger-entry">
      <form onSubmit={handleSubmit} autoComplete="off">
        <ReactDropdown className="dropdown-wrapper"
          options={toValueLabel(users)}
          onChange={updateUser}
          placeholder="Select a user"
          value={values.user}
        />

        <DatePicker
          onChange={updateDate}
          value={values.timestamp}
          dateFormat="MMMM d, yyyy"
        />

        <input className="quantity"
          type="number"
          min="0"
          onChange={updateCost}
          value={String(values.cost)}
        />
        <textarea className="text-area"
          onChange={updateItem}
          value={values.item}
          placeholder="enter item description"
        />

        <button className="button" type="submit" disabled={valid(values)}>
          Submit Entry
        </button>
      </form>
    </div>
  )
}