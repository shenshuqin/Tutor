<template>
  <div class="bg">
    <div class="alert alert-danger" role="alert" v-show="warn">{{msg_warn}}</div>
    <div class="login-title">
      <p class="login-logo"><img src="../../assets/images/c_logo.png"></p>
      <h2>见证成长 兼职家教平台</h2>
      <div class="phone">
        <img src="../../assets/images/phone.png">
        <p class="phone-text">手机APP下载</p>
        <div class="phone-code">
          <div class=code>
            <img src="../../assets/images/wx.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="login-frame normal-height">
      <div class="login-ow-wrap">
        <div class="head-text">
          <div @click="pass()" class="head-title" :class="[isActive?'actvie':' ']">密码登录</div>
          <div @click="yzm()" class="head-title" :class="[isActive?' ':'actvie']">验证码登录</div>
        </div>
        <div class="login-from">
          <form class="el-form">
            <div class="el-form-item" v-show="accout">
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <input type="text" autocomplete="off" v-model.trim="username" name="username" placeholder="用户名"
                    class="el-input__inner" @focus="focus_user()" @blur="blur_user()" />
                  <span class="el-input__prefix">
                    <img src="https://qiniu-image.qtshe.com/pc_new_login_user.png"
                      class="el-input__icon el-icon-customize" /></span>
                </div>
                <div v-if="msg_user" class="el-form-item__error">{{msg1}}</div>
              </div>
            </div>
            <div class="el-form-item" v-show="phone">
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <input type="text" autocomplete="off" v-model.trim="usermobile" name="username" placeholder="手机号"
                    class="el-input__inner" @focus="focus_user()" />
                  <span class="el-input__prefix">
                    <i class="el-icon-phone" style="padding-left:2px;font-size:18px"></i>
                  </span>
                </div>
                <div v-if="msg_user" class="el-form-item__error">{{msg1}}</div>
              </div>
            </div>
            <div class="el-form-item" id="pas" v-if="pas">
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <input type="password" autocomplete="off" v-model.trim="password" name="password" placeholder="密码"
                    class="el-input__inner" @focus="focus_pass()" />
                  <span class="el-input__prefix">
                    <img src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                      class="el-input__icon el-icon-customize" /></span>
                </div>
                <div v-if="msg_pass" class="el-form-item__error">{{msg2}}</div>
              </div>
            </div>
            <div class="items" v-show="remb">
              <el-checkbox v-model="checked">7天免密登录</el-checkbox>
              <router-link class to="/retrieve">
                <div class="forget-pass" id="forget">忘记密码?</div>
              </router-link>
            </div>
            <div class="el-form-item" id="yzms" v-if="yzms">
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <input type="text" autocomplete="off" placeholder="验证码" maxlength="6" class="el-input__inner"
                    v-model.trim="code" @focus="focus_code()" />
                  <span class="el-input__prefix">
                    <img src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                      class="el-input__icon el-icon-customize" /></span>
                </div>
                <div v-if="msg_code" class="el-form-item__error">{{msg3}}</div>
                <div class="count-down">
                  <button type="button" class="el-button count-down-button el-button--primary">
                    <span v-show="show" @click="getCode">获取验证码</span>
                    <span v-show="!show" class="count">{{count}} s</span></button>
                </div>
              </div>
            </div>
            <div class="el-form-item">
              <div class="el-form-item__content">
                <button v-if="user" @click="login_user" type="button" class="el-button next-btn el-button--primary">
                  <span>登录1</span></button>
                <button v-if="mobile" @click="login_mobile" type="button" class="el-button next-btn el-button--primary">
                  <span>登录2</span></button>
              </div>
            </div>
          </form>
          <div class="foot">
            <a>
              <img :src="imgQQ">QQ</a>
            <a>
              <img :src="imgWeixin">微信</a>
            <a>
              <img :src="imgZf">支付宝</a></div>
        </div>
        <div class="cut-off">
          <div class="line"></div>
          <div class="center-icon">◯</div>
          <div class="line"></div>
        </div>
        <div class="has-account login">
          <span>没有帐号?</span>
          <router-link class to="/register">
            <span class="blue" id="register">立即注册</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { setCookie, getCookie } from '../../util/util.js'
let Base64 = require('js-base64').Base64
export default {
  name: 'Login',
  data () {
    return {
      type: 1,
      user: true,
      warn: false,
      msg_warn: '',
      yzms: false,
      msg_user: false,
      msg_code: false,
      msg_pass: false,
      mobile: false,
      pas: true,
      phone: false,
      accout: true,
      username: '',
      usermobile: '',
      password: '',
      code: '',
      isActive: true,
      show: true,
      count: '',
      msg1: '',
      msg2: '',
      msg3: '',
      timer: null,
      checked: true,
      remb: true,
      imgQQ: require('../../assets/images/qq.png'),
      imgWeixin: require('../../assets/images/lweixin.png'),
      imgZf: require('../../assets/images/zfb.png')
    }
  },
  created () {
    // 在页面加载时从cookie获取登录信息
    let username = getCookie('username')
    let password = Base64.decode(getCookie('password'))
    let checked = getCookie('checked')
    // 如果存在赋值给表单，并且将记住密码勾选
    if (username) {
      this.username = username
      this.password = password
      // console.log("密码",password);
      // console.log("用户名",this.username);
      this.checked = true
    }
  },
  mounted () { },
  methods: {
    // 验证码倒时
    getCode () {
      let this_ = this
      if (this.usermobile == '') {
        this.msg_user = true
        this.msg1 = '手机号不能为空'
        return false
      }
      var str = this.usermobile
      var flag = !/^1\d{10}$/.test(str)
      if (flag) {
        this.msg_user = true
        this.msg1 = '请填写正确手机号'
        return false
      }
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
        // 获取短信验证码
        this_.getsms()
      }
    },
    // 获取短信验证码
    getsms () {
      let this_ = this
      var data = {
        smstype: 0,
        phone: this_.usermobile
        // clienttype:1,
      }
      axios({
        url: 'https://dev-ao5dx3e.lonltech.com:646/api/auth/getsms',
        method: 'post',
        dataType: 'json',
        // 发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
        console.log(res)
        if (res.data.Code === 1) {

        } else {
          console.log('失败')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 手机号登录
    login_mobile () {
      let this_ = this
      let str = this.usermobile
      let flag = !/^1\d{10}$/.test(str)
      if (this.usermobile == '' && this.code == '') {
        this_.msg_user = true
        this_.msg1 = '手机号不能为空'
        this_.msg_code = true
        this_.msg3 = '验证码不能为空'
        return false
      } else if (this.usermobile == '') {
        this_.msg_user = true
        this_.msg1 = '手机号不能为空'
        return false
      } else if (flag) {
        this_.msg_user = true
        this_.msg1 = '请填写正确手机号'
        return false
      } else if (this.code == '') {
        this_.msg_code = true
        this_.msg3 = '验证码不能为空'
        return false
      }
      var data = {
        logintype: this_.type,
        username: this_.usermobile,
        password: this_.code,
        clienttype: 1
      }
      axios({
        url: 'https://dev-ao5dx3e.lonltech.com:646/api/auth/login',
        method: 'post',
        dataType: 'json',
        // 发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
        if (res.data.Code === 1) {
          let ExpireTime = res.data.Data.ExpireTime
          console.log(res)
          let millisecond = new Date().getTime()// 将当前时间转换为时间戳
          var expiresTime = new Date(millisecond + ExpireTime * 1000) // 1800*1000==30*60*1000
          var AccessToken = res.data.Data.AccessToken
          var RefreshToken = res.data.Data.RefreshToken
          var Uuid = res.data.Data.Uuid
          setCookie('uUid', Uuid, { path: '/' })
          setCookie('username', this.username, { path: '/' })
          setCookie('time', millisecond, { path: '/' })
          setCookie('AccessToken', AccessToken, expiresTime, { path: '/' }) // cookie过期时间必须是UTC格式
          setCookie('RefreshToken7', RefreshToken, 'd7', { path: '/' })
          setCookie('RefreshToken30', RefreshToken, 'd30', { path: '/' })
          if (this.$route.query.redirect == location.hostname) {
            this.$router.go(-1)
          } else {
            this.$router.push({ path: '/' })
          }
          this.setUserInfo()
        } else {
          this_.warn = true
          this_.msg_warn = '登录失败'
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 用户名登录
    login_user () {
      var this_ = this
      var md5Pswd = this.$md5(this_.password).toLowerCase()
      var data = {
        logintype: this_.type,
        username: this_.username,
        password: md5Pswd,
        clienttype: 1
      }
      if (this.username == '' && this.password == '') {
        this_.msg_user = true
        this_.msg1 = '用户名不能为空'
        this_.msg_pass = true
        this_.msg2 = '密码不能为空'
        return false
      } else if (this.username == '') {
        this_.msg_user = true
        this_.msg1 = '用户名不能为空'
        return false
      } else if (this.password == '') {
        this_.msg_pass = true
        this_.msg2 = '密码不能为空'
        return false
      }
      axios({
        url: 'https://dev-ao5dx3e.lonltech.com:646/api/auth/login',
        method: 'post',
        dataType: 'json',
        // 发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
        console.log(res, '登录')
        if (res.data.Code === 1) {
          let ExpireTime = res.data.Data.ExpireTime
          console.log(res)
          let millisecond = new Date().getTime()// 将当前时间转换为时间戳
          var expiresTime = new Date(millisecond + ExpireTime * 1000) // 1800*1000==30*60*1000
          var AccessToken = res.data.Data.AccessToken
          var RefreshToken = res.data.Data.RefreshToken
          var Uuid = res.data.Data.Uuid
          setCookie('uUid', Uuid, { path: '/' })
          setCookie('username', this.username, { path: '/' })
          setCookie('time', millisecond, { path: '/' })
          setCookie('AccessToken', AccessToken, expiresTime, { path: '/' }) // cookie过期时间必须是UTC格式
          setCookie('RefreshToken7', RefreshToken, 'd7', { path: '/' })
          setCookie('RefreshToken30', RefreshToken, 'd30', { path: '/' })
          // console.log(this.$route.query.redirect)
          if (this.$route.query.redirect == location.hostname) {
            this.$router.go(-1)
          } else {
            this.$router.push({ path: '/' })
          }
          this.setUserInfo()
        } else {
          console.log('失败')
          this_.warn = true
          this_.msg_warn = '失败'
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 储存表单信息
    setUserInfo: function () {
      // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
      // 如果没有勾选，储存的信息为空
      if (this.checked) {
        setCookie('username', this.username, 'd7', { path: '/' })
        // base64加密密码
        let password = Base64.encode(this.password)
        setCookie('password', password, 'd7', { path: '/' })
        // setCookie("checked",checked,7)
      } else {
        setCookie('username', '', { path: '/' })
        setCookie('password', '', { path: '/' })
      }
    },
    // 验证
    blur_user () {
      var str = this.username
      var flag = !/[@#\$%\^&\*]+/g.test(str)
      if (!flag) {
        this.msg_user = true
        this.msg1 = '不能为非法用户'
      }
    },
    focus_user () {
      this.msg_user = false
    },
    focus_code () {
      this.msg_code = false
    },
    focus_pass () {
      this.msg_pass = false
    },
    // 切换
    pass () {
      this.msg_user = false
      this.msg_code = false
      this.user = true
      this.mobile = false
      this.type = 1
      this.yzms = false
      this.pas = true
      this.remb = true
      this.isActive = !this.isActive
      this.phone = false
      this.accout = true
    },
    // 切换
    yzm () {
      this.msg_user = false
      this.msg_pass = false
      this.user = false
      this.mobile = true
      this.type = 2
      this.yzms = true
      this.accout = false
      this.remb = false
      this.pas = false
      this.phone = true
      this.isActive = !this.isActive
    }
  }
}
</script>

<style  scoped>
.foot {
  width: 100%;
  position: relative;
  height: 35px;
  margin-bottom: -18px;
  /* border:1px solid red; */
}
.foot a {
  text-align: left;
  float: left;
  width: 33%;
  *width: auto;
  font-size: 12px;
  line-height: 32px;
  color: #999;
  text-decoration: none;
}
.foot a img {
  width: 32px;
  height: 32px;
  float: left;
  margin: 0 12px 0 0;
  border: 0;
}
.el-form-item__error {
  color: #e6322d;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}
.bg {
  width: 100%;
  height: 635px;
  background: url("../../assets/images/login.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
}
.bg .login-title {
  position: absolute;
  top: 120px;
  left: 160px;
}
.bg .login-title .login-logo {
  width: 250px;
  height: 100px;
}
.login-logo img {
  width: 100%;
}
.bg .login-title h2 {
  font-size: 25px;
  font-family: HYRunYuan-FEW;
  color: #fff;
  letter-spacing: 8px;
}
.bg .phone {
  margin-top: 40px;
  color: #fff;
  width: 120px;
  height: 90px;
  float: left;
  text-align: center;
}
.bg .phone img:nth-child(1) {
  width: 60px;
}
.bg .phone .phone-text {
  margin-top: 10px;
}
.bg .phone-code {
  display: none;
}
.bg .code img:nth-child(1) {
  width: 100px;
}
.bg .phone:hover .phone-code {
  display: block;
}
.login-frame .normal-height {
  /* height: 358px; */
  width: 320px;
}

.login-frame {
  width: 350px;
  top: 100px;
  position: absolute;
  right: 125px;
  /* background: hsla(0, 0%, 100%, .89); */
  background-color: #cce8cf;
  border-radius: 4px;
  padding: 40px;
}

.login-ow-wrap .head-text {
  margin-bottom: 20px;
  text-align: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.actvie {
  color: #1ecdb9;
  border-bottom: 2px solid #1ecdb9;
}

.login-ow-wrap .head-text .head-title {
  width: 50%;
  color: #354052;
  font-size: 18px;
  padding-bottom: 10px;
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 22px;
}
.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}

.login-ow-wrap .login-from .el-input--prefix .el-input__inner {
  padding-left: 40px;
}

.login-ow-wrap .login-from .el-input__inner {
  font-size: 14px;
  border: 0;
}

.login-ow-wrap .el-input__inner {
  background-color: #fafafa;
}

.el-input--prefix .el-input__inner {
  padding-left: 30px;
}

.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.el-input__icon,
.el-input__prefix {
  height: 100%;
  text-align: center;
  transition: all 0.3s;
}

.el-input__prefix {
  position: absolute;
  left: 5px;
  top: 0;
  color: #c0c4cc;
}

.login-ow-wrap .login-from .el-icon-customize {
  width: 15px;
  height: 16px;
  margin-left: 5px;
  vertical-align: middle;
}

.el-input__icon {
  width: 25px;
  line-height: 40px;
}

el-input__icon,
.el-input__prefix {
  height: 100%;
  text-align: center;
  transition: all 0.3s;
}

[class*=" el-icon-"],
[class^="el-icon-"] {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.login-ow-wrap .cut-off {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 40px;
}

.login-ow-wrap .cut-off .line {
  width: 119px;
  height: 1px;
  background: #000;
  opacity: 0.0961;
}

.login-ow-wrap .cut-off .center-icon {
  font-size: 14px;
  margin-top: -10px;
  color: #000;
  opacity: 0.15;
}

.login-ow-wrap .cut-off .line {
  width: 119px;
  height: 1px;
  background: #000;
  opacity: 0.0961;
}

.login-ow-wrap .has-account {
  margin-top: 15px;
  text-align: center;
}

.login-ow-wrap .has-account span {
  font-size: 14px;
  color: #6c6c6c;
}
.count {
  color: #ccc;
  padding-left: 10px;
}
.login-ow-wrap .has-account .blue {
  color: #3bf;
  cursor: pointer;
}
.items {
  /* border:1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-ow-wrap .login-from .forget-pass {
  /* position: absolute;
        top: 0;
        right: 9.75px; */
  cursor: pointer;
  font-size: 14px;
  color: #6c6c6c;
}
.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.login-ow-wrap .login-from .next-btn {
  display: block;
  width: 100%;
  font-size: 16px;
  height: 40px;
  margin-top: 18px;
}
.el-form-item__content .el-button--primary {
  color: #fff;
  background-color: #1ecdb9;
  border-color: #1ecdb9;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-color: #e8e8e8;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.login-ow-wrap .login-from .count-down .el-button--primary {
  background: #fafafa;
  color: #1ecdb9;
  border-color: #fafafa;
}
.count-down .count-down-button {
  width: 88px;
  height: 36px;
  padding: 0;
  text-align: center;
}
.login-ow-wrap .login-from .count-down {
  position: absolute;
  top: 2px;
  right: 8px;
}
/* 注册 */
.pic-verify {
  position: absolute;
  top: 126px;
  overflow: hidden;
  left: 158px;
  border-radius: 4px;
}
.pic-verify span {
  vertical-align: middle;
  font-size: 14px;
  color: #8392a7;
  cursor: pointer;
}
</style>
