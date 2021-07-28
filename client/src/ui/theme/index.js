import React from "react";
import Header from "./header";


export default function Theme({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}