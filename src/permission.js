// 路由验证
/**
 * 权限校验：
 *  Vue Router中的 前置钩子函数 beforeEach(to, from, next)
 * 当进行路由跳转之前，进行判断 是否已经登录 过，登录过则允许访问非登录页面，否则 回到登录页
 *
 * to:  即将要进入的目标路由对象
 * from: 即将要离开的路由对象
 * next: 是一个方法，可以指定路由地址，进行路由跳转
 */
import router from './router'
import { getCookie } from '@/util/util.js'
// 获取token
console.log(getCookie('AccessToken'), 'token')
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) { // 哪些需要验证
    if (getCookie('AccessToken')) {
      next()// token存在条件
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
