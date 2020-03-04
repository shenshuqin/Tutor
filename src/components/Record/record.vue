<template>
<div class="publish">
    <div class="jy-main clearfix">
        <div class="min-width">
            <div class="jy-content">
                <div class="module-box">
                    <div class="module-head clearfix">
                        <h1>记录</h1>
                    </div>
                    <div class="module-body">
                         <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="交易记录" name="first">交易记录</el-tab-pane>
                            <el-tab-pane label="全部记录" name="second">全部记录</el-tab-pane>
                            <el-tab-pane label="浏览记录" name="third">浏览记录</el-tab-pane>
                        </el-tabs>
                    </div>
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
        activeName: 'second'
      }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
.module-head{
    padding:15px 20px 0;
    line-height: normal;
    position:relative;
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
.module-body {
    padding: 20px;
}

</style>