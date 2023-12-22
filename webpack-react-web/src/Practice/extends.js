import React from "react";

function Son(props) {
  return (
    <div className="son">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export function Father(props) {
  return (
    <div className="father">
      Father
      <Son title="Slot">
        <ul>
          {[1, 2, 3].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Son>
    </div>
  )
}