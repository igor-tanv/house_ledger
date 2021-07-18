import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LongTermLedger from "./pages/long-term-ledger";
import ShortTermLedger from "./pages/short-term-ledger/ledger"
import ShortTermLedgerList from "./pages/short-term-ledger/index"
import CreateShortTermLedger from "./pages/short-term-ledger/form"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LongTermLedger />
        </Route>
        <Route exact path="/new/ledger">
          <CreateShortTermLedger />
        </Route>
        <Route exact path="/active/ledgers">
          <ShortTermLedgerList />
        </Route>
        <Route exact path="/active/ledgers/:id">
          <ShortTermLedger />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}