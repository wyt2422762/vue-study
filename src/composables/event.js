// event.js 组合式函数

import { onMounted, onUnmounted } from "vue"

export function userEventListener(target, event, callback) {
  onMounted(() => {
    target.addEventListener(event, callback)
  })

  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}