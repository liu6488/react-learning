import { Input, Button } from 'antd';
import React, { useRef } from 'react';
import CodeBlock from '../../components/CodeBlock';

const UseRefDemo = () => {
  const inputDom = useRef(null)
  // 访问DOM
  const handleClick = () => {
    (inputDom?.current as any).focus()
  }

  const introMarkDown = `
  # 访问DOM
  \`\`\`tsx
  const inputDom = useRef(null)

  const ChildDemo = React.forwardRef((props, ref: any) => {
    return <Input placeholder="子组件的Input" ref={ref} />
  })

  const UseRefDemo = () => {
    const inputDom = useRef(null)
    const handleClick = () => {
      (inputDom?.current as any).focus()
    }
   
    return (<>
      <Input placeholder="Basic usage" ref={inputDom} />
      <Button onClick={handleClick} type="primary">toFocus</Button>
    </>)
  }
  \`\`\`

  # 访问子组件
  \`\`\`tsx
  const inputDom = useRef(null)

  const UseRefDemo = () => {
    const inputDom = useRef(null)
    const handleClick = () => {
      (inputDom?.current as any).focus()
    }
    return (<>
      <ChildDemo ref={inputDom} />
      <Button onClick={handleClick} type="primary">toFocus</Button>
    </>)
  }
  `
  return (<>
    <ChildDemo ref={inputDom} />
    <Button onClick={handleClick} type="primary">toFocus</Button>
    <CodeBlock markdown={introMarkDown} />

  </>)
}

const ChildDemo = React.forwardRef((props, ref: any) => {
  return <Input placeholder="子组件的Input" ref={ref} />
})

export default UseRefDemo