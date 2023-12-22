// 路由相关的store
import { combineReducers } from 'redux'
import { routerActionTypes } from '../actions/actionTypes'
const initRouterState = {
  currentPath: '/', // 当前路径
  isMenuItem: true // 当前路径是否是MenuItem
}

export const routerState = (state = initRouterState, action: any) => {
  
  switch (action.type) {
    case routerActionTypes.CHANGE_ROUTE_TYPE:
      console.log('CHANGE_ROUTE_TYPE',action);
      // 修改路径类型
      return {
        ...state,
        currentPath: action.path.path,
        isMenuItem: action.path.isMenuItem,
        component:action.path.component
      }
    default:
      return state
  }
}

export default routerState
// const routerReducers = combineReducers({ routerState });
// export default routerReducers