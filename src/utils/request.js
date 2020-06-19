import axios from 'axios'
import Router from 'vue-router'
import router from '../router/index.js'
import { getCookie, setCookie, delCookie } from '@/util/util.js'
window.isRefreshing = false
// 在js中引用路由会报错,需要引入下面代码
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 存储请求数组;
let refreshSubscribers = []
// 将所有请求都push到数组
function subscribeTokenRefresh (cb) {
  refreshSubscribers.push(cb)
}
// console.log(refreshSubscribers);
// 数组中的请求得到新的token之后自执行，用新的token去请求数据
function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}
// 判断token是否过期
function isRefreshTokenExpired () {
  let oData = getCookie('time') // 本地token存储的时间
  let nDta = new Date().getTime()// 获取现在请求的时间
  let stamp = nDta - oData// 时间差
  // console.log(oData,nDta,stamp)
  let minutes = parseInt((stamp % (1000 * 60 * 60)) / (1000 * 60)) // 将毫秒转化为分钟
  console.log(minutes, 'minutes')
  return minutes > 20
}
// 刷新token的请求
function getRefreshToken () {
  let url = 'https://dev-ao5dx3e.lonltech.com:646/api/auth/reftoken'
  let data = { refreshToken: getCookie('RefreshToken7') }
  // console.log(data)
  let header = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getCookie('AccessToken')
  }
  // console.log(header)
  return axios({
    url: url,
    method: 'post',
    dataType: 'json',
    data: data,
    headers: header
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// getRefreshToken();

// 手动创建一个axios对象
const request = axios.create({
  baseURL: '/',
  timeout: 5000 // 请求超时
})
// 请求拦截
request.interceptors.request.use(config => {
  const AccessToken = getCookie('AccessToken')
  const RefreshToken7 = getCookie('RefreshToken7')
  const RefreshToken30 = getCookie('RefreshToken30')
  /* 判断token是否存在 */
  if (AccessToken) {
    config.headers.Authorization = 'Bearer ' + AccessToken
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    // config.url = config.url+'?t='+(new Date()).getTime().toString(); // 清除缓存 f
    /* 判断token是否将要过期 */ // 刷新token的接口地址
    if (isRefreshTokenExpired() && (config.url.indexOf('auth/reftoken') === -1)) {
      // console.log("即将过期")
      if (!window.isRefreshing) { // /*判断是否正在刷新*/
        window.isRefreshing = true
        /* 发起刷新token的请求 */
        getRefreshToken().then(res => {
          console.log('刷新token', res)
          if (res.Code === 1) {
            console.log('刷新token')
            let ExpireTime = res.Data.ExpireTime
            let millisecond = new Date().getTime()// 将当前时间转换为时间戳
            var expiresTime = new Date(millisecond + ExpireTime * 1000) // 1800*1000
            setCookie('AccessToken', res.Data.AccessToken, expiresTime, { path: '/' }) // 重新设置AccessToken
            setCookie('time', millisecond, { path: '/' }) // 获取当前时间
            setCookie('RefreshToken7', res.Data.RefreshToken, 'd7', { path: '/' }) // 重新设置refreshToken
            config.headers.Authorization = 'Bearer ' + res.Data.AccessToken
            onRrefreshed(res.Data.AccessToken)
            window.isRefreshing = false
            refreshSubscribers = []
          }
        }).catch(err => {
          router.push({
            path: '/login',
            query: {
              redirect: location.hostname// 登录之后跳转到对应页面
            }
          })
        })
        let retry = new Promise((resolve, reject) => {
          // console.log("555")
          /* (token) => {...}这个函数就是cb */
          subscribeTokenRefresh((AccessToken) => {
            config.headers.Authorization = 'Bearer ' + AccessToken
            // console.log(config,"uuuuuuu")
            // 将请求挂载
            resolve(config)
          })
        })
        return retry
      }
      return config
    } else if ((RefreshToken7 == '' || RefreshToken30 == '')) { // 如果存在token,但是七天之内,以及三十天周期过后,必须重新登录
      window.location.href = '/login'
    } else {
      return config
    }
  } else { // 如果没有token
    // router.push({
    //   path: '/login',
    //   query: {
    //     redirect:location.hostname//登录之后跳转到对应页面
    //   }
    // });
    // config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config // 直接返回请求
  }
})

export default request
