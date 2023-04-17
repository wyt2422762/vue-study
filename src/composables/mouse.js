//mouse.js 组合式函数
import { onMounted, onUnmounted, ref } from 'vue'

import { userEventListener } from './event'

export function useMouse() {
  // 鼠标坐标响应式坐标
  const point = ref({
    x: 0,
    y: 0
  })

  // 更改鼠标坐标
  function updatePoint(e) {
    point.value.x = e.pageX
    point.value.y = e.pageY
  }

  // onMounted(() => {
  //   window.addEventListener('mousemove', updatePoint)
  // })

  // onUnmounted(() => {
  //   window.removeEventListener('mousemove', updatePoint)
  // })

  // 调用另一个组合式函数
  userEventListener(window, 'mousemove', updatePoint)

  return point
}