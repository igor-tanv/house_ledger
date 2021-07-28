import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LongTermLedger from "./pages/long-term-ledger";
import ShortTermLedger from "./pages/short-term-ledger"
import ShortTermLedgerForm from "./pages/short-term-ledger-form"
import ShortTermLedgerList from "./pages/short-term-ledger-list"

import Theme from './ui/theme'



export default function App() {
  return (
    <BrowserRouter>
      <Theme>
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
          <Route exact path="/short">
            <ShortTermLedgerList />
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
}