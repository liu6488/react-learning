import { lazy } from 'react'
import { useSelector } from 'react-redux'
import {
  AppstoreOutlined,
  BarChartOutlined
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  // PieChartOutlined,
  // DesktopOutlined,
  // ContainerOutlined,
  // MailOutlined,
} from '@ant-design/icons';

// 动态路由
export const permissionRouterList: Array<any> = [
  {
    path: '/',
    component: lazy(() => import('../views/dashboard/index')),
    title: '首页',
    roles: ['teacher','admin'],
    icon: <BarChartOutlined />,
    isMenuItem: true,
    // children: [
    //   {
    //     path: '/main/index',
    //     title: '首页',
    //     roles: ['teacher'],
    //     component: lazy(() => import('../views/dashboard/index'))
    //   }
    // ]
  },
  {
    path: '/menu',
    component: lazy(() => import('../views/menu/menu-1/index')),
    title: '路由嵌套',
    roles: ['teacher', 'admin'],
    icon: <AppstoreOutlined />,
    isMenuItem: true,
    children: [
      {
        path: '/menu/menu-1',
        component: lazy(() => import('../views/menu/menu-1/index')),
        title: 'menu-1',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
        children: [
          {
            path: '/menu/menu-1/menu-1-3',
            component: lazy(() => import('../views/menu/menu-1/menu-1-3')),
            title: 'menu-1-3',
            roles: ['admin', 'teacher'],
            isMenuItem: false
          },
          {
            path: '/menu/menu-1/menu-1-4',
            component: lazy(() => import('../views/menu/menu-1/menu-1-4')),
            title: 'menu-1-4',
            roles: ['teacher', 'admin'],
            isMenuItem: true
          }
        ]
      },
      {
        path: '/menu/menu-2',
        component: lazy(() => import('../views/menu/menu-2/index')),
        title: 'menu-2',
        roles: ['admin'],
        isMenuItem: true
      }
    ]
  },
  {
    path: '/hooks',
    component: lazy(() => import('../views/hooksp/index')),
    title: '钩子函数',
    roles: ['teacher', 'admin'],
    icon: <AppstoreOutlined />,
    isMenuItem: true,
    children: [
      {
        path: '/hooks/useState',
        component: lazy(() => import('../views/hooksp/useState')),
        title: 'useState',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
      },
      {
        path: '/hooks/useEffect',
        component: lazy(() => import('../views/hooksp/useEffect')),
        title: 'useEffect',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
      },
      {
        path: '/hooks/useContext',
        component: lazy(() => import('../views/hooksp/useContext')),
        title: 'useContext',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
      },
      {
        path: '/hooks/useReducer',
        component: lazy(() => import('../views/hooksp/useReducer')),
        title: 'useReducer',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
      },
      {
        path: '/hooks/useCallBack',
        component: lazy(() => import('../views/hooksp/useCallBack')),
        title: 'useCallBack',
        roles: ['teacher', 'admin'],
        isMenuItem: true,
      }
    ]
  },

]

const PermissionRouter = () => {
  const userStore = useSelector((state: any) => state.userState)

}