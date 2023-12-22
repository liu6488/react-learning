// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// // import reducer from './reducer'

// const store = createStore(reducer, compose(
//     applyMiddleware(thunk)
// ))

// export default store

// import { combineReducers } from 'redux';
// import loginStatus from './reducer';
// export default combineReducers({
//   loginStatus,
// });

// 2022-03-18
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from './reducers/userReducer';
import { createStore, applyMiddleware } from 'redux';
// import { compose } from 'redux';

// 打印日志的函数
const loggerMiddleware = createLogger();
const store = createStore(
  userReducer,
  // compose(
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
  // )
);
export default store;
