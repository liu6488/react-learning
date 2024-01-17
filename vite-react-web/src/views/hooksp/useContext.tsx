import React, { useContext } from "react";
import { UserInfo, userInfo } from '../../utils/context'
import CodeBlock from "../../components/CodeBlock";

const UseContextDemo: React.FC = () => {

  return (<>
    <UserInfo.Provider value={userInfo}>
      <ChildDemo></ChildDemo>
    </UserInfo.Provider>
    <CodeBlock markdown={introMarkdown} />

  </>)
}

// 子组件
const ChildDemo: React.FC = () => {
  return (<SonDemo></SonDemo>)
}

// 孙级组件
const SonDemo: React.FC = () => {
  const c_userInfo = useContext(UserInfo)
  return (
    <>{c_userInfo.name}</>
  )
}

export default UseContextDemo;


const introMarkdown = `
# 创建context
\`\`\`js
// context
import React from "react"
export const userInfo = {
  name: "admin", role: 'admin'
}
export const UserInfo = React.createContext(userInfo)
\`\`\`
#  使用
\`\`\`js
import React, { useContext } from "react";
import { UserInfo, userInfo } from '../../utils/context'
const UseContextDemo: React.FC = () => {

  return (<>
    <UserInfo.Provider value={userInfo}>
      <ChildDemo></ChildDemo>
    </UserInfo.Provider>
  </>)
}

// 子组件
const ChildDemo: React.FC = () => {
  return (<SonDemo></SonDemo>)
}

// 孙级组件
const SonDemo: React.FC = () => {
  const c_userInfo = useContext(UserInfo)
  return (
    <>{c_userInfo.name}</>
  )
}

export default UseContextDemo;
\`\`\`

`