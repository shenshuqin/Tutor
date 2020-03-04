<template>
<div class="bg">
     <div class="alert alert-danger" role="alert" v-show="warn" ref = "warn">{{msg_warn}}</div>
       <div class="login-frame normal-height">
        <div class="register">
                   <!-- <div class="head-text"><span>找回密码</span></div> -->
            <div class="cards">
                <div class="head-text">
                <div @click="phone()" class="head-title" :class="[isActive?'actvie':' ']">手机号注册</div>
                <div @click="user()" class="head-title" :class="[isActive?' ':'actvie']">用户名注册</div>
                </div>
                <!-- <div class="head-text"><span>找回密码</span></div> -->
                <div class="register-form">
                    <form class="el-form">
                        <div class="el-form-item" v-show="user_reg">
                            <!---->
                            <div class="el-form-item__content">
                                <div class="el-input el-input--prefix">
                                    <!----><input type="text" autocomplete="off" placeholder="用户名" v-model.trim="username"
                                           @focus="focus_user()"  @blur="blur_rguser()"
                                        class="el-input__inner"><span class="el-input__prefix"><img
                                            src="https://qiniu-image.qtshe.com/pc_new_login_user.png"
                                            class="el-input__icon el-icon-customize">
                                        </span>
                                </div>
                                 <div v-if="msg_user" class="el-form-item__error">{{msg1}}</div>
                            </div>
                        </div>
                            <div class="el-form-item" v-show="pass_reg">
                            <div class="el-form-item__content">
                                <div class="el-input el-input--prefix">
                                   <input @focus="focus_pass()" type="password" autocomplete="off" placeholder="密码" maxlength="6" v-model.trim="password"
                                        class="el-input__inner"><span class="el-input__prefix"><img
                                            src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                                            class="el-input__icon el-icon-customize">
                                        </span>
                                </div>
                                 <div v-if="msg_pass" class="el-form-item__error">{{msg2}}</div>
                            </div>
                            
                        </div>
                        <div class="el-form-item" v-show="phone_reg">
                            <!---->
                            <div class="el-form-item__content">
                                <div class="el-input el-input--prefix">
                                 <input type="text" autocomplete="off" placeholder="手机号"  v-model.trim="phonename"
                                       @focus="focus_phone()"  class="el-input__inner" > 
                                          <span class="el-input__prefix">
                                         <i class="el-icon-phone" style="padding-left:2px;padding-top:8px;font-size:18px"></i>
                                         </span>
                                </div>
                                    <div v-if="msg_phone" class="el-form-item__error">{{msg3}}</div>
                            </div>
                         
                        </div>
                              <div class="el-form-item" v-show="yzm">
                            <div class="el-form-item__content">
                                <div class="el-input el-input--prefix">
                                  <input type="text" autocomplete="off" placeholder="验证码" maxlength="6"  @focus="focus_yzm()"
                                        class="el-input__inner" v-model.trim="code"><span class="el-input__prefix"><img
                                            src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                                            class="el-input__icon el-icon-customize">
                                   </span>
                                </div>
                                <div class="count-down"><button type="button"
                                        class="el-button count-down-button el-button--primary">
                                       <span v-show="show" @click="getCode">获取验证码</span>
                                       <span v-show="!show" class="count">{{count}} s</span>
                                      </button>
                                </div>
                                 <div v-if="msg_code" class="el-form-item__error">{{msg5}}</div>
                            </div>
                        </div>
                        <div class="el-form-item" v-show="tup">
                            <div class="el-form-item__content">
                                <div class="el-input">
                                <input type="text" @focus="focus_tpcode()" v-model.trim="tpcode" autocomplete="off" placeholder="图片验证码" maxlength="4"
                                        class="el-input__inner">
                                </div>
                                  <div v-if="msg_tup" class="el-form-item__error">{{msg4}}</div>
                            </div>
                        </div>
                        <div class="pic-verify" v-show="tup_yz"><span  @click="getIdentifyingCode(true)">换一个</span> <img
                              id="imgIdentifyingCode" src="../../assets/images/yzm.png"
                                alt="">
                        </div>
                  
                    </form>
                    <div class="next-btn" v-show="btn1"><button @click="register1" type="button"
                            class="el-button el-button--primary ">
                           <span>注册1</span></button></div>
                      <div class="next-btn" v-show="btn2"><button @click="register2" type="button"
                            class="el-button el-button--primary ">
                            <span>注册2</span></button></div>
                    <div class="content"><span>点击「下一步」按钮，代表你同意</span> <span
                            class="blue">《龙呤商户协议》</span><span>与</span><span class="blue">《龙呤商户隐私协议》</span></div>
                </div>
                <div class="cut-off" :class="{m_t20: phone_css, m_t18: user_css}">
                    <div class="line"></div>
                    <div class="center-icon">◯</div>
                    <div class="line"></div>
                </div>
                <div class="has-account"><span>已有帐号
                        <router-link class="" to="/login">
                        <span class="blue">立即登录</span>
                        </router-link>
                        </span></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
         phonename:'',
         username:'',
         tpcode:'',
         password:'',
         code:'',
         isActive: true,
         user_reg:false,
         tup:false,
         show:true,
         count: "",
         msg_user:false,
         msg_pass:false,
         msg_tup:false,
         msg_phone:false,
         msg_code:false,
         msg5:'',
         msg1:"",
         msg2:'',
         msg3:'',
         msg4:'',
         tup_yz:false,
         phone_reg:true,
         yzm:true,
         phone_css:true,
         user_css:false,
         regtype:1,
         pass_reg:false,
         btn1:true,
         btn2:false,
         warn:false,
         msg_warn:'',
        //  imgCode:'url'
        // imgCode:'https://qiniu-image.qtshe.com/pc_new_login_lock.png'
    };
  },
  mounted() {
      
  },

  methods: {
       // 验证码倒时
    getCode() {
      let this_ = this;
      console.log(flag)
      if (this.phonename== "") {
        this.msg_phone = true;
        this.msg3 = "手机号不能为空";
        return false;
      }
      var str = this.phonename;
      var flag = !/^1\d{10}$/.test(str);
      if (flag) {
        this.msg_phone = true;
        this.msg3 = "请填写正确手机号";
        return false;
      }
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
        // 获取短信验证码
        this_.getsms();
      }
    },
     // 点击图片修改图片src
    getIdentifyingCode: function (bRefresh) {
      let identifyCodeSrc =  "https://qiniu-image.qtshe.com/pc_new_login_lock.png";
      if (bRefresh) {
        identifyCodeSrc = "https://qiniu-image.qtshe.com/pc_new_login_lock.png?" + Math.random();
      }
      let objs = document.getElementById("imgIdentifyingCode");
      objs.src = identifyCodeSrc;
      // console.log(objs.src)
    },
    //获取短信验证码
    getsms() {
      let this_ = this;
      var data = {
        smstype: 1,
        phone: this_.phonename
      };
      // console.log(data);
      axios({
        url: "https://192.168.199.10:8000/api/auth/getsms",
        method: "post",
        dataType: "json",
        //发送格式为json
        data: data,
        headers: this_.header
      }).then(res => {
          // console.log(res);
          // if (res.data.Succ === 1) {
          // } else {
          //   // console.log("失败");
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
      blur_rguser() {
        var str = this.username;
        console.log(str)
        var flag = !/[@#\$%\^&\*]+/g.test(str);
        if (!flag) {
          // this.$refs.warn.style.display="block"
        this.msg_user = true;
        this.msg1 = "非法用户名";
        }
    },
      focus_phone(){
        this.msg_phone = false;
      },
      focus_yzm(){
        this.msg_code = false;
      },
       focus_user(){
         this.msg_user = false;
        //  this.$refs.warn.style.display="none"
      },
      focus_pass(){
        this.msg_pass = false;
      },
      focus_tpcode(){
        this.msg_tup = false;
      },
      register1(){
      let this_ = this;
      var str = this.phonename;
      var flag = !/^1\d{10}$/.test(str);
      if (this.phonename == "" && this.code == "") {
        this.msg_phone = true;
        this.msg_code  = true;
        this.msg3 = "请填写手机号";
        this.msg5 = "请填写验证码";
        return false;
      } else if (this.phonename == "") {
        this.msg_phone = true;
        this.msg3 = "请填写手机号";
        return false;
      } else if(flag){
         this.msg_phone = true;
        this.msg3 = "请填写正确手机号";
        return false;
      }else if (this.code == "") {
      this.msg_code  = true;
      this.msg5 = "请填写验证码";
        return false;
      }
      var data = {
        regtype: this_.regtype,
        phone: this_.phonename,
        smscode : this_.code
      };
      console.log(data)
      axios({
        url: "https://192.168.199.10:8000/api/auth/register",
        method: "post",
        dataType: "json",
        //发送格式为json
        data: data,
        headers: this_.header
      })
        .then(res => {
          console.log(res);
          if (res.data.Succ === 1) {
            // var token = res.data.Token;
            // console.log("token",token)
            // setCookie("token", token);
            // console.log(getCookie("token"));
            // _this.$router.push({path:'/home'}
          } else {
            var msg = res.data.Succ;
            this_.warn = true;
            this_.msg_warn = "失败";
            switch(表达式) {
                  case 2:
                       this_.msg_warn = "验证码错误";
                      break;
                  case 3:
                      this_.msg_warn = "用户名重复";
                      break;
                   case 4:
                      this_.msg_warn = "用户名格式不正确";
                      break;
                  case 5:
                      this_.msg_warn = "密码格式不正确";
                      break;
                  case 6:
                    this_.msg_warn = "手机号已经被注册";
                    break;
                  default:
                     this_.msg_warn = "错误";
              } 
          }
        })
        .catch(err => {
          console.log(err);
        });
      },
      
      register2(){
      var this_ = this;
      var md5Pswd = this.$md5(this_.password).toLowerCase();
      var data = {
        regtype: this_.regtype,
        phone: this_.phonename,
        smscode : this_.code,
        username: this_.username,
        password: md5Pswd
      };
      console.log(data)
      if (this.username == "" && this.password == "" && this.tpcode == ''&& this.phonename == "" && this.code == "") {
         this.msg_user = true;
         this.msg1 = "请填写用户名";
         this.msg_pass = true;
         this.msg2 = "请填写密码";
         this.msg_tup = true;
         this.msg4 = "请填写图片验证码";
         this.msg_phone = true;
        this.msg_code  = true;
        this.msg3 = "请填写手机号";
        this.msg5 = "请填写验证码";
        return false;
      } else if (this.username == "") {
        this.msg_user = true;
        this.msg1 = "请填写用户名";
        return false;
      } else if (this.password == "") {
         this.msg_pass = true;
         this.msg2 = "请填写密码";
        return false;
      }else if(this.phonename == ""){
        this.msg_phone = true;
        this.msg3 = "请填写手机号";
      }else if(this.code == ""){
         this.msg_code  = true;
         this.msg5 = "请填写验证码";
      }else if (this.tpcode == "") {
         this.msg_tup = true;
         this.msg4 = "请填写图片验证码"
        return false;
      }
      axios({
        url: "https://192.168.199.10:8000/api/auth/login",
        method: "post",
        dataType: "json",
        //发送格式为json
        data: data,
        headers: this_.header
      })
      console.log(res)
        .then(res => {
          if (res.data.Succ === 1) {
            var token = res.data.Token;
            console.log(成功)
            // _this.$router.push({path:'/home'})
          } else {
            // console.log("失败");
            this_.warn = true;
            this_.msg_warn = "失败";
          }
        })
        .catch(err => {
          console.log(err);
        });
      },
    
     phone(){
         this.regtype = 1;
         this.phone_reg = true;
         this.yzm = true;
         this.tup = false;
         this.tup_yz = false;
         this.user_reg = false;
         this.pass_reg = false;
         this.phone_css = true; 
         this.user_css = false; 
         this.isActive = !this.isActive;
         this.btn1 = true;
         this.btn2 = false;
         this.msg_tup = false;
         this.msg_pass = false;
         this.msg_user = false;
     },
     user(){
        this.msg_phone = false;
        this.msg_code  = false;
        this.regtype = 0;
        this.phone_reg = true;
        this.yzm = true;
        this.tup = true;
        this.tup_yz = true;
        this.user_reg = true;
        this.pass_reg = true;
        this.phone_css = false; 
        this.user_css = true; 
        this.btn1 = false;
        this.btn2 = true;
        this.isActive = !this.isActive;
     }
  }
};
</script>

<style  scoped>
.el-form-item__error {
  color: #e6322d;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}
 .head-text {
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

 .head-text .head-title {
  width: 50%;
  color: #354052;
  font-size: 18px;
  padding-bottom: 10px;
  cursor: pointer;
}
.bg {
  width: 100%;
  height: 800px;
  /* background-color:#CCE8CF; */
  position:relative;
}
 .login-frame.normal-height {
    height: auto;
}
.login-frame {
    width: 350px;
    top: 100px;
    position: absolute;
    right: 125px;
    background-color:#CCE8CF;
    border-radius: 4px;
    padding: 40px;
}
.register .cards {
    text-align: center;
}
 .cards .head-text {
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
}
 .cards .head-text span {
    font-size: 18px;
    color: 
    #1ecdb9;
}
.register .cards .register-form {
    display: block;
    width: 100%;
    height: 270px;
}
.el-form-item {
    margin-bottom: 22px;
}
.register .cards .register-form .el-form .el-form-item__content {
    line-height: 10px;
}
.el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
}
.register .cards .register-form .el-input {
    width: 100%;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
.register .cards .register-form .el-input .el-input__inner {
    height: 40px;
    background: 
#fafafa;
font-size: 14px;
color:
    #3c4858;
    border: none;
}
.register .cards .register-form .el-input--prefix .el-input__inner {
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
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.el-input__icon, .el-input__prefix {
    height: 100%;
    text-align: center;
    transition: all .3s;
}
.el-input__prefix {
    position: absolute;
    left: 5px;
    top: 0;
    color: 
    #c0c4cc;
}
.register .cards .register-form .el-icon-customize {
    width: 15px;
    height: 16px;
    margin-top: 11px;
    margin-left: 5px;
    vertical-align: middle;
}
.el-input__icon {
    width: 25px;
    line-height: 40px;
}
.el-input__icon, .el-input__prefix {
    height: 100%;
    text-align: center;
    transition: all .3s;
}
[class*=" el-icon-"], [class^="el-icon-"] {
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
.el-form-item {
    margin-bottom: 22px;
}
.register .cards .register-form .el-form .el-form-item__content {
    line-height: 10px;
}
.el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
}
.register .cards .register-form .el-input {
    width: 100%;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
.register .cards .register-form .el-input .el-input__inner {
    height: 40px;
    background: 
#fafafa;
font-size: 14px;
color:
    #3c4858;
    border: none;
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
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.register .cards .register-form .pic-verify {
    position: absolute;
    top:357px;
    overflow: hidden;
    left: 158px;
    border-radius: 4px;
}
.register .cards .register-form .pic-verify span {
    vertical-align: middle;
    font-size: 14px;
    color: 
    #8392a7;
    cursor: pointer;
}
.register .cards .register-form .pic-verify img {
    vertical-align: middle;
    width: 106px;
    height: 40px;
}
.register .cards .register-form .count-down {
    position: absolute;
    top: 2px;
    left: 180px;
}
.register .cards.register-form .count-down .el-button--primary {
    background: 
#fafafa;
color:
#1ecdb9;
border-color:
    #fafafa;
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

.register .cards .register-form .next-btn {
    margin-top: 30px;
    display: block;
    margin-bottom: 12px;
    width: 100%;
}
.register .cards .register-form .next-btn .is-disabled {
    color: 
#fff;
background-color:
    #90efe4;
    border: none;
}
.register .cards .register-form .next-btn .el-button {
    width: 100%;
    height: 40px;
}
.register .cards .register-form .content {
    font-size: 0;
    text-align: left;
}
.register .cards .register-form .content span {
    font-size: 12px;
    color: 
    #6c6c6c;
}
.register .cards .register-form .content .blue {
    color: 
    #3bf;
    cursor: pointer;
}
.register .cards .register-form .content span {
    font-size: 12px;
    color: #6c6c6c;
}
.register .cards .cut-off {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-pack: justify;
    justify-content: space-between;
    /* margin-top: -20px; */
}
.m_t20{
    margin-top:-20px;
}
.m_t18{
    margin-top: 158px;
    /* margin-bottom:-10px; */
}
.register .cards .cut-off .line {
    width: 119px;
    height: 1px;
    background: 
    #000;
    opacity: .0961;
}
.register .cards .cut-off .center-icon {
    font-size: 14px;
    margin-top: -10px;
    color: 
    #000;
    opacity: .15;
}
.register .cards .has-account {
    position: relative;
    bottom: 0;
    margin-top: 10px;
    display: block;
}
.register .cards .has-account span {
    font-size: 14px;
    color: 
    #6c6c6c;
}
.register .cards .has-account span .blue {
    color: 
    #3bf;
    cursor: pointer;
}
</style>