import { createApp } from 'vue'
import { pinia } from './stores/index'

import { router } from './router/index'

import App from './App.vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

const app = createApp(App)
// 使用pinia
app.use(pinia)
// 使用vue-router
app.use(router)
// 使用element-plus
app.use(ElementPlus)

app.mount('#app')
