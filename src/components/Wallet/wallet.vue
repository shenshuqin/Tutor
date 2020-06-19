<template>
  <div class="publish">
    <div class="jy-main clearfix">
      <div class="min-width">
        <div class="jy-content">
          <div class="module-box">
            <div class="module-head clearfix">
              <h1>钱包</h1>
            </div>
            <div class="module-body">
              <div class="pocket-mod">
                <div class="pocket-item pocket-money">
                  <div class="pocket-item-hd"><span>账户现金余额</span></div>
                  <div class="pocket-item-cont">
                    <span class="pocket-money-num">0.0</span>
                    <el-button type="info">提现</el-button>
                    <span class="pocket-money-tips">*当前余额不足10元</span>
                  </div>
                  <div class="pocket-item-ft"><span class="name">提现支付宝号:</span><a class="nc-action">未绑定,点击绑定</a></div>
                </div>
                <div class="pocket-item pocket-nb">
                  <div class="pocket-item-hd"><span>九月币余额</span></div>
                  <div class="pocket-item-cont"><span class="pocket-money-num">0</span></div>
                  <div class="pocket-item-ft"><span>做家教,赢九月币</span></div>
                </div>
              </div>
              <div class="pocket-mod-tip">每次提现的最小额度为10元,提现会在3-5个工作日内到账。<a>常见问题</a></div>
              <!-- <table class="pocket-data-table">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                        </table> -->
              <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column prop="date" label="日期" sortable width="180">
                </el-table-column>
                <el-table-column prop="address" label="详情" :formatter="formatter">
                </el-table-column>
                <el-table-column prop="address" label="金额" :formatter="formatter">
                </el-table-column>
                <el-table-column prop="address" label="状态" :formatter="formatter">
                </el-table-column>
              </el-table>
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
  data () {
    return {
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
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
.pocket-mod {
  margin-bottom: 10px;
}
.pocket-mod-tip {
  text-align: right;
  color: #aaa;
  clear: both;
  margin: 20px 22px;
}
table {
  max-width: 100%;
  width: 100%;
  text-align: center;
  border: 1px solid #f0f0f0;
  font-size: 14px;
}
.pocket-money {
  width: 60%;
  margin-right: 5px;
}
.pocket-item {
  float: left;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 14px;
}
.pocket-nb {
  width: 36%;
}
.pocket-item-hd {
  padding: 10px 15px;
}
.pocket-item-cont {
  padding: 0 15px;
}
.pocket-money-num {
  vertical-align: middle;
  display: inline-block;
  margin-right: 10px;
  font-size: 32px;
  color: #3e3e3e;
}
.pocket-money-tips {
  color: #888;
  margin-left: 12px;
}
.pocket-item-ft {
  border-top: 1px solid #f0f0f0;
  padding: 15px;
}
.pocket-item-ft .nc-action {
  color: #25bb9b;
  padding-left: 10px;
}
.pocket-item-hd {
  padding: 10px 15px;
}
.pocket-mod-tip a {
  color: #25bb9b;
}
</style>
