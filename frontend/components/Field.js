import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);

export function Field({ label, children }) {
  return html`<div><label>${label}</label>${children}</div>`;
}

