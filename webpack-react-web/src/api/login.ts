import request from '../utils/network'
// import { BaseModel } from './types'
export function login(data): any {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}