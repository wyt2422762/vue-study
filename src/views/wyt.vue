<script setup>
import { storeToRefs } from 'pinia'
// import useUserStore from '../stores/user'
import { useCounterStore } from '../stores/module/counter'

import { useMouse } from '../composables/mouse'

// pinia
const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)

const incr = counterStore.increment


// 鼠标位置
const point = useMouse()

</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>

    <button @click="incr">increment</button>

    <div>鼠标位置, X: {{ point.x }}, Y: {{ point.y }}</div>

    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/wyt">wyt</router-link>
    </div>
  </div>
</template>