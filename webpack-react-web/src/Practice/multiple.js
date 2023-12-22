import React from 'react';
export class Multiple extends React.Component {
  // constructor()

  render() {
    const listDom = [1, 2, 3].map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listDom}</ul>;
  }
}

export function NubmerList(props) {
  return (
    <ul>
      {props.numbers.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
