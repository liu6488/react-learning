import React, { useImperativeHandle, useState, forwardRef, useRef, useEffect } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Button } from "antd";

// 主Demo
const UseImperativeHandleDemo = () => {
  const childRef: any = useRef(null)
  const [value, setValue] = useState('123')
  useEffect(() => {
    console.log('mainMounted', childRef.current.name);
  }, [])
  return (<>
    <ChildDemo ref={childRef} />
    <SonDemo /> 
    <div>child-value: {childRef?.current?.name} </div>
    <Button onClick={() => childRef?.current?.setCount(childRef.current.count + 1)}>setCount</Button>
  </>)
}

// 子组件
const ChildDemo = React.memo(forwardRef((props: any, ref: any) => {
  console.log('ChildDemo');
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => ({
    count,
    setCount,
    name: 'test'
  }))
  return (<div>child-count: {count}</div>
  )
}))

const SonDemo = () => {
  console.log('sonDemo');
  return <>
    <div>sonDemo</div>
  </>
}

// 介绍文档
const introMarkDownDemo = () => {
  const introMarkDown = `
  # useImperativeHandle 可以访问子组件的属性和方法
  `
  return <CodeBlock markdown={introMarkDown} />
}


export default UseImperativeHandleDemo;
