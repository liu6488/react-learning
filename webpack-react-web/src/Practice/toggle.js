import React from "react";
export class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    // onClick={this.handleClick} 此时在handleClick函数中无法获取this，必须绑定
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }))
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'OFF'}
      </button>
    )
  }
}