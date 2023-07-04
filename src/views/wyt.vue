<script setup>
import {ref} from 'vue'

import { storeToRefs } from 'pinia'
// import useUserStore from '../stores/user'
import { useCounterStore } from '../stores/module/counter'

import { useMouse } from '../composables/mouse'

import testComponent from '../components/testComponent.vue';

// pinia
const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)

const incr = counterStore.increment

// 鼠标位置
const point = useMouse()

// 子组件字体大小
const postFontSize = ref(1)

//修改postFontSize的方法
function changeFontSize() {
  debugger
  postFontSize.value += 1
  console.log("postFontSize = ", postFontSize.value)
}

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

    <hr>

    <!-- <testComponent title="测试组件" :postFontSize="postFontSize" @changeFontSize="postFontSize += 0.1"/> -->
    <testComponent title="测试组件" :postFontSize="postFontSize" @changeFontSize="changeFontSize"/>

  </div>
</template>