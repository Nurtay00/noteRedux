import React from "react";

import "./InputBar.css";

export default function InputBar(props: any) {
  var item: string;
  return (
    <div className="inputbar">
      <input
        type="text"
        onChange={(event) => (item = event.target.value)}
        className="input"
      />
      <button onClick={() => props.onAdd(item)} className="inputBtn">
        Add Todo
      </button>
    </div>
  );
}
