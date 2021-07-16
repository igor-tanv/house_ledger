import React, { useState } from "react";
import ReactDropdown from "react-dropdown"
import DatePicker from 'react-date-picker';

import { toValueLabel } from '../../modules/object'
import { apiFetch } from '../../modules/api-fetch'

import HomeButton from '../../ui/home-button'


import 'react-dropdown/style.css';

/*
form for creating a temp ledger:
enter ledger name
enter users
enter date

once the form is submitted a ledger will be created with the given inputs
*/

export default function LedgerForm() {

  const defaultValues = {
    ledgerName: '',
    users: '',
    date: new Date()
  }

  const [values, setValues] = useState(defaultValues)

  function updateUsers(e) {
    let users = (e.target.value)
    setValues((prev) => ({
      ...prev,
      users
    }))
  };

  function updateLedgerName(e) {
    let ledgerName = e.target.value
    setValues((prev) => ({
      ...prev,
      ledgerName,
    }))
  };

  function updateDate(e) {
    setValues((prev) => ({
      ...prev,
      date: e
    }))
  };

  function handleSubmit(e) {
    e.preventDefault();

  }

  function valid(values) {
    return Object.keys(values).map(function (key) {
      if (values[key] === '' || values[key] === 0 || values[key] === null) return false
      return key
    }).includes(false)
  }


  return (
    <div classname="ledger-form">
      <HomeButton />
      <h1>Start A New Ledger</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <textarea className="text-area"
          onChange={updateLedgerName}
          value={values.ledgerName}
          placeholder="enter name of ledger"
        />
        <textarea className="text-area"
          onChange={updateUsers}
          value={values.users}
          placeholder="enter users first name seperated by a comma"
        />
        <DatePicker
          onChange={updateDate}
          value={values.date}
          dateFormat="MMMM d, yyyy"
        />
        <button className="button" type="submit" disabled={valid(values)}>
          Create Ledger
        </button>
      </form>
    </div>
  )
}