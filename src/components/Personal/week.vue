<template>
  <div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="16%" center>
      <span style="text-aligin:center"><i class="el-icon-warning icons"></i>确认添加为空间时间</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false;addevent($event, click_elem)">确 定</el-button>
      </span>
    </el-dialog>
    <!--el-dialog end  -->
    <div class="week-header">
      <div class="explain">
        <span></span>
        <span>空闲</span>
        <span></span>
        <span>期望时间</span>
        <span></span>
        <span>不可占用</span>
      </div>
      <div class="jia">
        <!-- <button @click="submit()">提交</button> -->
        <router-link to='/orderinfo' v-if="isStudent">
          <el-button icon="el-icon-warning-outline" @click="submit()">提交申请</el-button>
        </router-link>
        <router-link to='' v-else>
          <el-button icon="el-icon-warning-outline">申请请假</el-button>
        </router-link>
      </div>
    </div>
    <table style="table-layout: fixed">
      <thead>
        <tr align="center" id="table-box">
          <th style="width:40px">时间</th>
          <th colspan="2" v-for="(item, index) in week" :key="index">
            <el-tooltip :content="item" placement="top">
              <div class="time-line">{{item}}</div>
            </el-tooltip>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indexs) in calender" :key="indexs">
          <td>{{item.time}}</td>
          <td class="td-box" v-for="(content, index) in item.event" :key="index">
            <div :id="`row${indexs}col${index}` " class="date_box">
              <!-- {{:class="item.expectTime[index]==true?'demand':' '"}} -->
              <!-- 教员点击事件delSelected有效,学员无效 -->
              <div class='eventlist' v-if="content" @click="isStudent||delSelected($event, item, index)">
                <!-- 学员显示checkbox,教员不显示 -->
                <div class="check-box" v-if="isStudent">
                  <label class="checkBoxStyle">
                    <input class="inputstyle" type="checkbox" name="checkList" value=" "
                      v-model="item.stuChecked[index]" @change="getTime" />
                    <span class="spanStyle inputStyleDemo"></span>
                  </label>
                </div>
              </div>
              <!-- eventlist end -->
              <div class="addevent" v-show="!isStudent" v-on:click="newEvent($event, item, index)" v-else>
                <i class="el-icon-edit"></i>
                new
              </div>
              <!-- addevent end -->
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['status', 'free', 'expect'],
  data () {
    return {
      id: 0,
      demandTime: false,
      // calender:[],
      week: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      calender: [
        {
          time: '周一',
          event: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周二',
          event: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周三',
          event: [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周四',
          event: [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周五',
          event: [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周六',
          event: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          time: '周日',
          event: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          stuChecked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
          expectTime: [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        }
      ],
      isStudent: this.status,
      click_elem: {
        dataObj: null,
        elem: null,
        eventInd: 0
      },
      centerDialogVisible: false,
      checked: false,
      form: {
        name: '',
        type: [],
        resource: '有空'
      },
      formLabelWidth: '60px',
      value1: '',
      result: [],
      timeArr: []

    }
  },
  // 使用Watch来监听父组件传递过来的free,不然刷新会undefined
  watch: {
    free: function (newValue) {
      this.calender.forEach((item, index) => {
        for (let i = 0; i < newValue.length; i++) {
          this.calender[index].event = newValue[index]
        }
      })
    },
    expect: function (newValue) {
      this.calender.forEach((item, index) => {
        for (let i = 0; i < newValue.length; i++) {
          this.calender[index].expectTime = newValue[index]
        }
      })
      this.isStudent && setTimeout(this.demand, 100)
    }
  },
  mounted () {
    this.toggle()
    // console.log(this.calender,"选中")
  },
  methods: {
    getTime () {
      console.log(this.calender, '选中')
    },
    demand () {
      let demandArr = [], freeArr = []
      let arr = []
      let box = document.getElementsByClassName('date_box')
      this.calender.forEach(v => {
        freeArr.push(v.event)
        demandArr.push(v.expectTime)
      })
      // console.log(demandArr)
      demandArr.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
          if (item[i] == true) {
            let id = 'row' + index + 'col' + i
            var obj = document.getElementById(id)
            let child = obj.children[0]
            if (child.getAttribute('class') == 'eventlist') {
              child.style.backgroundColor = '#FF5722'
            } else {
              obj.style.backgroundColor = '#FF5722'// 背景色置为高亮
            }
          }
        }
      })
    },
    submit () {
      let arr = []
      let time_li = []
      this.calender.forEach(v => {
        arr.push(v.stuChecked)
      })
      // console.log(arr);
      arr.forEach((item, index_day) => {
        let expect_li = []
        let prev = false// 表示前一个的值
        let cur_index = -1// 表示expect_li数组中最后一个元素的索引
        item.forEach((item, index) => {
          if (!prev && item) { // false-> true
            expect_li.push([index_day + 1, index + 16, 1])// 记录日期,开始时间,持续时间为1
            cur_index++// 索引+1
          }
          if (prev && item) { // true -> true
            expect_li[cur_index][2]++// 持续时间+1
          }
          prev = item// 记录当前的值
          // console.log("prev=", prev, "expect_li = ", expect_li);
        })

        // 将每个期望时间数组转换成字符串形式
        if (expect_li.length !== 0) {
          expect_li.forEach(item => {
            time_li.push(item.toString())
          })
        }
      })
      // console.log(time_li)
      sessionStorage.setItem('bussinessTime', JSON.stringify(time_li))
      //  console.log(JSON.parse(sessionStorage.getItem('bussinessTime')),"000000")
    },
    // 通过字段分组
    groupArr (arr) {
      var map = {}, dest = []
      for (var i = 0; i < arr.length; i++) {
        var ai = arr[i]
        if (!map[ai.week]) {
          dest.push({
            week: ai.week,
            startTime: ai.startTime,
            sustainTime: ai.sustainTime,
            data: [ai]
          })
          map[ai.week] = ai
        } else {
          for (var j = 0; j < dest.length; j++) {
            var dj = dest[j]
            if (dj.week == ai.week) {
              dj.data.push(ai)
              break
            }
          }
        }
      }
      return dest
    },
    // 点击某个div盒子就添加样式
    toggle () {
      $('.date_box').click(function () {
        $('.date_box').removeClass('selected')
        $(this).addClass('selected')
      })
    },
    addevent (event, clickEl) {
      // 将事件名称赋值给calender中对应的成员,clickEl为全局变量
      // console.log(this.form.resource);
      clickEl.dataObj.event[clickEl.eventInd] = true
      // console.log("event", this.calender)
      // for(var i=0;i<this.calender.length;i++){
      //   var item = this.calender[i];
      //   console.log(item)
      // }
    },
    newEvent (event, item, index) {
      // 对象是引用数据类型 作为参数传递时 复制了指向该对象的指针 故可以对该对象进行修改
      let el = event.target
      this.centerDialogVisible = true
      // this.cick_elem 作为全局变量的对象以引用传递的方式将calender的item,event的Index传递过来
      this.click_elem.dataObj = item
      this.click_elem.eventInd = index
    },
    delSelected (event, item, index) {
      this.click_elem.dataObj = item
      this.click_elem.eventInd = index
      this.open(event, this.click_elem)
    },
    open (event, clickEl) {
      // console.log(clickEl)
      this.$confirm('此操作将删除该空闲时间, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('0', clickEl)
        // clickEl.dataObj.event[clickEl.eventInd] = "";
        //  this.$set可以解决数据更新,视图不更新的问题,$.set(需要更新的arr/obj,index/key,改变后的value)
        this.$set(clickEl.dataObj.event, clickEl.eventInd, '')
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style>
</style>
<style scoped>
#table-box th {
  background-color: #20c997;
  border-left: #20c997;
  color: #fff;
  width: 30px;
  height: 30px;
  /* border:1px solid red; */
}
#table-box th:nth-of-type(1) {
  /* width:120px !important; */
  /* border-right:1px solid #ccc; */
}
.time-line {
  height: auto;
  display: inline-block;
  font-size: 12px;
  transform-origin: 50% 50%;
  transform: scale(0.6);
  /* border:1px solid red; */
  margin: 0 auto;
}
.week-header {
  width: 100%;
  height: 56px;
  padding: 8px 0;
  display: flex;
  margin: 0 auto;
  /* border:1px solid red; */
  /* flex-direction: row-reverse; */
}
.week-header .explain {
  width: 50%;
  padding: 10px 0;
  /* height:56px; */
  /* border:1px solid red; */
}
.week-header .explain span:nth-of-type(1) {
  width: 22px;
  height: 12px;
  border-radius: 8px;
  background: #b7dbd1;
  vertical-align: middle;
  display: inline-block;
}
.week-header .explain span:nth-of-type(3) {
  width: 22px;
  height: 12px;
  border-radius: 8px;
  background: #ff5722;
  vertical-align: middle;
  display: inline-block;
}
.week-header .explain span:nth-of-type(5) {
  width: 22px;
  height: 12px;
  border-radius: 8px;
  background: #ccc;
  vertical-align: middle;
  display: inline-block;
}
.jia {
  width: 50%;
  margin-right: 0px;
  display: flex;
  flex-direction: row-reverse;
  /* border:1px solid red; */
}
.week-header .el-button-group {
  width: 50%;
  margin-right: 0px;
  display: flex;
  flex-direction: row-reverse;
  /* border:1px solid red; */
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
}
tr,
th,
td {
  width: 50px;
  height: 35px;
  position: relative;
  font-size: 12px;
  border: 1px solid #ccc;
}
.date_box {
  width: 100%;
  height: 35px;
  z-index: 9999;
  /* background-color: #ff9224; */
  word-wrap: break-word;
  /* border:1px solid red; */
}
td :hover .addevent {
  opacity: 1;
  cursor: default;
  transition: opacity 0.15s linear;
}
.addevent {
  opacity: 0;
  font-size: 12px;
}
.month_event {
  width: 100%;
  margin-left: -38px;
}
.eventlist {
  /* border:1px solid red; */
  z-index: 0;
  text-align: left;
  width: 100%;
  height: 100%;
  line-height: 35px;
  font-size: 16px;
  background: #b7dbd1;
  word-wrap: break-word;
  text-align: center;
  position: relative;
}
.event_cont {
  color: #25bb9b;
}
.event_cont:before {
  background: #009688;
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.eventlist p:nth-of-type(2) {
  margin-left: 8px;
}
.month_event li a {
  display: inline-block;
  font-size: 12px;
  margin-left: 4px;
  color: #b2b7bf !important;
}
.month_event li:hover {
  background: #ceeafb;
}
.td-box {
  position: relative;
}
.el-dialog {
  width: 20% !important;
  text-align: center;
}
.icons {
  font-size: 18px;
  color: #ff9224;
  margin-right: 10px;
}
.el-date-picker table {
  table-layout: auto !important;
  width: 100%;
}
.check-box {
  display: inline-block;
  width: 30px;
  height: 30px;
  /* border:1px solid red; */
  position: absolute;
  right: -2px;
  top: 2px;
}
.checkBoxStyle {
  display: inline-block;
}
.inputstyle {
  display: none;
}
.inputStyleDemo {
  background-color: #fff;
  border: 1px solid #e2e2e2;
  box-shadow: 0px -1px 0px 0px #f2f2f2 inset,
    /*上边阴影  红色*/ -1px 0px 0px 0px #f2f2f2 inset,
    /*左边阴影  绿色*/ 1px 0px 0px 0px #f2f2f2 inset,
    /*右边阴影  蓝色*/ 0px 1px 0px 0px #f2f2f2 inset; /*下边阴影  黄色*/
  border-radius: 50%;
  overflow: hidden;
  display: block;
  height: 18px;
  width: 18px;
  position: relative;
  box-sizing: border-box;
}
.inputstyle:checked + .inputStyleDemo:after {
  content: "";
  position: absolute;
  border-color: #01aaed;
  border-style: solid;
  border-width: 0 2px 2px 0;
  width: 8px;
  height: 12px;
  top: 0px;
  left: 4px;
  transform: rotate(45deg);
}
</style>
