import { createPinia } from 'pinia'

// 持久化插件
// import piniaPluginPersist from 'pinia-plugin-persist'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 使用持久化插件
// pinia.use(piniaPluginPersist)
pinia.use(piniaPluginPersistedstate)

export { pinia }