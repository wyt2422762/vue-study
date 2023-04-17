<script setup>
import { ref } from 'vue';

import logo from '@/assets/logo/logo.png'

const title = ref('管理系统')
</script>

<template>
  <div class="left-logo-container">
    <router-link to="/">
      <img :src="logo" class="left-logo" />
      <h1 class="left-logo-title">{{ title }} </h1>
    </router-link>
  </div>
</template>

<style scoped>
.left-logo-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
}

.left-logo-container .left-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}

.left-logo-container .left-logo-title {
  display: inline-block;
  margin: 0;
  font-weight: 600;
  line-height: 50px;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}
</style>