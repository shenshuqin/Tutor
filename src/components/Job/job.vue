<template>
  <div class="job">
    <div class="search">
      <div class="min_width">
        <div class="search-box">
          <div class="search-form">
            <!-- <form action="" method="get"> -->
            <div class="search-form-con">
              <p class="ipt-wrap">
                <input type="text" class="ipt-search" maxlength="50" autocomplete="off" placeholder="搜索科目" ref="search"
                  @keyup.enter="submit()" @focus="focusfns" @blur="blurfns" />
              </p>
            </div>
            <div class="btn-search" ka="search_box_index" @click="search();submit()">
              <i class="el-icon-search"></i>
            </div>
            <!-- </form> -->
          </div>
          <searchHistory ref="mychild" v-show="flag" :parentmsg="flag"></searchHistory>
          <!-- <div class="search-hot">
                        <b>热门职位</b>
                           <span name="hot" @click="selected_term($event)" v-for="(item ,index) in term.hot" :key="index" :id="item.id">{{item.name}}</span>
          </div>-->
        </div>
      </div>
    </div>
    <!-- search end -->
    <div class="content">
      <div class="min_width clearfix">
        <div class="c-left">
          <div class="con-wrap">
            <div class="search-filter-current clearfix">
              <!-- <span class="label">已选条件:</span>
              <div class="selected"><el-tag  @close="handleClose(item)" v-for="(item,index) in selected" :key="index" size="small" closable>{{item}}</el-tag></div>-->
            </div>
          </div>
          <!-- 当前选择end -->
          <div class="search-filter-list">
            <div class="search-group clearfix filter-top">
              <div class="search-group-left">
                <label>角色</label>
              </div>
              <div class="search-group-right">
                <span name="Role" :class="isactive == index ? 'active' : '' "
                  @click="selected_termR($event);onclick(index)" v-for="(item ,index) in term.Role" :key="index"
                  :id="item.Id">{{item.Name}}</span>
              </div>
            </div>
            <div class="search-group clearfix">
              <div class="search-group-left">
                <label>科目</label>
              </div>
              <div class="search-group-right">
                <span name="Subject" @click="selected_term($event)" v-for="(item ,index) in term.Subject" :key="index"
                  :id="item.Id">{{item.Name}}</span>
              </div>
            </div>
            <div class="search-group clearfix">
              <div class="search-group-left">
                <label>年级</label>
              </div>
              <div class="search-group-right">
                <span name="Grade" @click="selected_term($event)" v-for="(item ,index) in term.Grade" :key="index"
                  :id="item.Id">{{item.Name}}</span>
              </div>
            </div>
            <div class="search-group clearfix">
              <div class="search-group-left">
                <label>授课时间</label>
              </div>
              <div class="search-group-right">
                <span name="Time" @click="selected_term($event)" v-for="(item ,index) in term.Time" :key="index"
                  :id="item.Id">{{item.Name}}</span>
              </div>
            </div>
            <div class="search-group clearfix">
              <div class="search-group-left">
                <label>筛选条件</label>
              </div>
              <div class="search-group-right">
                <el-select v-model="value1" placeholder="综合排序" @change="sort">
                  <el-option v-for="item in options.optionsSum" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
                <el-select v-model="value2" placeholder="口碑" @change="sort1">
                  <el-option v-for="item in options.optionsEffect" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
                <el-select v-model="value3" placeholder="热度" @change="sort2">
                  <el-option v-for="item in options.optionsHeart" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <!-- 帅选列表 -->
          <div class="search-content">
            <ul class="main">
              <li class v-for="(item,index) in job" :key="index">
                <div class="content-left">
                  <div class="part-title">{{item.Title}}</div>
                  <div class="time-icon">{{item.Time}}</div>
                  <div class="address-icon">{{item.Addr}}</div>
                </div>
                <div class="content-center">
                  <div class="salary">{{item.Grade}}</div>
                  <div class="clearingForm">{{item.Method}}</div>
                </div>
                <div class="content-center">
                  <div class="subject">{{item.Subject}}</div>
                </div>
                <div class="content-right">
                  <div class="apply">
                    <router-link :to="{path:'/job/jobdetail',query:{id:item.Id}}">立即查看</router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--  帅选内容-->
          <el-pagination background layout="prev, pager, next" :total="pages"></el-pagination>
        </div>
        <!-- c-left end -->
        <div class="c-right">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>文章列表</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>常见问题</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>推荐</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="text item">
              <div class="item-title">金牌教员:彭老师</div>
              <div class="item-content">
                <span>科目:数学</span>
                <span>60元/次</span>
              </div>
            </div>
          </el-card>
        </div>

        <!-- c-right end -->
      </div>
      <!-- min_width end -->
    </div>
    <!-- content end -->
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import testApi from '@/api/api'
import searchHistory from '../Common/search_history.vue'
import { setCookie, getCookie } from '../../util/util.js'
export default {
  name: 'Job',
  components: {
    searchHistory
  },
  data () {
    return {
      searchArr: [],
      pages: null,
      flag: false,
      checkList: [],
      conditions: {
        Amount: 10,
        Page: 0,
        Role: 1
      },
      page: 1,
      section: {
        synth: {},
        praise: {},
        hot: {}
      },
      selected: ['教员'],
      term: {},
      options: {
        optionsSum: [
          {
            id: 'all',
            name: '综合',
            label: 'optionsSum'
          },
          {
            id: 'credit',
            name: '信用',
            label: 'optionsSum'
          }
        ],
        optionsEffect: [
          {
            id: 'publicIn',
            name: '口碑升序',
            label: ' optionsEffect'
          },
          {
            id: 'publicDe',
            name: '口碑降序',
            label: ' optionsEffect'
          }
        ],
        optionsHeart: [
          {
            id: 'heartIn',
            name: '热度升序',
            label: 'optionsHeart'
          },
          {
            id: 'heartDe',
            name: '热度降序',
            label: 'optionsHeart'
          }
        ]
      },
      job: [],
      value1: '',
      value2: '',
      value3: '',
      name: '',
      id: '',
      obj: {},
      element: '',
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + getCookie('AccessToken')
      },
      RefreshToken7: '',
      roleArr: [],
      isactive: 0
    }
  },
  created () {
    this.searchcondition()
  },
  mounted () {
    this.searchcondition()
    // var AccessToken = getCookie("AccessToken");
    // this.RefreshToken7 = getCookie("RefreshToken7");
    // var RefreshToken30 = getCookie("RefreshToken30");
    // if (!AccessToken) {
    //   console.log("token过期");
    //   this.requestToken();
    // }
    // if (!(this.RefreshToken7 && RefreshToken30)) {
    //   this.$router.push({ path: "/login" });
    // }
    this.searchAjax()
    // this.requestToken()
  },
  methods: {
    onclick (index) {
      // 将点击的元素的索引赋值给bian变量
      this.isactive = index
    },
    focusfns () {
      this.flag = true
    },
    blurfns () {
      //   this.flag=false;
    },
    submit () {
      var item = this.$refs.search.value
      if (localStorage.getItem('searchHistory')) {
        this.searchArr = localStorage.getItem('searchHistory').split(',')
      } else {
        this.searchArr = []
      }
      if (item) {
        this.searchArr.push(item)
        localStorage.setItem('searchHistory', this.searchArr) // 存入 参数： 1.调用的值 2.所要存入的数据
      }
      this.$refs.mychild.historyShow()
      this.$refs.mychild.msg = '历史记录'
      this.$refs.mychild.clear = true
    },
    // requestToken() {
    //   axios({
    //     url: "https://dev-ao5dx3e.lonltech.com:646/api/auth/reftoken",
    //     method: "post",
    //     dataType: "json",
    //     //发送格式为json
    //     data: { refreshToken: this.RefreshToken7 },
    //     headers: this.header
    //   })
    //     .then(res => {
    //       console.log("AccessToken过期");
    //       if (res.data.Succ === 1) {
    //         var AccessToken = res.data.AccessToken;
    //         var RefreshToken7 = res.data.RefreshToken;
    //         this.header.Authorization = "Bearer " + AccessToken;
    //         this.RefreshToken7 = RefreshToken7;
    //       } else {
    //         console.log("失败");
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    sort (val) {
      this.change(val, this.options.optionsSum)
    },
    sort1 (val) {
      this.change(val, this.options.optionsEffect)
    },
    sort2 (val) {
      this.change(val, this.options.optionsHeart)
    },
    searchcondition () {
      testApi.getList().then(res => {
        //  console.log(res,"list")
        if (res.status === 200) {
          this.term = res.data.Data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    change (val, sortObj) {
      // 传进来的val是select组件选中的value值，也就是一个fruitEnName
      let obj = {}
      obj = sortObj.find(function (item) {
        return item.id === val
      })
      // console.log(obj)
      // obj 就是被选中的那个对象，也就能拿到label值了。
      //  console.log(obj.label);
      //  console.log(val)//value值
      //  console.log(obj.name);
      var eName = obj.label
      var eContent = obj.name
      var eId = obj.id
      if (!this.conditions.hasOwnProperty(eName)) {
        this.conditions[eName] = ''
      }
      // this.conditions[eName].shift(); //删除数组第一个元素
      // this.conditions[eName].push(eId);
      this.conditions[eName] = eId
      // this.conditions[eName] = [...new Set(this.conditions[eName])];
      // console.log("2",this.conditions);
      // this.search();
      this.searchAjax()
    },
    search () {
      this.name = this.$refs.search.value
      // console.log("name",this.name);
      this.conditions['Title'] = this.name
      // console.log(this.conditions);
      this.searchAjax()
    },
    selected_termR (event) {
      var e = event.target
      var eId = $(e).attr('Id')
      var eName = $(e).attr('Name')
      var eContent = $(e)[0].innerHTML
      this.selected.push(eContent)
      var index = this.selected.indexOf(eContent) // -1
      this.selected.splice(0, 1, eContent)
      this.selected = [...new Set(this.selected)]
      if (eName === 'Role') {
        this.conditions[eName] = Number(eId)
      }
      console.log(this.conditions) // Role
      this.searchAjax()
    },
    selected_term (event) {
      var e = event.target
      var eId = $(e).attr('Id')
      var eName = $(e).attr('Name')
      // $(e).css("color",function(){return "red";});
      var eContent = $(e)[0].innerHTML
      this.selected.push(eContent)
      if ($(e).hasClass('active')) {
        $(e).removeClass('active')
      } else if (!$(e).hasClass('active')) {
        $(e).addClass('active')
      }
      this.selected = [...new Set(this.selected)]
      if (!this.conditions.hasOwnProperty(eName)) {
        this.conditions[eName] = ''
      }
      if (this.conditions[eName] == '') {
        this.conditions[eName] += eId
      } else {
        this.conditions[eName] += '|' + eId
      }
      var arr = this.conditions[eName].split('|')
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == arr[j + 1]) {
          arr.splice(j, 2)
        }
      }
      arr = [...new Set(arr)]
      //  console.log(arr);
      this.conditions[eName] = arr.join('|')
      // console.log(this.conditions); //subject
      this.searchAjax()
    },
    searchAjax () {
      testApi.getJob(this.conditions).then(res => {
        // console.log(res,"con");
        if (res.status === 200) {
          this.job = res.data.Data.Content
          this.pages = res.data.Data.Pages * 10
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleClose (item) {
      for (var key in this.term) {
        var arr = this.term[key]
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].Name == item) {
            var value = arr[i].Id
            var valKey = key
            if (valKey === 'Role') {
              this.conditions[key] = this.conditions[key] + ''
            }
            var conArr = this.conditions[key].split('|')
            var index = conArr.indexOf(value)
            conArr.splice(index, 1)
            var str = conArr.join('|')
            this.conditions[key] = str
            if (valKey === 'Role') {
              this.conditions[key] = Number(this.conditions[key])
            }
          }
        }
      }
      this.selected.splice(this.selected.indexOf(item), 1)
      // console.log(this.conditions)
      this.searchAjax()
    }
  }
}
</script>
<style>
.active {
  color: #409eff;
}
.search-group-right .el-input {
  border-right: 1px solid #dcdfe6;
}
.el-input__inner {
  border: 0px solid #dcdfe6 !important;
  color: #222222;
  font-weight: bolder;
}
</style>
<style scoped>
.c-right .el-card__body {
  height: 180px;
  /* border:1px solid red; */
}
</style>
<style  scoped>
.min_width {
  width: 1200px;
  margin: 0 auto;
}
.search {
  position: relative;
  z-index: 1006;
  border-bottom: 1px solid #409eff;
}
.search-box {
  width: 934px;
  margin: 15px auto;
  padding-top: 20px;
  position: relative;
  font-size: 13px;
}
.search-form {
  height: 50px;
  position: relative;
  zoom: 1;
  z-index: 1000;
  /* border:1px solid red; */
}
.search-form-con {
  width: 794px;
  float: left;
  height: 50px;
  border: 1px solid #ccc;
  /* box-shadow: 0 0 6px 0 rgba(0,0,0,.13); */
}
.position-sel {
  width: 99px;
  float: left;
  padding-top: 9px;
  padding-bottom: 11px;
  border-color: #fff;
  height: 46px;
  line-height: 35px;
  padding: 6px 15px 8px 15px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
}
.ipt-wrap {
  width: 664px;
  border-color: #fff;
  float: left;
  background: #fff;
  position: relative;
}
.ipt-search {
  width: 794px;
  font-size: 16px;
  padding: 10px 19px;
  height: 48px;
  line-height: 30px;
  border: 0;
  color: #414a60;
  margin: 0 auto;
}
.ipt-search:focus {
  outline: 1px solid #fff;
}
.btn-search {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-image: none;
  font-size: 16px;
  width: 140px;
  float: right;
  color: #fff;
  background: #409eff;
  border: 0;
  cursor: pointer;
  padding: 0;
  background-position: 34px -138px;
  min-width: 0;
  border-radius: 0px;
}
.search-hot {
  font-size: 13px;
  color: #9fa3b0;
  padding: 9px 0 26px 0;
}
.search-hot b {
  margin-right: 18px;
  font-weight: 400;
}
.search-hot span {
  cursor: pointer;
  margin-right: 22px;
  color: #409eff;
}
/* search end */
.content {
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.c-left {
  width: 78%;
  height: auto;
  float: left;
  margin-top: 30px;
  /* border:1px solid red; */
}
.c-right {
  width: 22%;
  /* height:500px; */
  padding-top: 40px;
  height: auto;
  float: left;
  /* margin-right:6px; */
  /* border:1px solid red; */
}
.con-wrap {
  max-width: 1000px;
  min-width: 930px;
  margin: 0 auto;
}
.search-filter-current {
  line-height: 30px;
  margin-bottom: 10px;
  /* border:1px solid red; */
}
.label {
  float: left;
  color: #333;
  width: 94px;
  text-align: left;
  /* padding-left:16px; */
}
.search-filter-list {
  border: 1px solid #e8e8e8;
  margin-top: 2px;
  background: #fff;
}
.search-filter-list span:hover {
  cursor: pointer;
  /* color:#409EFF; */
}
.search-group {
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}
.search-filter-list,
.filter-top {
  /* border:0 none; */
}
.search-group-left {
  float: left;
  width: 14%;
  border-right: 1px solid #e8e8e8;
  /* border:1px solid red; */
}
.search-group-right {
  width: 85%;
  float: left;
  position: relative;
  height: 40px;
  line-height: 40px;
  /* border:1px solid red; */
}
.search-group-right span {
  float: left;
  margin-left: 20px;
}
.search-group-left label {
  color: #a3a3a3;
  display: block;
  text-align: center;
  line-height: 40px;
  height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
}
.search-group-right .el-checkbox {
  margin-left: 15px;
}
.search-content {
  width: 100%;
}
.main {
  width: 100%;
  margin-top: 20px;
  position: relative;
  margin-left: -45px;
  /* overflow: hidden; */
}
.main li {
  background: #fff;
  padding: 13px 12px;
  /* padding:13px 18px; */
  cursor: pointer;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: relative;
}
.content-left {
  width: 50%;
}
.part-title {
  font-size: 18px;
  color: #3c3c3c;
  font-weight: 600;
  height: 35px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time-icon {
  width: 100%;
  height: 20px;
  padding-left: 18px;
  font-size: 12px;
  color: #9c9c9c;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: url(https://qiniu-image.qtshe.com/20180525time.png) no-repeat 0
    4px;
  background-size: 12px 12px;
}
.address-icon {
  width: 100%;
  /* height: .2rem; */
  height: 20px;
  padding-left: 18px;
  font-size: 14px;
  color: #9c9c9c;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* overflow: hidden; */
  background: url(https://qiniu-image.qtshe.com/20180525address.png) no-repeat 0
    4px;
  background-size: 12px 12px;
}
.main li .content-center {
  width: 40%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.main li .content-center .salary {
  width: 100%;
  overflow: hidden;
  position: relative;
  color: #ff8000;
  font-size: 16px;
  text-align: center;
  align-self: center;
  font-weight: 700;
}
.main li .content-center .subject {
  width: 100%;
  overflow: hidden;
  position: relative;
  color: #409eff;
  font-size: 16px;
  text-align: center;
  align-self: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background: rgba(0, 204, 136, 0.1);
  font-weight: 700;
}
.main li .content-center .clearingForm {
  /* height: .25rem; */
  height: 25px;
  background: rgba(0, 204, 136, 0.1);
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  color: #409eff;
  text-align: center;
  line-height: 25px;
  padding: 0 6px;
}
.main li .content-right {
  width: 10%;
  display: flex;
  justify-content: flex-end;
}
.main li .content-right .apply {
  width: 96px;
  height: 40px;
  border-radius: 3px;
  background: #409eff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: center;
}
.main li .content-right .apply a {
  color: #fff;
}
/* html,body{
        font-size:100px;
    } */
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 256px;
  /* margin-top:40px; */
  margin-bottom: 20px;
  margin-left: 8px;
}
.item-title {
  font-size: 15px;
}
.item-content span:nth-of-type(2) {
  color: #ff8000;
  margin-left: 100px;
}
.el-tag {
  margin-right: 5px;
}
</style>
