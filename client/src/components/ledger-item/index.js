import React, { useState } from "react";

import { toValueLabel } from '../../modules/object'

import users from '../../data/users/users.json'

export default function LedgerItem(props, key) {
  //FIX THIS HACK
  props = props.props

  return <div>
    <div>Person:{props.user} Item: {props.item} Cost: {props.cost}</div>
  </div>

}