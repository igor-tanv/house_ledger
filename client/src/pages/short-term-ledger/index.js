import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom"

import { apiFetch } from '../../modules/api-fetch'

function ShortTermLedger({ match }) {

  const [ledger, setLedger] = useState([])

  useEffect(() => {
    apiFetch(`ledger/temp/${match.params.id}`).then((json) => {
      console.log(json, 17)
      setLedger(json)
    }).then();
  }, [])


  return <div className="container-wrapper">
    <h1>refactor existing components to support short term ledger logic</h1>
  </div>
}

export default withRouter(ShortTermLedger)
