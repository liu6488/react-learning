import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons'; //图标引入
import classNames from 'classnames';
import styles from '../style/App.css';
import { Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { layout, setToken } from '../store/actions/userActions';
const classnames = classNames.bind(styles);

export function HeaderContent(props) {
  const dispath = useDispatch();
  const toLayout = () => {
    dispath(layout());
    dispath(setToken(''));
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={toLayout}>
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      {props.collapsed ? (
        <MenuUnfoldOutlined
          className={classnames('trigger', 'icon-base')}
          onClick={props.click}
        />
      ) : (
        <MenuFoldOutlined
          className={classnames('trigger', 'icon-base')}
          onClick={props.click}
        />
      )}
      <Dropdown overlay={menu} arrow>
        <UserOutlined className={classnames('avatar', 'icon-base')} />
      </Dropdown>
    </>
  );
}
