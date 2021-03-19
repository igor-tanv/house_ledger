import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Ledger from "./pages/ledger";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Ledger />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}