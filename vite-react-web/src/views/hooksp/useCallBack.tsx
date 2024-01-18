import React, { useCallback, useState } from "react"
import CodeBlock from "../../components/CodeBlock";
const UseCallBackDemo = () => {
  console.log('父组件Render');
  const [count, setCount] = useState(0)
  const getList = useCallback((value: number): ListType[] => {
    return Array.from({ length: value }, (_, i) => i).map(item => {
      return {
        id: item,
        name: `name${item}`
      }
    })
  }, [])
  return <>
    {count}
    <button onClick={() => setCount(count + 1)}>+1</button>
    <GeneralArray getList={getList} />
    <CodeBlock markdown={introMarkdown} />
  </>
}

interface ListType {
  id: number,
  name: string
}

const GeneralArray = React.memo(({ getList }: { getList: (value: number) => ListType[] }) => {
  console.log('子组件Render');
  return <ul>
    {getList(10).map(item =>
      <li key={item.id}>{item.name}</li>
    )}
  </ul>
})

const introMarkdown = `
# \`useCallBack\` 可以缓存一个函数，当依赖没有改变的时候，会一直返回同一个引用
# 如果子组件接受了一个方法作为属性，我们在使用 React.memo 这种避免子组件做没必要的渲染时候，就需要用 useCallback 进行配合，否则 React.memo 将无意义。

\`\`\`typescript
const UseCallBackDemo = () => {
  console.log('父组件Render');
  const [count, setCount] = useState(0)
  const getList = useCallback((value: number): ListType[] => {
    return Array.from({ length: value }, (_, i) => i).map(item => {
      return {
        id: item,
        name: \`name\$\{item\}\`
      }
    })
  }, [])
  return <>
    {count}
    <button onClick={() => setCount(count + 1)}>+1</button>
    <GeneralArray getList={getList} />
    <CodeBlock markdown={introMarkdown} />
  </>
}

interface ListType {
  id: number,
  name: string
}

const GeneralArray = React.memo(({ getList }: { getList: (value: number) => ListType[] }) => {
  console.log('子组件Render');
  return <ul>
    {getList(10).map(item =>
      <li key={item.id}>{item.name}</li>
    )}
  </ul>
})
\`\`\`

`

export default UseCallBackDemo;