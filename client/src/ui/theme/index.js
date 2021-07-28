import React from "react";
import Header from "./header";


export default function Theme({ children }) {
  return (
    <div>
      <Header />
      <div className="__rival_container">{children}</div>
    </div>
  );
}