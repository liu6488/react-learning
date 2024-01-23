import { lazy } from 'react'
import { useSelector } from 'react-redux'
import {
  AppstoreOutlined,
  BarChartOutlined 
} from '@ant-design/icons';

// 定义一个 HookRouterPathType 类型的变量，用于存储路径和组件的映射关系
type HookRouterPathType = Record<string, () => Promise<{ default: React.ComponentType<any> }>>;

// 一个函数：transformPathsToRoutes，接收一个paths参数，返回一个路由数组
const transformPathsToRoutes = (paths: HookRouterPathType) => {
  const result = [];
  // 遍历paths中的每一个路径
  for (const path in paths) {
    // 如果paths中拥有这个路径
    if (paths.hasOwnProperty(path)) {
      // 从路径中匹配出文件名
      const fileName = path.match(/\/(\w+)\.tsx$/)?.[1];
      // 如果匹配出了文件名
      if (fileName) {
        // 路由的路径是/hooks/文件名
        const routePath = `/hooks/${fileName}`;
        // 路由的组件是lazy导入的../views/hooksp/文件名
        const route = {
          path: routePath,
          component: lazy(() => import(/* @vite-ignore */`../views/hooksp/${fileName}`)),
          title: fileName,
          roles: ['teacher', 'admin'],
          isMenuItem: true,
        };
        // 将路由添加到结果数组中
        result.push(route);
      }
    }
  }
  // 返回路由数组
  return result;
};

// 定义一个 HookRouterPathType 类型的变量，用于存储路径和组件的映射关系
const hooksPath: HookRouterPathType = import.meta.glob('../views/hooksp/use*.tsx')
console.log('modules', hooksPath);
// 定义一个路由，用于存储路径、组件、标题、图标、角色、是否为菜单项、子路由
const hooksRouter = {
  path: '/hooks',
  component: lazy(() => import('../views/hooksp/index')),
  title: '钩子函数',
  roles: ['teacher', 'admin'],
  icon: <AppstoreOutlined />,
  isMenuItem: true,
  // 将路径转换为路由
  children: transformPathsToRoutes(hooksPath)
}



// 导出权限路由列表
export const permissionRouterList: Array<any> = [
  {
    path: '/',
    component: lazy(() => import('../views/dashboard/index')),
    title: '首页',
    roles: ['teacher', 'admin'],
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
  hooksRouter,
]

const PermissionRouter = () => {
  const userStore = useSelector((state: any) => state.userState)
}