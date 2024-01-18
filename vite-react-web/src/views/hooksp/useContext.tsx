import React, { useContext, useEffect, useState } from "react";
import { TopContext } from '../../utils/context'
import CodeBlock from "../../components/CodeBlock";

const UseContextDemo: React.FC = () => {
  console.log('父组件render');
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1)
  }
  const globalContextData = useContext(TopContext)
  const indexProvideValue = {
    ...globalContextData,
    count,
    addCount,
  }

  return (<>
    <TopContext.Provider value={indexProvideValue}>
      <ChildDemo></ChildDemo>
    </TopContext.Provider>
    <CodeBlock markdown={introMarkdown} />
  </>)
}

// 子组件
const ChildDemo: React.FC = () => {
  console.log('子组件render');
  return (<SonDemo></SonDemo>)
}

// 孙级组件
const SonDemo: React.FC = () => {
  const topData = useContext(TopContext)
  console.log('孙组件render');
  const handleClick = () => {
    console.log(topData);
    topData.addCount(2)
  }
  return (
    <>
      <div>全局的属性：{topData.name}</div>
      <div>父组件的属性：{topData.count}</div>
      <button onClick={handleClick}>调用父组件的方法</button>
    </>
  )
}

export default UseContextDemo;


const introMarkdown = `
# 创建context
\`\`\`js
// context
import React from "react"

interface InitValueType {
  name: string
  role: string
  [propsName: string]: any
}
export const initValue: Partial<InitValueType> = {
  name: "admin", role: 'admin'
}
export const TopContext = React.createContext(initValue)
\`\`\`
#  使用
\`\`\`js
import React, { useContext, useEffect, useState } from "react";
import { TopContext } from '../../utils/context'

const UseContextDemo: React.FC = () => {
  console.log('父组件render');
  const [count, setCount] = useState(0);
  const addCount = () => {   // 传递到下级组件的方法
    setCount(count + 1)
  }
  const globalContextData = useContext(TopContext)
  const indexProvideValue = {
    ...globalContextData,   // 全局的属性
    count,      // 父组件的属性
    addCount,   // 父组件的函数
  }

  return (<>
    <TopContext.Provider value={indexProvideValue}>
      <ChildDemo></ChildDemo>
    </TopContext.Provider>
  </>)
}

// 子组件
const ChildDemo: React.FC = () => {
  console.log('子组件render');
  return (<SonDemo></SonDemo>)
}

// 孙级组件
const SonDemo: React.FC = () => {
  const topData = useContext(TopContext)
  console.log('孙组件render');
  const handleClick = () => {
    console.log(topData);
    topData.addCount(2)
  }
  return (
    <>
      <div>全局的属性：{topData.name}</div>
      <div>父组件的属性：{topData.count}</div>
      <button onClick={handleClick}>调用父组件的方法</button>
    </>
  )
}

export default UseContextDemo;
\`\`\`

`