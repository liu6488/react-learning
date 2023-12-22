import { routerActionTypes } from "./actionTypes"
export const changeRouterType = (path: any) => {
  return {
    type: routerActionTypes.CHANGE_ROUTE_TYPE,
    path
  }
}