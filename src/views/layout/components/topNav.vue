<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/module/user'

import { storeToRefs } from "pinia"

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

function logout() {
  userStore.storeLogout()
  router.push('/login')
}

const breadNavList = ref([])

// 获取面包屑导航的路由数据
function getBreadNavList() {
  // 获取匹配到的路由
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  breadNavList.value = matched
}

onBeforeMount(() => {
  getBreadNavList()
})

watch(route, (to, from) => {
  getBreadNavList()
})

</script>

<template>
  <div class="top-nav">

    <!-- <div style="padding: 0 15px;">
      <svg :class="{ 'is-active': isActive }" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
        width="64" height="64">
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div> -->

    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadNavList" :key="item.path">
        <span v-if="item.children.length > 0 || index == breadNavList.length - 1" class="no-redirect">{{
          item.meta.title }}</span>
        <a v-else>{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 右侧菜单 -->
    <div class="right-menu">
      <span v-if="user">{{ user.account }}</span>
      <el-button size="default" type="primary" @click="logout">
        <span>退 出</span>
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.el-breadcrumb {
  float: left;
  line-height: 50px;
  height: 100%;
}

.right-menu {
  float: right;
}

.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>