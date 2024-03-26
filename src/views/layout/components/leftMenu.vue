<script setup>
import { HomeFilled, Briefcase, Link } from '@element-plus/icons-vue'

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentRouter = router.currentRoute.value.path || route.path
</script>

<template>
  <div>
    <el-scrollbar>
      <el-menu :default-active="currentRouter" router>
        <el-menu-item index="/index">
          <el-icon>
            <HomeFilled />
          </el-icon>
          <span>首 页</span>
        </el-menu-item>
        <el-menu-item index="/wyt">
          <el-icon>
            <Briefcase />
          </el-icon>
          <span>wyt</span>
        </el-menu-item>

        <el-menu-item index="/system">
          <el-icon>
            <Briefcase />
          </el-icon>
          <span>system</span>
        </el-menu-item>

        <!-- 子菜单 -->
        <el-sub-menu index="/system">
          <template #title>
            <el-icon>
              <Briefcase />
            </el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/system/wyt1">
            <el-icon>
              <Briefcase />
            </el-icon>
            <span>wyt1</span>
          </el-menu-item>
        </el-sub-menu>

        <!-- 外部链接 -->
        <a href="https://www.baidu.com" target="_blank">
          <el-menu-item>
            <el-icon>
              <Link />
            </el-icon>
            <span>百度</span>
          </el-menu-item>
        </a>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.el-menu a {
  text-decoration: none;
}


</style>