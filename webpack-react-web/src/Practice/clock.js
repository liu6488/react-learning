import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  timeReader() {
    this.setState({ date: new Date() })
    // return ()
  }
  // 组件已经被渲染到DOM
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.timeReader()
    }, 1000)
  }
  // 组件即将解除挂载
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}