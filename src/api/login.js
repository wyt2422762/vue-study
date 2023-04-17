import { request } from '@/utils/request'

export function login(account, password) {
  const data = {
    "account": account,
    "password": password
  }
  
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })

}