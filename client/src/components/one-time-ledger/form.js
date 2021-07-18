import React, { useState } from "react";
import DatePicker from 'react-date-picker';

import { apiFetch } from '../../modules/api-fetch'

import HomeButton from '../../ui/home-button'

import 'react-dropdown/style.css';

export default function LedgerForm() {

  const defaultValues = {
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

  function updateDate(e) {
    setValues((prev) => ({
      ...prev,
      date: e
    }))
  };

  function valid(values) {
    console.log(values)
    return Object.keys(values).map(function (key) {
      if (values[key] === '' || values[key] === 0 || values[key] === null) return false
      return key
    }).includes(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    apiFetch(`ledger/temp`, 'post', values)
      .then((json) => {
        console.log(json, 71)
      })
      .catch((error) => {
        console.log(error, 74)
      });
  }

  return (
    <div className="ledger-form">
      <HomeButton />
      <h1>Start A New Ledger</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <textarea className="text-area"
          onChange={updateUsers}
          value={values.users}
          placeholder="enter users first name seperated by a space"
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