<template>
  <div class="publish">
    <div class="jy-main clearfix">
      <div class="min-width">
        <div class="jy-content">
          <div class="module-box">
            <div class="module-head clearfix">
              <h1>业务</h1>
            </div>
            <div class="module-body">
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="bizId" label="ID" width="200">
                </el-table-column>
                <el-table-column prop="createTime" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="type" label="类型" width="80">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="100">
                </el-table-column>
                <el-table-column prop="course" label="课程时间" width="180">
                </el-table-column>
                <el-table-column prop="type" width="80" label="状态">
                </el-table-column>
              </el-table>
              <el-pagination layout="prev, pager, next" :total="100">
              </el-pagination>
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
import testApi from '@/api/api'
export default {
  name: 'Publish',
  components: {
    PersonalHeader,
    PersonalList
  },
  data () {
    return {
      activeName: 'second',
      userRole: 'user',
      page: 1,
      amount: 30,
      tableData: []
    }
  },
  mounted () {
    this.getBusiness(this.userRole, this.page, this.amount)
    //   console.log(this.getLocalTime(1589992626))
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getBusiness (userRole, page, amount) {
      testApi.businessList(userRole, page, amount).then(res => {
        let content = res.data.Data.Content
        for (let i = 0; i < content.length; i++) {
          let obj = {}
          obj.bizId = content[i].BizId
          obj.createTime = this.getLocalTime(content[i].CreateTime)
          obj.type = content[i].Type
          obj.name = content[i].Uuid
          let time = this.Expect(content[i].Weekday, content[i].StartTime, content[i].LastTime)
          obj.course = this.resolveTime(time)
          obj.type = content[i].Type
          this.tableData.push(obj)
        }
        console.log(content)
      }).catch(err => {
        console.log(err)
      })
    },
    getLocalTime (date) {
      return new Date(parseInt(date) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
    },
    // 解析期望时间
    resolveTime (str) {
      var ExpectArr = str.split(',')
      // 解析星期
      var WeekNum = ExpectArr[0]
      var week = {
        '1': '周一',
        '2': '周二',
        '3': '周三',
        '4': '周四',
        '5': '周五',
        '6': '周六',
        '7': '周日'
      }
      var WeekTime = week[WeekNum]
      // 解析时间
      var ClockNum = ExpectArr[1]
      var a = Math.floor((ClockNum * 30) / 60)
      var b = (ClockNum * 30) % 60
      // console.log("b1",b) //0
      b = b == '0' ? b + '0' : b
      // console.log("b2",b) //0   这里??????
      var ClockTime = a + ':' + b
      // console.log("ClockTime",ClockTime);
      // 解析持续时间
      var EndNum = ExpectArr[2]
      var aa = Math.floor((EndNum * 30) / 60)
      var aEnd = Number(a) + Number(aa)
      var bb = (EndNum * 30) % 60
      bb = bb == '0' ? bb + '0' : bb // 这里??????明明一样耶结果却不一样
      var EndTime = aEnd + ':' + bb
      return WeekTime + ' ' + ClockTime + '~' + EndTime
    },
    Expect (ExpectWeek, ExpectStart, ExpectLast) {
      let arr = []
      arr.push(ExpectWeek)
      arr.push(ExpectStart)
      arr.push(ExpectLast)
      return arr.join(',')
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
  /* border:1px solid red; */
}
.module-body .el-table td,
.el-table th {
  text-align: center;
}
.el-pagination {
  margin-top: 20px;
}
</style>
