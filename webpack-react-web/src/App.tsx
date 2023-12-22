import { menuRouter, Router } from './router/router';
import { useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import './style/App.css';
import { Layout, Menu } from 'antd';
import { useState, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { HeaderContent } from './layout/headerContent';
const { SubMenu } = Menu;

export default function App() {
  const isLogin: boolean =
    useSelector((state: any) => state.userState.isLogin) ||
    (window.localStorage.getItem('token') !== 'undefined' && 
    window.localStorage.getItem('token') !== '');
  // console.log(isLogin, window.localStorage.getItem('token') !== '');
  const roles: string = useSelector((state:any)=>state.userState.roles) || window.localStorage.getItem('roles')
  console.log('当前角色',roles);
  

  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();

  const handleGoPath = (navItem) => {
    navigate(navItem);
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const generMenu = (router: Array<any>) => {
    const result = router.map((item, index) => {
      if (item.children && item.children.length > 0) {
        if (item.children.children && item.children.children.length > 0 ) {
          return (
            <Menu mode="inline">{generMenu(item.children) as ReactNode}</Menu>
          );
        } else {
          console.log('路由里带角色',item.roles,item.path);
          
          return (
            <SubMenu key={item.path} title={item.title} icon={item.icon}>
              {generMenu(item.children) as ReactNode}
            </SubMenu>
          );
        }
      } else {
        if(item.roles){
          if(item.roles.includes(roles)){
            return (
              <Menu.Item
                key={item.path}
                icon={item.icon}
                onClick={() => {
                  handleGoPath(item.path);
                }}
              >
                {item.title}
              </Menu.Item>
            );
          }
          
        }else{
          return (
            <Menu.Item
              key={item.path}
              icon={item.icon}
              onClick={() => {
                handleGoPath(item.path);
              }}
            >
              {item.title}
            </Menu.Item>
          );
        }
        
      }
    });
    return result;
  };
  if (isLogin) {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">LOGO</div>
          <Menu theme="dark" mode="inline">
            {generMenu(menuRouter) as ReactNode}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <HeaderContent collapsed={collapsed} click={toggle}></HeaderContent>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    );
  } else {
    return <Login></Login>;
  }
}
