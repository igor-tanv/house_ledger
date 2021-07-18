import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom"

import ShortTermLedger from '../../components/ledger-form';

import { apiFetch } from '../../modules/api-fetch'

import HomeButton from '../../ui/home-button'

function ShortTermLedgerList({ match }) {

  const [ledger, setLedger] = useState({})

  useEffect(() => {
    apiFetch(`ledger/short/${match.params.id}`).then((json) => {
      console.log(json, 17)
      setLedger(json[0])
    })
  }, [])

  return <div className="container-wrapper">
    <HomeButton />
    <ShortTermLedger props={ledger} />
  </div>
}

export default withRouter(ShortTermLedgerList)