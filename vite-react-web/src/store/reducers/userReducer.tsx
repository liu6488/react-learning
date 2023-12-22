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
export const userState = (state = initState, action: any) => {
  switch (action.type) {
    // 设置用户信息
    case userActionTypes.SET_USER_INFO:
      window.localStorage.setItem('roles', action.userInfo.roles);
      window.localStorage.setItem('username', action.userInfo.username);
      return {
        ...state,
        isLogin: true,
        roles: action.userInfo.roles,
        username: action.userInfo.username,
      };
    case userActionTypes.CLEAN_USER_INFO:
      console.log('Reducer-CLEAN_USER_INFO');
      // 清除用户信息
      window.localStorage.removeItem('roles')
      window.localStorage.removeItem('username')
      return {
        ...state,
        isLogin: false,
        roles: undefined,
        username: undefined,
      }
    case userActionTypes.SET_TOKEN:
      // 设置Token
      window.localStorage.setItem('token', action.token);
      return {
        ...state,
        token: action.token,
      };
    case userActionTypes.CLEAN_TOKEN:
      // 清除toekn
      window.localStorage.removeItem('token')
      return {
        ...state,
        token: undefined
      }
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

export default userState
// const userReducers = combineReducers({ userState });
// export default userReducers;
