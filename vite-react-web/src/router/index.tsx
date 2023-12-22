import { Suspense, useEffect } from "react";
import { useSelector } from 'react-redux';
import { constantRouterList } from "./constantRouter";
import { permissionRouterList } from "./permissionRouter";
import { useNavigate, useRoutes, Route, Routes } from 'react-router-dom'
import LayoutComponent from "../layout";
import Login from "../views/login/login";
// 权限路由筛选
const routerFileter = (router: Array<any>, roles: string): any => {
  // console.log('路由角色的筛选');
  return router.filter(item => {
    if (item.children) {
      item.children = routerFileter(item.children, roles)
      return item
    } else {
      if (item.roles) {
        // console.log('路由筛选',item.roles,item.path);

        if (item.roles.includes(roles)) {
          return item
        }
      } else {
        return item
      }
    }
  })
}

// 生成路由的函数
const generateRouter = (routers: any) => {
  return routers.map((item: any, index: number) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        <item.component></item.component>
      </Suspense>
    );
    return item;
  });
};
// 已经鉴权的路由，用作侧边菜单栏
let filteredRouter: Array<any>;
let RouterDom: any;
// 创建路由表
const Router = () => {
  // 路由跳转
  const navigate = useNavigate();
  // 获取登录状态和角色
  const { userReducer: userStore, routerReducer: routerStore } = useSelector((state: any) => state)
  let { roles, isLogin } = userStore
  roles = roles || window.localStorage.getItem('roles')
  isLogin = isLogin || window.localStorage.getItem('token') !== null
  if (isLogin) {
    // 路由状态和路由路径
    const { isMenuItem, currentPath } = routerStore
    console.log('路由路径，路由状态', currentPath, isMenuItem);
    filteredRouter = routerFileter(permissionRouterList, roles)
    RouterDom = useRoutes(generateRouter(constantRouterList.concat(filteredRouter)))
    // 对权限路由进行权限鉴定
    console.log('route-筛选过的路由', filteredRouter,);
    if (isMenuItem) {
      return (
        <LayoutComponent />
      )
    }

  } else {
    return <Login />
  }
}

export default Router
export { filteredRouter, RouterDom }