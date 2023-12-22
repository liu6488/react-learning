import { login } from '../../api/login';
import { userActionTypes } from './actionTypes';

// 用户登录  【存roles、token】
export const Login = (username: string, password: string) => {
  return async (dispatch) => {
    const res = await login({ username, password });
    // console.log('userActions', res);
    if (res.code === 200) {
      // 设置用户信息
      dispatch(setUserInfo(res.data));
      dispatch(setToken(res.data.token));
    }
  };
};

// 设置用户信息
export const setUserInfo = (userInfo: any) => {
  console.log('setUserInfo');
  return {
    type: userActionTypes.SET_USER_INFO,
    userInfo,
  };
};

// 退出登录  清除登录状态
export const layout = () => {
  return {
    type: userActionTypes.CHANGE_LOGIN_STATUS,
    isLogin: false,
  };
};

export const setToken = (token: string) => {
  return {
    type: userActionTypes.SET_TOKEN,
    token,
  };
};

// 用户注销 【清除token】
