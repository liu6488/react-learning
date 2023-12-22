import React from 'react';

// export class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => { this.props.toClick() }}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

export function Square(props) {
  return (
    <button className="square" onClick={props.toClick}>
      {props.value}
    </button >
  )
}
