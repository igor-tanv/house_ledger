import React, { useState } from "react";
import ReactDropdown from "react-dropdown"
import 'react-dropdown/style.css';

import { toValueLabel } from '../../modules/object'

import users from '../../data/users/users.json'


const defaultValues = {
  user: '',
  item: '',
  cost: ''
}

export default function LedgerEntry() {
  const [values, setValues] = useState(defaultValues)

  const updateCost = (e) => {
    let cost = parseInt(e.target.value);
    setValues((prev) => ({
      ...prev,
      cost,
    }))
  };

  const updateUser = (e) => {
    let user = e.value
    setValues((prev) => ({
      ...prev,
      user,
    }))
  };

  const updateItem = (e) => {
    let item = e.target.value
    setValues((prev) => ({
      ...prev,
      item,
    }))
  };

  return (
    <div>
      <form>
        <ReactDropdown
          options={toValueLabel(users)}
          onChange={updateUser}
          placeholder="Select a user"
        />
        <input
          type="number"
          min="0"
          onChange={updateCost}
        />
        <textarea
          onChange={updateItem}
        />
      </form>
    </div>
  )
}