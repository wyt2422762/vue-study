import axios from 'axios'

import { HttpStatus, HttpStatusCodeMsg } from '../enum/httpStatus'

import { ElMessage } from 'element-plus'

// 设置默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  // 基础链接
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // 超时时间
  timeout: import.meta.env.VITE_TIMEOUT,
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(res => {
  // 2xx 范围内的状态码都会触发该函数。

  debugger
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200
  const msg = res.data.message || 'error'

  if (code !== 200) {
    console.log('请求返回失败: ', msg)

    ElMessage.error(msg)

    return Promise.reject(msg)
  }

  return res.data
}, err => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  console.log('请求返回失败: ' + err)

  const code = err.response.data.code || err.response.status || 500
  const msg = err.response.data.message || HttpStatusCodeMsg[code]

  ElMessage.error(msg)

  return Promise.reject(err)
})


//暂时先放着，无用
function requestAll(...request) {
  return axios.all(request)
}


export { request }

