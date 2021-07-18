import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom"

import { apiFetch } from '../../modules/api-fetch'

import OneTimeLedgerComponent from '../../components/one-time-ledger/ledger';

function OneTimeLedger({ match }) {

  const [ledger, setLedger] = useState([])

  useEffect(() => {
    apiFetch(`ledger/temp/${match.params.id}`).then((json) => {
      console.log(json, 17)
      setLedger(json)
    }).then();
  }, [])


  return <div className="container-wrapper">
    <OneTimeLedgerComponent props={ledger} />
  </div>
}

export default withRouter(OneTimeLedger)
