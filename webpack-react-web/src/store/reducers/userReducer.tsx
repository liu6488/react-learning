// 初始化 user模块 state 数据类型

import { combineReducers } from 'redux';

import { userActionTypes } from '../actions/actionTypes';
const initState = {
  isLogin: false, // 是否登录
  roles: '', // 角色
  token: '', // token
  username: '', // 用户名
};

// 用户登录 存储用户基本信息
export const userState = (state = initState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_INFO:
      window.localStorage.setItem('roles', action.userInfo.roles);
      window.localStorage.setItem('username', action.userInfo.username);
      return {
        ...state,
        isLogin: true,
        roles: action.userInfo.roles,
        username: action.userInfo.username,
      };
    case userActionTypes.SET_TOKEN:
      window.localStorage.setItem('token', action.token);
      return {
        ...state,
        token: action.token,
      };
    case userActionTypes.CHANGE_LOGIN_STATUS:
      console.log('修改登录状态');
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
};

const userReducers = combineReducers({ userState });
export default userReducers;
