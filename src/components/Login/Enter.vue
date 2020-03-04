<template>
  <div class="bg">
    <div class="login-frame normal-height">
      <div class="login-ow-wrap">
        <div class="head-text">
          <div id="pass" class="head-title actvie">密码登录</div>
          <div id="yzm" class="head-title">验证码登录</div>
        </div>
        <div class="login-from">
          <form class="el-form">
            <div class="el-form-item">
              <!---->
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <!---->
                  <input
                    type="text"
                    autocomplete="off"
                    name="mobile"
                    placeholder="手机号/邮箱"
                    class="el-input__inner"
                  />
                  <span class="el-input__prefix">
                    <img
                      src="https://qiniu-image.qtshe.com/pc_new_login_user.png"
                      class="el-input__icon el-icon-customize"
                    />
                    <!---->
                  </span>
                  <!---->
                  <!---->
                </div>
                <!---->
              </div>
            </div>
            <div id="tup">
            <div class="el-form-item"><!----><div class="el-form-item__content"><div class="el-input"><!----><input type="text" autocomplete="off" placeholder="图片验证码" maxlength="4" class="el-input__inner"><!----><!----><!----></div><!----></div></div>
            <div class="pic-verify"><span>换一个</span> <img src="https://api.qtshe.com/companyCenter/companyAccountWeb/register/imgCode?appKey=QTSHE_WEB&amp;version=5.12.1&amp;deviceId=3857304522&amp;timestamp=1573559074567&amp;sign=67ab71efe8d8b4cafcbc0305233d4460&amp;deviceIdCode=0.4082407259425611" alt=""></div>
            </div>
            <div class="el-form-item" id="pas">
              <!---->
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <!---->
                  <input
                    type="password"
                    autocomplete="off"
                    name="password"
                    placeholder="密码"
                    class="el-input__inner"
                  />
                  <span class="el-input__prefix">
                    <img
                      src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                      class="el-input__icon el-icon-customize"
                    />
                    <!---->
                  </span>
                  <!---->
                  <!---->
                </div>
                
                <div class="forget-pass" id="forget">忘记密码?</div>
            
                <!---->
              </div>
            </div>
            <div class="el-form-item" id="yzms">
              <!---->
              <div class="el-form-item__content">
                <div class="el-input el-input--prefix">
                  <!---->
                  <input
                    type="text"
                    autocomplete="off"
                    placeholder="验证码"
                    maxlength="6"
                    class="el-input__inner"
                  />
                  <span class="el-input__prefix">
                    <img
                      src="https://qiniu-image.qtshe.com/pc_new_login_lock.png"
                      class="el-input__icon el-icon-customize"
                    />
                    <!---->
                  </span>
                  <!---->
                  <!---->
                </div>
                <div class="count-down">
                  <button type="button" class="el-button count-down-button el-button--primary">
                    <!---->
                    <!---->
                    <span>获取验证码</span>
                  </button>
                </div>
                <!---->
              </div>
            </div>
            <div class="el-form-item">
              <!---->
              <div class="el-form-item__content">
                <button type="button" class="el-button next-btn el-button--primary">
                  <!---->
                  <!---->
                  <span>登录</span>
                </button>
                <!---->
              </div>
            </div>
          </form>
        </div>
        <div class="cut-off">
          <div class="line"></div>
          <div class="center-icon">◯</div>
          <div class="line"></div>
        </div>
        <div class="has-account login">
          <span>没有帐号?</span>
          <span class="blue" id="register">立即注册</span>
        </div>
          <div class="has-account register">
          <span>已有账号</span>
          <span class="blue" id="login">立即登录</span>
        </div>
        <div class="has-account back_login">
          <span class="blue" id="back_login">返回登录</span>
        </div>
      </div>
      <!---->
      <!---->
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  mounted() {
      this.toggle();
  },
  methods: {
      toggle(){
            $("#yzms,#tup,.register,.back_login").css("display","none");
             $("#pass").click(function(){
                $("#yzms").css("display","none");
                $("#pas").css("display","block");
                $("#pass").addClass('actvie');
                $("#yzm").removeClass('actvie');
            });
            $("#yzm").click(function(){
                $("#yzms").css("display","block");
                $("#pas").css("display","none");
                $("#yzm").addClass('actvie');
                $("#pass").removeClass('actvie')
            })
            $("#register").click(function(){
                $("#tup,#yzms,.register").css("display","block");
                $("#pas,#yzm,#pass,.login").css("display","none");
            })
            $("#login").click(function(){
                 $(".login,#pas,#yzm,#pass").css("display","block")
                 $(".register,#yzms,#tup").css("display","none")
            })
            $("#forget").click(function(){
                $("#tup,#yzms,.back_login").css("display","block");
                  $("#yzm,#pass,#pas,.login").css("display","none")
            })
             $("#back_login").click(function(){
                 $("#yzms,#tup,#pas,.back_login").css("display","none");
                $("#pas,#pass,#yzm,.login").css("display","block");
            })
      }
  }
};
</script>

<style  scoped>
.bg {
  width: 100%;
  height: 800px;
  background-color:#CCE8CF;
  position:relative;
}
 .login-frame .normal-height {
        /* height: 358px; */
        width:320px;
    }

    .login-frame {
        width: 350px;
        top: 100px;
        position: absolute;
        right: 125px;
        background: hsla(0, 0%, 100%, .89);
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

    .login-ow-wrap .head-text .head-title.actvie {
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
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }

    .el-input__icon,
    .el-input__prefix {
        height: 100%;
        text-align: center;
        transition: all .3s;
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
        transition: all .3s;
    }

    [class*=" el-icon-"],
    [class^=el-icon-] {
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
        opacity: .0961;
    }

    .login-ow-wrap .cut-off .center-icon {
        font-size: 14px;
        margin-top: -10px;
        color: #000;
        opacity: .15;
    }

    .login-ow-wrap .cut-off .line {
        width: 119px;
        height: 1px;
        background: #000;
        opacity: .0961;
    }

    .login-ow-wrap .has-account {
        margin-top: 15px;
        text-align: center;
    }

    .login-ow-wrap .has-account span {
        font-size: 14px;
        color: #6c6c6c;
    }

    .login-ow-wrap .has-account .blue {
        color: #3bf;
        cursor: pointer;
    }
    .login-ow-wrap .login-from .forget-pass {
        position: absolute;
        top: 0;
        right: 9.75px;
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
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .login-ow-wrap .login-from .count-down .el-button--primary {
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
    .login-ow-wrap .login-from .count-down {
        position: absolute;
        top: 2px;
        left: 150px;
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
    color: 
    #8392a7;
    cursor: pointer;
}
</style>