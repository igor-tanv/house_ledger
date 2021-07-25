import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LongTermLedger from "./pages/long-term-ledger";
import ShortTermLedger from "./pages/short-term-ledger"
import ShortTermLedgerForm from "./pages/short-term-ledger-form"



export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LongTermLedger />
        </Route>
        <Route exact path="/short/new">
          <ShortTermLedgerForm />
        </Route>
        <Route exact path="/short/:id">
          <ShortTermLedger />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}