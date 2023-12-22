import { Suspense, lazy } from "react";
import { useRoutes } from 'react-router-dom';
import { HomeOutlined, SnippetsOutlined, CalendarOutlined, SoundOutlined, OrderedListOutlined } from '@ant-design/icons';


interface RouterMenu {
  path: string;// 路径
  component: any;
  caseSensitive: booble;
  title: string;
  icon: any;
  children: Array<RouterMenu>;
}
// <OrderedListOutlined />
export const menuRouter: Array<RouterMenu> = [

  {
    path: '/',
    component: lazy(() => import('./home')),
    caseSensitive: true,
    title: 'Home',
    roles:['admin'],
    icon: <HomeOutlined />,
  },
  {
    path: '/detail',
    component: lazy(() => import('./detail')),
    caseSensitive: true,
    title: 'Detail',
    roles: ['admin'],
    icon: <SoundOutlined />
  },
  {
    path: '/calendar',
    component: lazy(() => import('../pages/calendar')),
    caseSensitive: true,
    title: 'Calendar',
    roles: ['admin', 'teacher'],
    icon: <CalendarOutlined />
  },
  {
    path: '/defHooks',
    component: lazy(() => import('../Practice/Hooks/defHooks')),
    caseSensitive: true,
    title: 'DefHooks',
    icon: <SnippetsOutlined />
  },
  {
    path: '/menu',
    caseSensitive: true,
    component: lazy(() => import('../pages/menu/menu1/menu1')),
    title: '路由嵌套',
    icon: <OrderedListOutlined />,
    children: [
      {
        path: '/menu/menu1',
        caseSensitive: true,
        title: 'menu1',
        component: lazy(() => import('../pages/menu/menu1/menu1')),
        children: [
          {
            path: '/menu/menu1/menu1-1',
            component: lazy(() => import('../pages/menu/menu1/children/menu1-1')),
            caseSensitive: true,
            title: 'menu1-1',
          },
          {
            path: '/menu/menu1/menu1-2',
            component: lazy(() => import('../pages/menu/menu1/children/menu1-2')),
            caseSensitive: true,
            title: 'menu1-2',
          }
        ]
      },
      {
        path: '/menu/menu2',
        component: lazy(() => import('../pages/menu/menu2/menu2')),
        caseSensitive: true,
        title: 'menu2',
      }
    ]
  },
];


export const staticRouter: Array<RouterMenu> = [
  {
    path: '/login',
    component: lazy(() => import('../pages/login/login')),
    caseSensitive: true,
    title: 'Login',
  },
]

const generateRouter = (routers) => {
  return routers.map((item, index) => {
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

const Router = () => {
  const routerDom = useRoutes(generateRouter(menuRouter).concat(generateRouter(staticRouter)));
  return routerDom
}

export { Router };