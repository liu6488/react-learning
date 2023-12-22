import { login } from '../../api/login';
import { userActionTypes } from './actionTypes';
// 用户登录  【存roles、token】
export const Login = (username: string, password: string) => {
  // return async (dispatch: any) => {
  //   const res = await login({ username, password });
  //   // console.log('userActions', res);
  //   if (res.code === 200) {
  //     // 设置用户信息
  //     dispatch(setUserInfo(res.data));
  //     dispatch(setToken(res.data.token));
  //     return true
  //   }else{
  //     return false
  //   }
  // };
  return (dispatch:any) => {
    dispatch(setUserInfo({
      username:"admin",
      roles:['admin']
    }));
    dispatch(setToken('token-rsaxxxx'));
  }
};

// 用户注销
export const Layout = () => {
  console.log('action-layout');
  return (dispatch: any) => {
    dispatch(cleanUserInfo())
    dispatch(cleanToken())
  }
};

// 设置用户信息
export const setUserInfo = (userInfo: any) => {
  return {
    type: userActionTypes.SET_USER_INFO,
    userInfo,
  };
};

// 清除用户信息 
export const cleanUserInfo = () => {
  return {
    type: userActionTypes.CLEAN_USER_INFO,
  }
}
// 清除token
export const cleanToken = () => {
  return {
    type: userActionTypes.CLEAN_TOKEN,
  };
};

// 设置token
export const setToken = (token: string) => {
  return {
    type: userActionTypes.SET_TOKEN,
    token,
  };
};

