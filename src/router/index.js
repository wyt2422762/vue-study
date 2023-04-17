import { createRouter, createWebHashHistory } from 'vue-router'

import { storeToRefs } from 'pinia'

// import home from '@/views/home.vue'
// import wyt from '@/views/wyt.vue'
// import login from '@/views/login.vue'

import layout from '@/views/layout/index.vue'

import { useUserStore } from '../stores/module/user.js'

/**
 * Note: 路由配置项
 * name: 路由名称
 * path: 路由路径
 * component: 组件
 * redirect：重定向
 * meta : {
    title   // 设置该路由在侧边栏和面包屑中展示的名字
    auth // 是否需要登录验证默认false
  }
 */
const routes = [
  {
    path: '/login',
    name: '/login',
    meta: { title: '登录页' },
    component: () => import('@/views/login.vue'),
    // component: login
  },
  {
    path: '',
    name: 'layout',
    redirect: 'index',
    meta: {},
    component: layout,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { title: '首页', auth: true },
        component: () => import('@/views/home.vue'),
        // component: home
      },
      {
        path: 'wyt',
        name: 'wyt',
        meta: { title: 'wyt', auth: true },
        component: () => import('@/views/wyt.vue'),
        // component: wyt
      },

      {
        path: 'system',
        name: 'system',
        meta: { title: '系统管理' },
        children: [
          {
            path: 'wyt1',
            name: 'wyt1',
            meta: { title: 'wyt1', auth: true },
            component: () => import('@/views/wyt.vue'),
            // component: wyt
          },
        ]
      }

    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  // routes: routes,
  routes, // `routes: routes` 的缩写
})

// 路由守卫

// 前置守卫
// to 要前往的路由
// from 当前的路由
// 可以返回的值如下:
// false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么URL地址会重置
// 到 from 路由对应的地址。
// 一个路由地址: 通过一个路由地址跳转到一个不同的地址，就像你调用 router.push() 一样，你可以设置诸如
// replace: true 或 name: 'home' 之类的配置。
// 当前的导航被中断，然后进行一个新的导航，就和 from 一样。
router.beforeEach((to, from) => {
  // pinia
  const userStroe = useUserStore()
  const { user } = storeToRefs(userStroe)
  const isLogin = userStroe.isLogin

  if (to.meta.auth && !isLogin()) {
    console.log('需要登录')
    return '/login'
  }
  if (to.path === '/login') {
    if (isLogin()) {
      console.log('用户已登录')
      return '/'
    }
  }
  // console.log('不需要验证')
  return true
})

// 后置守卫
// 和前置守卫不同的是，不会改变导航本身，但对于分析、更改页面标题、声明页面等辅助功能以及许多其他
// 事情都很有用。
router.afterEach((to, from) => {
  // 修改title
  if (to.meta.title) {
    // console.log('修改title')
    document.title = to.meta.title
  }
})

export { router }
