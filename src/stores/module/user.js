import { ref, computed } from "vue"
import { defineStore } from "pinia"

import { login } from '../../api/login'

export const useUserStore = defineStore("user", () => {
  const user = ref(null)

  function setUser(data) {
    user.value = data
  }

  function isLogin() {
    return user.value !== null && user.value.token !== null
  }

  async function storeLogin(account, password) {
    let isErr = false
    let msg = ''

    try {
      let data = await login(account, password)
      msg = data.message
      setUser(data.result)
    } catch (err) {
      isErr = true
      msg = err
      console.log('返回的错误信息: ', err)
    }

    //返回一个Promise
    return new Promise((resolve, reject) => {
      if (!isErr) {
        resolve(msg)
      } else {
        reject(msg)
      }
    })
  }

  function storeLogout() {
    //后台请求这里先不写
    setUser(null)
    return
  }

  return { user, isLogin, storeLogin, storeLogout }
}, {
  persist: {
    storage: sessionStorage,
  },
}
)
