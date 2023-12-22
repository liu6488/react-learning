import React from 'react'
import { Header } from '..'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from 'antd'
import tiger from '@/assets/tiger.png'
import { useDispatch } from 'react-redux'
import { Layout } from '../../store/actions/userActions'


// layout的Header部分
export default function HeaderDemo(props: any) {
  const dispatch = useDispatch()
  const toLayout = () => {
    // 退出登录
    console.log('退出登录');
    dispatch(Layout())
  }

  // 用户头像点击下拉菜单
  const UserMenu = (
    <Menu>
      <Menu.Item onClick={toLayout} key="l1">
        退出
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className="site-layout-background" >
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.toggle
      })}
      <Dropdown className='user' overlay={UserMenu} placement="bottomLeft">
        <img src={tiger} alt="" />
      </Dropdown>
    </Header>
  )
}