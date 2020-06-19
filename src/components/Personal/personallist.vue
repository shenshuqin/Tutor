<template>
<div class="jy-bar">
        <div class="module-box">
            <ul class="menu">
               <router-link to="/usercenter"> <li class="selected"><a><span>个人中心</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/publish"> <li><a><span>我的发布</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/accountSetting"> <li><a><span>账号设置</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/wallet">  <li><a><span>我的钱包</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/attention"> <li><a><span>我的关注</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/business"><li><a><span>我的业务</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/collect"><li><a><span>我的收藏</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/evaluate"> <li><a><span>我的评论</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/privacy"> <li><a><span>我的隐私</span><i class="el-icon-arrow-right"></i></a></li></router-link>
               <router-link to="/usercenter/orderform"><li><a><span>订单管理</span><i class="el-icon-arrow-right"></i></a></li></router-link>
            </ul>
        </div>
          <!-- <router-view/> -->
</div>
</template>
<script>

export default {
    name: 'PersonalList',
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
 .jy-bar{
    width:25%;
    float:left;
    /* border:1px solid red; */
}
.module-box:last-child{
    margin-bottom:0;
}
.module-box{
    border:1px solid #e0e0e0;
    border-radius: 3px;
    background: #fff;
}
ul{
    list-style: none;
}
.menu{
    margin-left:-40px;
}
.selected{
    color:#409EFF;
    background: #f6f6f6;
}
.menu li{
    line-height: 40px;
    font-size:14px;
    position: relative;
    width:100%;
    margin:0;
    padding:0;
    /* border:1px solid red; */
}
.menu li:hover{
    color:#409EFF;
    background: #f6f6f6;
}
.menu a{
    display: block;
    position:relative;
}
.menu a span:nth-of-type(1){
    line-height: 40px;
    display:inline-block;
    margin-left:30px;
    /* border:1px solid red; */
}
.menu i{
    position:absolute;
    right:10px;
    top:12px;
    color:#d8d8d8;
    font-size:16px;
}
</style>