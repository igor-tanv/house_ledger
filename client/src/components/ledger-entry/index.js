import React, { useState } from "react";
import ReactDropdown from "react-dropdown"
import DatePicker from 'react-date-picker';

import { formatDropdown } from '../../modules/format-dropdown'
import { validateEntries } from '../../modules/validate-entries'
import { apiFetch } from '../../modules/api-fetch'

import 'react-dropdown/style.css';
import './styles.css'


export default function LedgerEntry({ setLedger, users }) {

  console.log(validateEntries)

  const defaultValues = {
    user: null,
    item: '',
    cost: 0,
    purchaseDate: new Date()
  }

  const [values, setValues] = useState(defaultValues)

  function updateCost(e) {
    let cost = parseInt(e.target.value.replace(/,/g, '')) || 0;
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
    setValues((prev) => ({
      ...prev,
      purchaseDate: e
    }))
  };

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
        <ReactDropdown
          className="dropdown-wrapper"
          options={formatDropdown(users)}
          onChange={updateUser}
          placeholder="Select a user"
          value={values.user}
        />

        <DatePicker
          onChange={updateDate}
          value={values.purchaseDate}
          dateFormat="MMMM d, yyyy"
        />

        <input className="quantity"
          type="text"
          onChange={updateCost}
          value={values.cost.toLocaleString()}
        />
        <textarea className="text-area"
          onChange={updateItem}
          value={values.item}
          placeholder="enter item description"
        />

        <button className="button" type="submit" disabled={validateEntries(values)}>
          Submit to Ledger
        </button>
      </form>
    </div>
  )
}