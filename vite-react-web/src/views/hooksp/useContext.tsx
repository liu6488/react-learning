import React, { useContext } from "react";
import { UserInfo, userInfo } from '../../utils/context'
const UseContextDemo: React.FC = () => {

  return (<>
    <UserInfo.Provider value={userInfo}>
      <ChildDemo></ChildDemo>
    </UserInfo.Provider>
  </>)
}

const ChildDemo: React.FC = () => {
  return (<SonDemo></SonDemo>)
}

const SonDemo: React.FC = () => {
  const c_userInfo = useContext(UserInfo)
  return (
    <>{c_userInfo.name}</>
  )
}

export default UseContextDemo;  