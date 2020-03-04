<template>
  <div class="home">
      <div class="dialogue-wrapper" ref="dialogue-wrapper">
      <div class="dialogue-main" ref="dialogue_main">
        <div class="dialogue-header">
            <div id="btn_close" ref="btn_close" class="dialogue-close"  @click="btn_close"><i class="el-icon-close"></i></div>
            <div class="dialogue-service-info">
                <i class="dialogue-service-img">头像</i>
                <div class="dialogue-service-title">
                    <p class="dialogue-service-name">XX客服</p>
                    <p class="dialogue-service-detail">XX客服支持平台</p>
                </div>
            </div>
        </div>
        <div  ref="dialogue_contain" class="dialogue-contain">
            <p class="dialogue-service-contain"><img class="avatar" src="../../assets/images/02.png"><span class="dialogue-text dialogue-service-text"  id="xz1576728615000">您好，请提问</span></p>
        </div>
        <div class="dialogue-submit">
            <p  ref="dialogue_hint" class="dialogue-hint"><span class="dialogue-hint-icon">!</span><span class="dialogue-hint-text">发送内容不能为空</span></p>
            <textarea  @keyup="set($event)"  @keydown="out($event)"  ref="dialogue_input" class="dialogue-input-text" placeholder="请输入您的问题，按Enter键提交（shift+Enter换行）"></textarea>
            <div class="dialogue-input-tools">
                <div class="send_btn" @click="sendMsg($event)">发送</div>
            </div>
        </div>
    </div>
</div>
 <ul  id="menu" class="skin">
    <li @click="widthDraw()"><a>撤回消息</a></li>
 </ul>
 <!-- <div id="menu" class="skin">撤回</div> -->
  </div>
    </template>
    <script>
    import $ from 'jquery'
    import axios from "axios";
    import { setCookie, getCookie } from "../../util/util.js";
    export default {
    name: "Client",
    data() {
        return {
           loginToken:'',
           timer:'',
           timerId:'',
           shiftKeyOn:false,
           user:"ssq",
           con:'',
           data:'',
           avator_src:require('../../assets/images/01.png'),
           msgObj:'',
           uid_customer:"ssq",
           uid_server:"xz",
           RefreshToken7:'',
           AccessToken:'',
           header: { 
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": "Bearer " + getCookie("AccessToken")
            },
        }
    },
    mounted() {
        let this_ = this;
        setTimeout(this.accept,5000);
        // this.connectServer();
        $('.dialogue-contain').on('contextmenu','.dialogue-customer-text', function() {
            this_.msgObj = $(this);
            this_.mouseEvent(this_.msgObj)
        });
    //   this.AccessToken = getCookie("AccessToken");
    //   this.RefreshToken7 = getCookie("RefreshToken7");
    //   var RefreshToken30 = getCookie("RefreshToken30");
    //    if(!this.AccessToken){
    //      console.log("token过期")
    //      this.requestToken();
    //    }
    //    if(!(this.RefreshToken7 && RefreshToken30)){
    //     //    this.$router.push({path:'/login'})
    //    }
    },
    methods: {
        //  requestToken(){
        //     axios({
        //     url :"https://dev-ao5dx3e.lonltech.com:646/api/auth/reftoken",
        //     method: "post",
        //     dataType: "json",
        //     //发送格式为json
        //     data:{"refreshToken": this.RefreshToken7},
        //     headers: this.header
        // }).then(res => {
        //     console.log("AccessToken过期")
        //     if (res.data.Succ === 1) {
        //         this.AccessToken = res.data.AccessToken;
        //         var RefreshToken7 = res.data.RefreshToken;
        //         this.RefreshToken7 = RefreshToken7;
        //     } else {
        //         console.log("失败");
        //     }
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // },
            accept(){
              var target = 1576728615000; 
              var objServer = $('.dialogue-service-text').attr('id');
              var num = objServer.match(/[0-9]+/g).pop(); 
            if(target = num){
                // console.log('true')
                var drawObj = this. uid_server+num;//server0
                $('#'+drawObj).parent().html("<span class='draw-text'>对方撤回了一条消息</span>")
            }

            },
            widthDraw(){
                var obj = this.msgObj.parent();
                // var num = parseInt(this.msgObj.attr('id'));
                var num = this.msgObj.attr('id').match(/[0-9]+/g).pop(); 
                // console.log(obj,num);//获取当前元素ID
                obj.html("<span class='draw-text'>你撤回了一条消息</span>");//替换html
            },
            // 重写鼠标右键功能
            mouseEvent(event){
            var container = this.$refs.dialogue_main;
            var menu = document.getElementById('menu');
            // console.log(event);
            /*显示菜单*/
            function showMenu() {
                var evt = window.event || arguments[0];
                /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
                var rightedge = 0;
                var bottomedge = 0;
                bottomedge = container.offsetTop + container.clientHeight - evt.clientY;//container.clientWidth是容器的高度 evt.clientY是鼠标在窗口的y轴位置                
                rightedge = container.offsetLeft + container.clientWidth - evt.clientX;//container.clientWidth是容器的宽度 evt.clientX是鼠标在窗口的x轴位置
                // console.log("0"+container.offsetTop)
                /*如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度*/
                if (rightedge < menu.offsetWidth)
                    menu.style.left = container.scrollLeft + evt.clientX - menu.offsetWidth + "px";
                else/*否则，就定位菜单的左坐标为当前鼠标位置*/
                    menu.style.left = container.scrollLeft + evt.clientX + "px";

                /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
                if (bottomedge < menu.offsetHeight){
                    console.log("bottomedge < menu.offsetHeight");
                    menu.style.top = container.scrollTop + evt.clientY - menu.offsetHeight + "px";
                }
                else/*否则，就定位菜单的上坐标为当前鼠标位置*/
                    menu.style.top = container.scrollTop + evt.clientY + "px";
                /*设置菜单可见*/    
                menu.style.visibility = "visible";
                LTEvent.addListener(menu,"contextmenu",LTEvent.cancelBubble);
            }
            /*隐藏菜单*/
            function hideMenu() {
                menu.style.visibility = 'hidden';
            }
            LTEvent.addListener(container,"contextmenu",LTEvent.cancelBubble);
            LTEvent.addListener(container,"contextmenu",showMenu);
            LTEvent.addListener(document,"click",hideMenu);
        },
        connectServer() {
            console.log("客服连接")
            var this_ = this;
            var Token =  this.AccessToken;
            // console.log("AccessToken",Token)
            var dialogueInput = this.$refs.dialogue_input,
                dialogueContain = this.$refs.dialogue_contain,
                dialogueHint = this.$refs.dialogue_hint
            var connection = new signalR.HubConnectionBuilder().withUrl("http://api.cnsepte.com:5088/chatHub?token="+Token,{
                accessTokenFactory:()=>this.loginToken
            }).build();
               this_.con = connection;
               this_.con.on("broadcastMessage", function (message) {
                console.log("接受",message);
                var arr = [];
                for (let i in message) {
                    arr.push(message[i]); //属性
                }
                this_.data = message.content;
                console.log(this_.data)
                this_.getServiceText(this_.data);
                });
                connection.start().then(function () {
                }).catch(function (err) {
                    return console.error(err.toString());
                });
        },
        btn_close(){
          console.log("关闭");
          $('.dialogue-main').animate({'height': '0'}, function() {
          $('.dialogue-main').css({'display': 'none'});
          $('.dialogue-support-btn').css({'display': 'inline-block'});
        });
      },
        set(e){
            var dialogueInput = this.$refs.dialogue_input;
            var e = e || window.event;
            if (e.keyCode == 16) {
                this.shiftKeyOn = false;
                return true;
            }
            if (!this.shiftKeyOn && e.keyCode == 13) {
                dialogueInput.value = null;
            }
        },
        out(e){
            var this_ = this;
            var time = Date.parse(new Date())//获取当前时间戳
            var uid = this.uid_customer+time;
            var dialogueInput = this.$refs.dialogue_input,
                dialogueContain = this.$refs.dialogue_contain,
                dialogueHint =  this.$refs.dialogue_hint
            var e = e || window.event;
            if (e.keyCode == 16) {
                this.shiftKeyOn = true;
            }
            if (this.shiftKeyOn) {
                return true;
            } else if (e.keyCode == 13 && dialogueInput.value == '') {
                // 多次触发只执行最后一次渐隐
                setTimeout(function() {
                    this_.fadeIn(dialogueHint);
                    clearTimeout(this_.timerId)
                    this_.timer = setTimeout(function() {
                        this_.fadeOut(dialogueHint)
                    }, 2000);
                }, 10);
                this_.timerId = this_.timer;
                return true;
            } else if (e.keyCode == 13) {
                 dialogueContain.innerHTML += '<p class="dialogue-customer-contain"><span class="dialogue-text dialogue-customer-text" id="'+uid+'">' + dialogueInput.value + '</span><img class="avatar" src='+ this.avator_src +'></p>';
                dialogueContain.scrollTop = dialogueContain.scrollHeight;
                this.submitCustomerText(dialogueInput.value);
            }
        },
        sendMsg(e){
            var this_ = this;
            var time = Date.parse(new Date())//获取当前时间戳
            var uid = this.uid_customer+time;
            var dialogueInput = this.$refs.dialogue_input,
            dialogueContain = this.$refs.dialogue_contain,
            dialogueHint =  this.$refs.dialogue_hint
            if(dialogueInput.value == ''){
                  setTimeout(function() {
                    this_.fadeIn(dialogueHint);
                    clearTimeout(this_.timerId)
                    this_.timer = setTimeout(function() {
                        this_.fadeOut(dialogueHint)
                    }, 2000);
                }, 10);
                this_.timerId = this_.timer;
                return true;
            }else{
                dialogueContain.innerHTML += '<p class="dialogue-customer-contain"><span class="dialogue-text dialogue-customer-text customer" id="'+uid+'">' + dialogueInput.value + '</span><img class="avatar" src='+ this.avator_src +'></p>';
                dialogueContain.scrollTop = dialogueContain.scrollHeight;
                this.submitCustomerText(dialogueInput.value);
                dialogueInput.value = null;  
            }
           
        },
        submitCustomerText(text){
            //   var connection = new signalR.HubConnectionBuilder().withUrl("http://192.168.199.10:8001/chatHub").build();
            //    this.con = connection;
            // code here 向后端发送text内容
             var msg = {
                type:0,
                userName:this.user,
                content:text,
              
            };
            this.con.invoke("Send", msg).catch(function (err) {
                 console.log("发送",msg)
                 return console.error(err.toString());
            }); 
            // event.preventDefault();
        },
         // 后端回复内容显示在页面上
         getServiceText(data){
             var time = Date.parse(new Date())//获取当前时间戳
             var uid = this.uid_server+time; 
             var dialogueInput = this.$refs.dialogue_input,
                dialogueContain = this.$refs.dialogue_contain,
                dialogueHint =  this.$refs.dialogue_hint
              dialogueContain.innerHTML += '<p class="dialogue-service-contain"><img class="avatar" src='+ this.avator_src +'><span class="dialogue-text dialogue-service-text" id="'+uid+'">' + data+ '</span></p>';
              dialogueContain.scrollTop = dialogueContain.scrollHeight;
        },
        fadeOut(obj){
            var n = 100;
            var time = setInterval(function() {
            if (n > 0) {
                n -= 10;
                obj.style.opacity = '0.' + n;
            } else if (n <= 30) {
                obj.style.opacity = '0';
                clearInterval(time);
            }
        }, 10);
        return true;
        },
     fadeIn(obj){
        var n = 30;
        var time = setInterval(function() {
        if (n < 90) {
            n += 10;
            obj.style.opacity = '0.' + n;
        } else if (n >= 80) {

            obj.style.opacity = '1';
            clearInterval(time);
        }
    }, 100);
    return true;
     },
    }
    }
    </script>

<style>
.avatar{
    width:35px;
    height:35px;
    border-radius: 50%;
}
.dialogue-wrapper {
    font-size: 14px;
    color: #fff;
    z-index: 9999;

}
/*底部客服对话框*/
.dialogue-wrapper .dialogue-main {
     z-index: 9999;
    position: fixed;
    display: none;
    right: 100px;
    bottom: 10px;
    width: 400px;
    height: 600px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    background: #fff;
    /* border:1px solid red; */
}

/*客服对话框头部*/
.dialogue-wrapper .dialogue-main .dialogue-header {
    position: relative;
    padding: 10px;
    height: 80px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    background-color: #5d94f3;
}

.dialogue-wrapper .dialogue-main .dialogue-close {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 2px;
    font-size: 22px;
    /* transform: rotate(90deg); */
    cursor: pointer;
    width:24px;
    height:30px;
    z-index: 9999;
    /* border:1px solid red; */
}

.dialogue-wrapper .dialogue-main .dialogue-service-info {
    position: relative;
    top: 50%;
    margin-top: -20px;
    height: 40px;
}

.dialogue-wrapper .dialogue-main .dialogue-service-img {
    display: inline-block;
    margin: 0 10px 0 20px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    color: #000;
    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
    background-color: #fff;
}

.dialogue-wrapper .dialogue-main .dialogue-service-title {
    display: inline-block;
    vertical-align: middle;
}

.dialogue-wrapper .dialogue-main .dialogue-service-detail {
    font-size: 12px;
}

/*客服对话框内容*/
.dialogue-wrapper .dialogue-main .dialogue-contain {
    overflow-y: auto;
    padding: 10px;
    height: 380px;
    width:100%;
    word-wrap: break-word;
    /* border:1px solid red; */
    background-color: #f9f9f9;
}

.dialogue-wrapper .dialogue-main .dialogue-text {
    display: inline-block;
    position: relative;
    padding: 10px;
    max-width: 120px;
    white-space: pre-wrap;
    border: 1px solid #09d07d;
    border-radius: 4px;
    background-color: #09d07d;
    box-sizing: border-box;
}

.dialogue-wrapper .dialogue-main .dialogue-service-contain {
    margin-bottom: 10px;
    text-align: left;
}

.dialogue-wrapper .dialogue-main .dialogue-service-text {
    margin-left: 20px;
}

.dialogue-wrapper .dialogue-main .dialogue-service-text:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 10px solid #09d07d;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}

.dialogue-wrapper .dialogue-main .dialogue-customer-contain {
    margin-bottom: 10px;
    text-align: right;
}

.dialogue-wrapper .dialogue-main .dialogue-customer-text {
    margin-right: 20px;
}

.dialogue-wrapper .dialogue-main .dialogue-customer-text:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid #09d07d;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}

/*客服对话框底部与输入*/
.dialogue-wrapper .dialogue-main .dialogue-submit {
    position: relative;
    padding: 10px;
    height: 100px;
    color: #000;
    word-wrap: break-word;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    background: #fff;
}

/*空输入提示*/
.dialogue-wrapper .dialogue-main .dialogue-hint {
    position: absolute;
    top: -15px;
    left: 20px;
    padding: 2px;
    width: 140px;
    height: 18px;
    opacity: 0;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .4);
    background-color: #fff;
}

.dialogue-wrapper .dialogue-main .dialogue-hint-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    vertical-align: middle;
    line-height: 18px;
    color: #fff;
    border-radius: 50%;
    background-color: #5d94f3
}

.dialogue-wrapper .dialogue-main .dialogue-hint-text {
    display: inline-block;
    vertical-align: middle;
}

/*输入框*/
.dialogue-wrapper .dialogue-submit .dialogue-input-text {
    overflow-y: auto;
    display: inline-block;
    padding: 5px 10px;
    width: 295px;
    height: 70px;
    vertical-align: middle;
    white-space: pre-wrap;
    word-wrap: break-word;
    resize: none;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
}

.dialogue-wrapper .dialogue-submit .dialogue-input-tools {
    display: inline-block;
    width: 80px;
    height: 80px;
    vertical-align: middle;
}
.send_btn{
    background:#5d94f3;
    padding: 6px;
    border-radius: 8px;
    width: 65px;
    color:#fff;
    text-align: center;
    border: 1px solid white;
    /* box-shadow: 0 0 3px #879eee; */
    margin: 6px 10px 0 10px;
    /* overflow: hidden; */
}
/* ul,li{ padding:0;margin:0;list-style:none} */
/* .skin{
    position:absolute;
    background: #fff;
    box-shadow: 0 1px 3px 0
    rgba(0,0,0,0.2);
    width: 120px;
    height: 75px;
    z-index: 10000;
    visibility : hidden;
    border-radius: 3px;
    border:1px solid red;
} */
.skin {
    /* position:absolute; */
     position: fixed;
    background: #fff;
    box-shadow: 0 1px 3px 0
    rgba(0,0,0,0.2);
    width: 80px;
    height: 25px;
    text-align: center;
    z-index: 10000;
    visibility : hidden;
    border-radius: 3px;
    padding:0;
    margin:0;
}
.skin li {
    list-style: none;
    padding: 3px 12px;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    /* transition: all 120ms ease-in-out; */
/* } */
}
 /* li:hover {
    background: #f3f3f3;
} */
.draw-text{
    display: inline-block;
    color:#afafaf;
    text-align: center;
    width:100%;
    height:20px;
    margin:0 auto;
    /* border:1px solid red; */
}
</style>