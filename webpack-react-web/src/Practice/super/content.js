// 创建一个content
import React from "react";
const ThemeContent = React.createContext('light')

export class ContentDemo extends React.Component {
  render() {
    return (
      <ThemeContent.Provider value="dark" >
        <Toolbar />
      </ThemeContent.Provider>
    )
  }
}

function Toolbar() {
  return (
      <ThemedButton></ThemedButton>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContent;
  render() {
    return <button>{this.context}</button>;
  }
}

// function ThemedButton(){
//   return <button>{this.context}</button>;
// }