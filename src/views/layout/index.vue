<script setup>

import leftMenu from './components/leftMenu.vue'
import topNav from './components/topNav.vue'

import logo from './components/logo.vue'
</script>

<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <logo></logo>
      <leftMenu></leftMenu>
    </el-aside>

    <el-container>
      <el-header>
        <!-- 头部导航 -->
        <top-nav></top-nav>

      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 50px;
  height: 50px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>
