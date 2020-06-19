<template>
  <div class="publish">
    <div class="jy-main clearfix">
      <div class="min-width">
        <div class="jy-content">
          <div class="module-box">
            <div class="module-head clearfix">
              <h1>我的订单</h1>
            </div>
            <div class="module-body">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="first">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="Status" label="商品名称" width="180">
                    </el-table-column>
                    <!-- <el-table-column
                                    prop="name"
                                    label="金额"
                                    width="180">
                                </el-table-column> -->
                    <el-table-column prop="Msg" label="状态">
                    </el-table-column>
                    <el-table-column prop="address" label="操作">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label='待确定' name="second"></el-tab-pane>
                <el-tab-pane label='进行中' name="third"></el-tab-pane>
                <el-tab-pane label='已完成' name="forth"></el-tab-pane>
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
import testApi from '@/api/api'
import { getCookie, setCookie, delCookie } from '@/util/util.js'
import PersonalHeader from '../Personal/personalheader'
import PersonalList from '../Personal/personallist.vue'
export default {
  name: 'Publish',
  components: {
    PersonalHeader,
    PersonalList
  },
  data () {
    return {
      activeName: 'first',
      tableData: []
    }
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getOrder () {
      let outTradeId = sessionStorage.getItem('outTradeId')
      let obj = {
        'outTradeId': outTradeId
      }
      testApi.checkoutOrder(obj).then(res => {
        console.log(res, '数据')
        let Data = res.data.Data
        this.tableData.push(Data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.min-width {
  width: 1200px;
  margin: 0 auto;
}
.jy-main .jy-content {
  margin: 0 0 0 10px;
  width: 74%;
  float: left;
}
.module-box {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background: #fff;
}
.module-box:last-child {
  margin-bottom: 0;
}
.menu-box {
  background: #fff;
  border-bottom: 2px solid #409eff;
  border-top: none;
  height: 42px;
}
.module-head {
  padding: 15px 20px 0;
  line-height: normal;
  position: relative;
}
.module-head h1 {
  font-size: 16px;
  line-height: 16px;
  float: left;
  font-weight: 700;
  white-space: nowrap;
}
.module-head h1:before {
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
