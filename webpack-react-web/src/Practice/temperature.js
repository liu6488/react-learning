import React from 'react';
// 创建一个 子组件
// class TemperItem extends React.Component {
//   render() {
//     return (
//       <fieldset>
//         <legend>Enter temperature in {this.props.scaleName}:</legend>
//         <input
//           name={this.props.scaleName}
//           value={this.props.temperature}
//           onChange={this.props.toChange}
//         />
//       </fieldset>
//     );
//   }
// }

// 温度子组件
function TemperItem(props) {
  return (
    <fieldset>
      <legend>Enter temperature in {props.scaleName}:</legend>
      <input
        name={props.scaleName}
        value={props.temperature}
        onChange={props.toChange}
      />
    </fieldset>
  )
}

// 主组件
export class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 温度的名称
      scaleNames: ['Celsius', 'Fahrenheit'],
      temperature: ['', ''],
    };
  }
  handleChange(e) {
    let temperatures = []
    if (e.target.name === 'Celsius') {
      temperatures = [e.target.value, toFahrenheit(e.target.value)]
    } else {
      temperatures = [toCelsius(e.target.value), e.target.value]
    }
    this.setState({ temperature: temperatures })
  }
  render() {
    return (
      <>
        {this.state.scaleNames.map((scaleName, index) => (
          <TemperItem
            key={index}
            scaleName={scaleName}
            toChange={(e) => this.handleChange(e)}
            temperature={this.state.temperature[index]}
          ></TemperItem>
        ))}
      </>
    );
  }
}

//温度转化公式
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}