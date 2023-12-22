import { lazy } from 'react'
// 静态路由表
export const constantRouterList: Array<any> = [

  {
    path: '/login',
    component: lazy(() => import('../views/login/login')),
    title: 'login',
    isMenuItem: false
  }

]