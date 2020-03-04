<template>
<div class="publish">
    <div class="jy-main clearfix">
        <div class="min-width">
            <div class="jy-content">
                <div class="module-box">
                    <div class="menu-box">
                        <ul class="menu clearfix">
                            <li class="selected"><a>我的关注</a></li>
                        </ul>
                    </div>
                    <div class="module-head clearfix">
                        <h1><span>我关注的</span></h1>
                    </div>
                    <ul class="media-list">
                        <li class="media">
                            <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../../assets/images/03.png" alt="">
                            </a>
                            </div>
                            <div class="media-body">
                            <h4 class="media-heading">李老师</h4>
                               XXXXXXXXtttttttttttttttttttttttttttttt
                            </div>
                        </li>
                         <li class="media">
                            <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../../assets/images/02.png" alt="">
                            </a>
                            </div>
                            <div class="media-body">
                            <h4 class="media-heading">李老师</h4>
                               XXXXXXXXxxxdddddddddddddddddddddddd
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- module-box end -->
            </div>
            <!-- jy-content end -->
        </div>
        <!-- min-width end -->
    </div>
    <!-- jy-main end -->
</div>
</template>
<script>
import PersonalHeader from '../Personal/personalheader'
import PersonalList from '../Personal/personallist.vue'
export default {
     name: 'Publish',
     components: {
        PersonalHeader,
        PersonalList
    },
  data() {
      return {
      }
  },
  methods: {
    
  },
}
</script>
<style scoped>
 .min-width{
    width:1200px;
    margin:0 auto;
}
.jy-main .jy-content{
    margin:0 0 0 10px;
    width:74%;
    float:left;
}
.module-box{
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    background: #fff;
}
.module-box:last-child{
    margin-bottom:0;
}
.menu-box {
    background: #fff;
    border-bottom: 2px solid #409EFF;
    border-top: none;
    height:42px;
}
.menu{
    /* float:left; */
    /* display:flex; */
    /* justify-content:space-between; */
    white-space: nowrap;
    margin-left:-41px;
}
.menu li{
    /* letter-spacing: 0; */
    display:inline-block;
    position:relative;
}
.menu li:nth-of-type(1){
    float:left;
}
.menu li:nth-of-type(2){
    float:right;
    line-height: 43px;
    margin-right: 6px;
    /* border:1px solid red; */
}
.menu li.selected{
    background:#409EFF;
    color:#fff;
}
.menu li a {
    display: block;
    padding: 0 20px;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    text-align: center;
    /* color: #333; */
    white-space: nowrap;
}
.module-head {
    padding: 15px 20px 0;
    line-height: normal;
    position: relative;
}
.module-head h1{
    font-size: 16px;
    line-height: 16px;
    float: left;
    font-weight: 700;
    white-space: nowrap;
}
.module-head h1:before{
    background: #ff6547;
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.media{
    margin-top:10px;
    border:1px solid #ebebeb;
}
.media-object{
    width:95px;
    height:65px;
}
.media-body{
    margin-left:10px;
}
</style>