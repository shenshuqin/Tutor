<template>
<div  class="help">
    <div class="search_container">
        <div class="search_main">
             <el-input placeholder="请输入问题" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
    <!--search-container end  -->
    <div class="hot-questions">
        <div class="min-width clearfix">
            <div class="list_tiyle"><span>常见问题</span></div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="金融问题" name="first">
                <div class="rule clearfix">
                    <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>发财小技巧</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>发财小技巧</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>发财小技巧</a></span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="防骗常识" name="second">
                <div class="rule clearfix">
                    <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>识别黑中介</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>识别黑中介</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>识别黑中介</a></span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="账户问题" name="third">
                <div class="rule clearfix">
                    <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>如何账户注销</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>如何账户注销</a></span>
                    </div>
                     <div class="rule-list">
                        <i class="el-icon-caret-right"></i>
                        <span><a>如何账户注销</a></span>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <div class="complaint">
             <router-link to="/accuse">
              <div class="comp_btn">我要投诉</div>
             </router-link>
        </div>
        </div>
    </div>
    <!--hot-questions end  -->
     <div class="self_server">
        <div class="min-width">
            <div class="list_tiyle"><span>账号管理</span></div>
            <div class="self_list">
                <div class="list_group">
                    <div class="group-img">
                        <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/找回密码.png" alt="找回密码">
                    </div>
                    <div class="group-title"><span>找回密码</span></div>
                </div>
                <div class="list_group">
                    <div class="group-img">
                        <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/我要投诉.png" alt="我要投诉">
                    </div>
                    <div class="group-title"><span>我要投诉</span></div>
                </div>
                <div class="list_group">
                    <div class="group-img">
                       <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/手机被冒用.png" alt="手机被冒用">
                    </div>
                    <div class="group-title"><span>手机被盗用</span></div>
                </div>
                <div class="list_group">
                    <div class="group-img">
                        <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/换绑认证手机.png" alt="换绑认证手机">
                    </div>
                    <div class="group-title"><span>换绑认证手机</span></div>
                </div>
            </div>
            <!-- self_list end -->
        </div>
    </div>
    <!-- sellf-container end -->
    <div class="contact-us">
        <div class="min-width">
             <div class="list_tiyle"><span>联系我们</span></div>
             <div class="contact-main">
                 <div class="contact-item">
                     <div class="contact-title">
                        <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/%E7%83%AD%E7%BA%BF%E7%94%B5%E8%AF%9D.png" alt="">
                         <span>热线电话</span>
                     </div>
                     <div class="contact-desc">主要服务时间:09:00-18:00</div>
                     <div class="contact-btn"><a>查看电话</a></div>
                 </div>
                 <div class="contact-item">
                       <div class="contact-title">
                        <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/bangbang.png" alt="">
                         <span>在线客服</span>
                     </div>
                     <div class="contact-desc">在线解答您的咨询,高效便捷</div>
                     <div class="contact-btn"><a>点击咨询</a></div>
                 </div>
                 <div class="contact-item">
                       <div class="contact-title">
                       <img src="//img.58cdn.com.cn/resource/xxzl/helpCenter/%E7%BD%91%E7%AB%99%E5%BB%BA%E8%AE%AE.png" alt="">
                         <span>网站建议</span>
                     </div>
                     <div class="contact-desc">对我们提建议</div>
                     <div class="contact-btn"><a>我要留言</a></div>
                 </div>
             </div>
        </div>
    </div>
    <!-- contact-us end -->
</div>
</template>

<script>
export default {
    name: 'Help',
    data () {
        return {
            input3: '',
            activeName: 'first'
        }
    },
    created(){

    },
    mounted () {
    
    },
    methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>
<style scoped>
.search_container {
    width: 100%;
    height: 130px;
    background:#409EFF;
}
.search_main{
    width:900px;
    line-height:130px;
    margin:0px auto;
    /* border:1px solid red; */
}
.list_tiyle span{
    font-size:20px;
    line-height: 20px;
    color:#222222;
    font-weight:600;
}
.self_server{
    margin-top:30px;
}
.self_list{
    padding:30px 0 66px 67px;
    display:flex;
}
.list_group{
    display:inline-block;
    width:25%;
    display:flex;
    flex-direction: column;
    /* border:1px solid red; */
}
.group-img{
    width:110px;
    height:80px;
}
.group-title{
    width:180px;
    padding:0px 12px;
    font-size:16px;
    /* border:1px solid red; */
}
.hot-questions{
    margin-top:40px;
    /* border:1px solid red; */
}
.el-tabs{
    width:60%;
    float:left;
    margin-top:30px;
    /* border:1px solid red; */
}
.complaint{
    width:36%;
    float:left;
    height:120px;
    margin:0 auto;
    /* border:1px solid red; */
}
.comp_btn{
    width:120px;
    height:40px;
    color:#fff;
    font-size:16px;
    letter-spacing: 3px;
    line-height: 40px;
    margin:80px 160px;
    text-align: center;
    border-radius: 5px;
    background: #FB9A36;
}
.rule{
    /* display:flex; */
    width:100%;
    /* height:300px; */
    overflow: hidden;
    /* border:1px solid red; */
}
.rule-list{
    display:inline-block;
    width:50%;
    float:left;
    margin-bottom:24px;
    padding-left:30px;
    /* border:1px solid red; */
}
.rule_list span a {
    font-size: 14px;
    line-height: 14px;
    color: #333333;
}
.contact-us{
    margin-top:30px;
}
.contact-main{
    width:100%;
    margin-top:30px;
    display:flex;
}
.contact-item{
    width:33%;
    display:inline-block;
    position:relative;
    height:236px;
    background: #fff;
    border-radius: 4px;
    text-align: center;
    margin-right:25px;
}
.contact-title{
    margin-top:30px;
}
.contact-title img{
    vertical-align: text-bottom;
}
.contact-title span{
    font-size: 14px;
    line-height: 18px;
    color: #FB9A36;
    margin-left: 12px;
}
.contact-desc{
    margin-top: 48px;
    font-size: 14px;
    line-height: 14px;
    color: #666666;
}
.contact-btn{
    position: absolute;
    left: 50%;
    margin-left: -65px;
    margin-top: 58px;
    background-color: #65A5FC;
    width: 130px;
    height: 40px;
    border-radius: 21px;
    cursor: pointer;
}
.contact-btn a{
    font-size: 14px;
    line-height: 14px;
    display: block;
    padding-top: 13px;
    color: #ffffff;
}
</style>