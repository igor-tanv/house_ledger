import React, { useEffect, useState } from "react";

import LedgerForm from '../../components/one-time-ledger/form'

import { apiFetch } from '../../modules/api-fetch'

export default function CreateNewLedger() {

  return (
    <div>
      <LedgerForm />
    </div>
  )

}