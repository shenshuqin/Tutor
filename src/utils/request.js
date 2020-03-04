import axios from 'axios';
import Router from 'vue-router'
import router from '../router/index.js';
import {getCookie,setCookie,delCookie } from "@/util/util.js";
window.isRefreshing = false;
//在js中引用路由会报错,需要引入下面代码
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


//存储请求数组;
let refreshSubscribers = [];
//将所有请求都push到数组
function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
}
// console.log(refreshSubscribers);
// 数组中的请求得到新的token之后自执行，用新的token去请求数据
function onRrefreshed(token) {
    refreshSubscribers.map(cb => cb(token));
}
// 判断token是否过期
function isRefreshTokenExpired() {
    let oData = getCookie('time'); // 本地token存储的时间
    let nDta = new Date().getTime();
    let stamp = nDta - oData;
    let minutes = parseInt((stamp % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes,"min")
    return minutes >= 1? true : false;
  }
// 刷新token的请求
function getRefreshToken() {
    let url = "https://dev-ao5dx3e.lonltech.com:646/api/auth/reftoken";
    let data =  { refreshToken: getCookie("RefreshToken7") };
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
         Authorization: "Bearer " + getCookie("AccessToken")
    };
    // console.log("r",getCookie("RefreshToken7"))
    // console.log("t",getCookie("AccessToken"))
    return axios({
        url:url,
        method: "post",
        dataType: "json",
        data:data,
        headers:header
      }).then(res => {
        return Promise.resolve(res.data)
     });
}
// getRefreshToken();

setTimeout(function(){
  // setCookie("AccessToken",res.AccessToken, expiresTime);
},1000)

//手动创建一个axios对象
const request = axios.create({
    baseURL:'/',
    timeout:5000 //请求超时
})
//请求拦截
request.interceptors.request.use(config=>{
    const AccessToken = getCookie('AccessToken');
    const RefreshToken7 =  getCookie("RefreshToken7");
    const RefreshToken30 = getCookie("RefreshToken30");
    /*判断token是否存在*/
    if (AccessToken) {
      config.headers.Authorization = "Bearer "+ AccessToken
      config.headers['Content-Type'] = 'application/json;charset=utf-8'
      // config.url = config.url+'?t='+(new Date()).getTime().toString(); // 清除缓存 f
      /*判断token是否将要过期 */ //刷新token的接口地址
      if (isRefreshTokenExpired() && (config.url.indexOf('auth/reftoken') === -1) ) {
        console.log("一分钟")
        if (!window.isRefreshing) {  // /*判断是否正在刷新*/
          window.isRefreshing = true;
          /*发起刷新token的请求*/
          getRefreshToken().then(res => {
            console.log(res,"999")
            if(res.Succ === 1){
              let ExpireTime = res.ExpireTime;
              let millisecond =new Date().getTime();//将当前时间转换为时间戳
              var expiresTime = new Date(millisecond +  ExpireTime*1000); //1800*1000
              window.isRefreshing = false;
              setCookie("AccessToken",res.AccessToken,expiresTime,{path:"/"}); //重新设置AccessToken
              setCookie('time', new Date().getTime(),{path:"/"}) //获取当前时间
              setCookie("RefreshToken7", res.RefreshToken,'d7',{path:"/"}); //重新设置refreshToken
              config.headers.Authorization = "Bearer "+res.AccessToken
              onRrefreshed(res.AccessToken);
              refreshSubscribers = []
            }

          }).catch(err => {
            router.push({
              path: '/login',
              query: {
                redirect:location.hostname//登录之后跳转到对应页面
              }
            });
            // return Promise.reject(err)
            // delCookie('AccessToken');
            // window.location.href = '/login'
          });
          let retry = new Promise((resolve, reject) => {
             /*(token) => {...}这个函数就是cb*/
            subscribeTokenRefresh((AccessToken) => {
              config.headers.Authorization = "Bearer "+ AccessToken
              console.log(config,"uuuuuuu")
              // 将请求挂载
              resolve(config)
            })
          });
          return retry
        }
        return config
      }else if((RefreshToken7 == '' || RefreshToken30 == '')){
        window.location.href = '/login'
      } else {
        return config
      }
    }else{
      // window.location.href = '/login'
      // window.history.back(-1);
      // console.log(location.hostname)
      router.push({
        path: '/login',
        query: {
          redirect:location.hostname//登录之后跳转到对应页面
        }
      });
      return config
    }
})

export default request;