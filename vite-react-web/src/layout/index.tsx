import { Layout } from 'antd'
import Logo from './components/logo'
import MenuDemo from './components/menu'
import HeaderDemo from './components/header'
import ContentDemo from './components/content'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { filteredRouter } from '../router/index'

import './style.scss'
export const { Header, Sider, Content } = Layout

export default function LayoutComponent(props: any) {
  // 路由生成[先进行路由的筛选]
  console.log('layout-已经筛选过的路由', filteredRouter)

  // 判断是否登录
  const [collapsed, setCollapsed] = useState(false)
  function toToggle() {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <MenuDemo />
      </Sider>
      <Layout className="site-layout">
        <HeaderDemo collapsed={collapsed} toggle={toToggle} />
        <ContentDemo >
          <Outlet></Outlet>
        </ContentDemo>
      </Layout>
    </Layout>
  )
}
