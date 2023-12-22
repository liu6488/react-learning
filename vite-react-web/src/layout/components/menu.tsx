import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';
import { filteredRouter } from '../../router/index'
import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { changeRouterType } from '../../store/actions/routerActions';
const { SubMenu } = Menu;


// 生成菜单项
const generateMenu = (router: Array<any>): ReactNode | any => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGoPath = (navItem: any) => {
    console.log('路由跳转', navItem);
    dispatch(changeRouterType(navItem))
    navigate(navItem.path);
  };

  return (
    <>
      {
        router.map((item, index) => {
          if (item.children) {
            return (
              <SubMenu key={item.path} icon={item.icon} title={item.title}>
                {generateMenu(item.children)}
              </SubMenu>
            )
          } else {
            if (item.isMenuItem) {
              return (
                <Menu.Item key={item.path} icon={item.icon} onClick={() => { handleGoPath(item) }}>
                  {item.title}
                </Menu.Item>
              )
            }
          }
        })
      }
    </>
  )
}


export default function MenuDemo(props: any) {
  // console.log('生成的菜单项', generateMenu(filteredRouter));
  return (
    <Menu theme="dark" mode="inline"  >
      {generateMenu(filteredRouter)}
    </Menu >
  )
}