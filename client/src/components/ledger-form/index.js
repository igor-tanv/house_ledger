import React, { useState } from "react";
import DatePicker from 'react-date-picker';

import { apiFetch } from '../../modules/api-fetch'
import { validateEntries } from '../../modules/validate-entries'

import HomeButton from '../../ui/home-button'

import 'react-dropdown/style.css';

export default function CreateShortTermLedger() {

  const defaultValues = {
    users: '',
    date: new Date()
  }

  const [values, setValues] = useState(defaultValues)
  const [error, setError] = useState(null)

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

  function handleSubmit(e) {
    e.preventDefault();
    apiFetch(`ledger/short`, 'post', values)
      .then((json) => {
        //redirect to new ledger here
        console.log(json, 71)
      })
      .catch((error) => {
        console.log(error, 74)
      });
  }

  return (
    <div className="ledger-form">
      <HomeButton />
      <h1>Create a Short Term Ledger</h1>
      {error && <span className="error">{error}</span>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <textarea className="text-area"
          onChange={updateUsers}
          value={values.users}
          placeholder="enter name:share (example john:60 mike:40)"
        />
        <DatePicker
          onChange={updateDate}
          value={values.date}
          dateFormat="MMMM d, yyyy"
        />
        <button className="button" type="submit" disabled={validateEntries(values)}>
          Create
        </button>
      </form>
    </div>
  )
}