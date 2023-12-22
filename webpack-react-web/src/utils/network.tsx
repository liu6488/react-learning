import axios from 'axios';

const service = axios.create({
  baseURL: 'http://127.0.0.1:8011',
  // baseURL: 'http://101.35.48.132:8011',
  timeout: 5000,
});

// 请求拦截

// 响应拦截
service.interceptors.response.use(
  response=>{
    return response.data
  }
)
export default service;
