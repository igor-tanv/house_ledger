import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import Button from '@material-ui/core/Button';

import { apiFetch } from '../../modules/api-fetch'
import { validateEntries } from '../../modules/validate-entries'

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
        const ledgerId = json[0].id
        window.location.href = `/short/${ledgerId}`
      })
      .catch((error) => {
        setError(error)
          (error, 74)
      });
  }

  return (
    <div className="ledger-form">
      <h1>Create a Short Term Ledger</h1>
      {error && <span className="error">{error}</span>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <textarea className="text-area"
          onChange={updateUsers}
          value={values.users}
          placeholder="enter users first names (example: john, mike, bob)"
        />
        <DatePicker
          onChange={updateDate}
          value={values.date}
          dateFormat="MMMM d, yyyy"
        />
        <Button variant='contained' color='secondary' type="submit" disabled={validateEntries(values)}>
          Create
        </Button>
      </form>
    </div>
  )
}