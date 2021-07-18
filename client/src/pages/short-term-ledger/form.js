import React, { useEffect, useState } from "react";

import LedgerForm from '../../components/short-term-ledger/form'

import { apiFetch } from '../../modules/api-fetch'

export default function CreateShortTermLedger() {

  return (
    <div>
      <LedgerForm />
    </div>
  )

}