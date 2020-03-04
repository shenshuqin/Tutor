<template>
<div class="publish">
    <div class="jy-main clearfix">
        <div class="min-width">
            <div class="jy-content">
                <div class="module-box">
                    <div class="module-head clearfix">
                        <h1>我的隐私</h1>
                    </div>
                    <div class="module-body">
                         <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="黑名单" name="first">
                                 <el-table
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作">
                                </el-table-column>
                                </el-table>
                            </el-tab-pane>
                            <el-tab-pane label="他人动态" name="second">他人动态</el-tab-pane>
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
        activeName: 'first'
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