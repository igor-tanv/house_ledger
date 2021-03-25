import React from "react";

import users from '../../data/users/users.json'

import './styles.css'


export default function LedgerItem(props, key) {
  //FIX THIS HACK
  props = props.props

  return <li className="list-item">
    Person:{users[props.user]} Item: {props.item} Cost: {props.cost.toLocaleString()}
  </li>

}