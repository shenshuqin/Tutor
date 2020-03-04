<template>
     <div class="footer"> 
            <div class="footer-main">
            <div class="footer-logo"><img src="../../assets/images/c_logo.png"></div>
              <div class="footer-about">
                <ul>
                    <li>关于我们</li>
                    <li>九月</li>
                    <li>公司简介</li>
                </ul>
           </div>
            <div class="footer-index">
                <ul>
                    <li>首页</li>
                    <li>兼职</li>
                    <li>会员中心</li>
                    <li>服务中心</li>
                    <li>个人中心</li>
                </ul>
            </div>
          
           <div class="footer-contact">
               <ul>
                   <li>联系我们</li>
                   <li>客服电话</li>
                   <li>0736-7266166</li>
                   <li>商务合作邮箱</li>
                   <li>dhf@lonltech.com</li>
               </ul>
           </div>
           <div class='footer-code'>
           <div class="code-box">
               <img src="../../assets/images/wx.jpg">
               <span>关注微信公众号</span>
           </div>
           <div class="code-box">
               <img src="../../assets/images/wx.jpg">
               <span>下载客户端</span>
           </div>
           </div>
        </div>
         <div class="footer-foo">
               <p>Copyright©2019 常德市龙呤科技有限公司版权所有</p>
               <p>公司地址:湖南省常德市武陵区白马湖街道长家山社区洞庭大道|湖南文理学院厚德楼2楼201</p>
               <p>湘ICP备19011005号</p>
           </div>
        </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
        }
    },
    created(){
        
    },
    mounted () {
   
    },
    methods: {
       
    }

}
</script>
<style  scoped>
    li, ol, ul {
        list-style: none;
    }
 .footer{
        width:100%;
        height: 320px;
        padding: 0;
        margin-top: 30px;
        color:#fff;
        /* display:flex; */
        font-size:14px;
        background-color: #3c3c3c;
    }
    .footer-main{
        width:80%;
        height:200px;
        margin:0 auto;
        /* border:1px solid red; */
    }
    .footer-logo{
        /* border:1px solid red; */
    }
    .footer-logo img{
        width:150px;
        height:32px;
        margin-top:-53px;
        margin-left: -78px;
    }
   .footer-logo,.footer-index,.footer-about,.footer-code,.footer-contact{
       width:16%;
       height:200px;
       float:left;
       padding-top:30px;
       /* border:1px solid red; */
    }
    .footer-logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer-code{
        display: flex;
    }
    .code-box{    
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 70px;

    }
    .code-box img{
        width:125px;
        height:125px;
    }
     .footer ul{
         /* border:1px solid red; */
         margin-left:-30px;
     }
      .footer ul li{
          margin-bottom: 8px;
      }
     .footer ul li:nth-of-type(1){
         font-size:16px;
         margin-bottom: 10px;
     }
     .footer-foo{
         width:100%;
         height:100px;
         margin-top:20px;
         /* border:1px solid red; */
     }
     .footer-foo p{
         width:100%;
         letter-spacing: 2px;
         text-align: center;
         padding: 0;
         margin:0px;
     }
     .footer-foo p:nth-of-type(1){
         margin-bottom:10px;
     }
      .footer-foo p:nth-of-type(2){
         margin-bottom:10px;
     }
</style>