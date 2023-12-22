import { Content } from ".."
import { RouterDom } from '../../router/index'
import React from 'react'
// Layout的主题内容部分
export default function ContentDemo(props: any) {

  const userInfo = {
    name: "admin", role: 'admin'
  }
  const UserInfo = React.createContext(userInfo)

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <UserInfo.Provider value={userInfo}>
        {RouterDom}
      </UserInfo.Provider>
    </Content>
  )
}
