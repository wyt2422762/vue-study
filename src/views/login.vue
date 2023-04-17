<script setup>
import { ref, onMounted } from "vue"

import { useUserStore } from '../stores/module/user'

import { useRouter } from "vue-router"

const router = useRouter()

const userStore = useUserStore()

const loginForm = ref({
  account: "309324904@qq.com",
  password: "123456",
})

const rules = ref({
  account: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
})

const loading = ref(false)

//用lf可以获取表单
const lf = ref(null)

onMounted(() => {
})

function load() {
  loading.value = !loading.value
}

// 使用async await 的登录方法
const login = async () => {
  load()

  try {
    await userStore.storeLogin(loginForm.value.account, loginForm.value.password)
    debugger
    router.push('/')
  } catch (error) {
  }

  load()
}

// 使用promise的登录方法
const login_promise = () => {
  load()

  userStore.storeLogin(loginForm.value.account, loginForm.value.password)
    .then(() => {
      router.push('/')
    }).finally(() => {
      load()
    })
}
</script>

<template>
  <div class="login">
    <el-form ref="lf" :model="loginForm" :rules="rules" status-icon class="login-form">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="account">
        <el-input autofocus v-model="loginForm.account" type="text" auto-complete="off" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button :loading="loading" size="default" type="primary" style="width: 100%" @click="login">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © wyt</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background-image: url("../assets/images/login-background.jpg"); */
  background-size: cover;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
}

.login-form .el-input {
  height: 38px;
}

.login-form .el-input input {
  height: 38px;
}

.login-form .input-icon {
  height: 39px;
  width: 14px;
  margin-left: 2px;
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;
}

.login-code img {
  cursor: pointer;
  vertical-align: middle;
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

.login-code-img {
  height: 38px;
}
</style>
