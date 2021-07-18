import React, { useEffect, useState } from "react";

import LedgerForm from '../../components/ledger-form'

import { apiFetch } from '../../modules/api-fetch'

export default function ShortTermLedgerForm() {

  return (
    <div>
      <LedgerForm />
    </div>
  )

}