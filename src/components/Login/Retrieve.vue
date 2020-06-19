<template>
  <div class="bg">
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
    <div class="login-frame max-height">
      <!---->
      <!---->
      <div class="find-password" channel="1">
        <div class="cards">
          <div class="head-text">
            <span>找回密码</span>
          </div>
          <div class="register-form">
            <form class="el-form">
              <div class="el-form-item">
                <!---->
                <div class="el-form-item__content">
                  <div class="el-input el-input--prefix">
                    <!---->
                    <input type="text" autocomplete="off" maxlength="11" placeholder="手机号码" class="el-input__inner" />
                    <span class="el-input__prefix">
                      <img src="https://qiniu-image.qtshe.com/pc_new_login_user.png"
                        class="el-input__icon el-icon-customize" />
                      <!---->
                    </span>
                    <!---->
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div class="el-form-item">
                <!---->
                <div class="el-form-item__content">
                  <div class="el-input">
                    <!---->
                    <input type="text" autocomplete="off" placeholder="图片验证码" maxlength="4" class="el-input__inner" />
                    <!---->
                    <!---->
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div class="pic-verify">
                <span @click="getIdentifyingCode(true)">换一个</span>
                <img id="imgIdentifyingCode" src="../../assets/images/yzm.png" alt />
              </div>
              <div class="el-form-item">
                <!---->
                <div class="el-form-item__content">
                  <div class="el-input el-input--prefix">
                    <!---->
                    <input type="text" autocomplete="off" placeholder="验证码" maxlength="6" class="el-input__inner" />
                    <span class="el-input__prefix">
                      <img src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                        class="el-input__icon el-icon-customize" />
                      <!---->
                    </span>
                    <!---->
                    <!---->
                  </div>
                  <div class="count-down">
                    <button type="button" class="el-button count-down-button el-button--primary">
                      <!---->
                      <!---->
                      <span v-show="show" @click="getCode">获取验证码</span>
                      <span v-show="!show" class="count">{{count}} s</span>
                    </button>
                  </div>
                  <!---->
                </div>
              </div>
            </form>
            <div class="next-btn">
              <button disabled="disabled" type="button" class="el-button el-button--primary " @click="back_pass()">
                <!---->
                <!---->
                <span>下一步</span>
              </button>
              <p class="tips">
                无手机号的帐号请
                <span class="customer-service">联系客服</span>找回密码
              </p>
            </div>
            <div class="cut-off">
              <div class="line"></div>
              <div class="center-icon">◯</div>
              <div class="line"></div>
            </div>
            <div class="has-account">
              <span>
                <router-link class="" to="/login">
                  <span class="blue">返回登录</span>
                </router-link>
              </span>
            </div>
          </div>
        </div>
        <!---->
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Retrieve',
  data () {
    return {
      count: '',
      show: true
    }
  },
  mounted () { },
  methods: {
    // 验证码倒时
    getCode () {
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
        this.getsms()
      }
    },
    // 获取短信验证码
    getsms () {
      let this_ = this
      var data = {
        smstype: 1,
        phone: this_.phonename
      }
      // console.log(data);
      axios({
        url: 'https://192.168.199.10:8000/api/auth/getsms',
        method: 'post',
        dataType: 'json',
        // 发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
        console.log(res)
        if (res.data.Succ === 1) {
          console.log('成功')
        } else {
          console.log('失败')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击图片修改图片src
    getIdentifyingCode: function (bRefresh) {
      let identifyCodeSrc = 'https://qiniu-image.qtshe.com/pc_new_login_lock.png'
      if (bRefresh) {
        identifyCodeSrc = 'https://qiniu-image.qtshe.com/pc_new_login_lock.png?' + Math.random()
      }
      let objs = document.getElementById('imgIdentifyingCode')
      objs.src = identifyCodeSrc
      // console.log(objs.src)
    },
    // 忘记密码提交
    back_pass () {
      var this_ = this
      var data = {

      }
      axios({
        url: 'https://192.168.199.10:8000/api/auth/login',
        method: 'post',
        dataType: 'json',
        // 发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
        console.log(res)
        if (res.data.Succ === 1) {
        } else {
          console.log('失败')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style  scoped>
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
.login-frame.max-height {
  height: 450px;
}
.login-frame {
  width: 350px;
  top: 100px;
  position: absolute;
  right: 125px;
  background: #cce8cf;
  border-radius: 4px;
  padding: 40px;
}
.find-password .cards {
  text-align: center;
}
.find-password .cards .head-text {
  margin-bottom: 20px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid #1ecdb9;
}
.find-password .cards .head-text span {
  font-size: 18px;
  color: #1ecdb9;
}
.find-password .cards .register-form {
  display: block;
  margin-bottom: 45px;
  width: 100%;
  height: 270px;
}
.el-form-item {
  margin-bottom: 22px;
}
.find-password .cards .register-form .el-form .el-form-item__content {
  line-height: 10px;
}
.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.find-password .cards .register-form .el-input {
  width: 100%;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.find-password .cards .register-form .el-input .el-input__inner {
  height: 40px;
  background: #fafafa;
  font-size: 14px;
  color: #3c4858;
  border: none;
}
.find-password .cards .register-form .el-input--prefix .el-input__inner {
  padding-left: 40px;
  border: none;
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
  padding-left: 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
button,
input,
keygen,
select,
textarea {
  outline: none;
  padding: 0;
  margin: 0;
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
.find-password .cards .register-form .el-icon-customize {
  width: 15px;
  height: 16px;
  margin-left: 5px;
  margin-top: 11px;
  vertical-align: middle;
}
.el-input__icon {
  width: 25px;
  line-height: 40px;
}
.el-input__icon,
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
.find-password .cards .register-form .el-input {
  width: 100%;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.find-password .cards .register-form .el-input .el-input__inner {
  height: 40px;
  background: #fafafa;
  font-size: 14px;
  color: #3c4858;
  border: none;
}
.find-password .cards .register-form .pic-verify {
  position: absolute;
  top: 161px;
  left: 158px;
  overflow: hidden;
  border-radius: 4px;
}
.find-password .cards .register-form .pic-verify span {
  vertical-align: middle;
  font-size: 14px;
  color: #6c6c6c;
  cursor: pointer;
}
.find-password .cards .register-form .pic-verify img {
  vertical-align: middle;
  width: 106px;
  height: 40px;
}
.find-password .cards .register-form .count-down {
  position: absolute;
  top: 2px;
  left: 180px;
}
.find-password .cards .register-form .count-down .el-button--primary {
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
.el-button--primary {
  color: #fff;
  background-color: #1ecdb9;
  border-color: #1ecdb9;
}
.find-password .cards .register-form .next-btn {
  display: block;
  margin-bottom: 12px;
  width: 100%;
}
.find-password .cards .register-form .next-btn .is-disabled {
  color: #fff;
  background-color: #90efe4;
  border: none;
}
.find-password .cards .register-form .next-btn .el-button {
  width: 100%;
  height: 40px;
}
.find-password .tips {
  margin-top: 20px;
  font-size: 14px;
  text-align: left;
  color: #6c6c6c;
}
.find-password .customer-service {
  color: #3bf;
  cursor: pointer;
}
.find-password .cards .cut-off {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 20px;
}
.find-password .cards .cut-off .line {
  width: 119px;
  height: 1px;
  background: #000;
  opacity: 0.0961;
}
.find-password .cards .cut-off .center-icon {
  font-size: 14px;
  margin-top: -10px;
  color: #000;
  opacity: 0.15;
}
.find-password .cards .has-account {
  position: relative;
  bottom: 0;
  margin-top: 10px;
  display: block;
}
.find-password .cards .has-account span {
  font-size: 14px;
  color: #6c6c6c;
}
.find-password .cards .has-account span .blue {
  color: #3bf;
  cursor: pointer;
}
.find-password .cards .has-account span {
  font-size: 14px;
  color: #6c6c6c;
}
</style>
