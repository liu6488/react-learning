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


//  1. 使用React.createContext()  创建数据
//  2. 使用数据创建组件 <UserInfo.Provider value={userInfo}>