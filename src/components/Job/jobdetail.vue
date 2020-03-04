<template>
  <div>
    <div id="wrap">
      <div class="part">
        <clients class="client" ref="clients"></clients>
        <div class="centerList">
          <div class="part_title">
            <div class="part-tips">
              <span>{{jobDetail.Role}}</span>
              <span v-if="jobDetail.Gender">({{jobDetail.Gender}})</span>
              {{jobDetail.Time}}
            </div>
            <div class="jobtitle">
              {{jobDetail.Title}}
              <span>{{jobDetail.Subject}}</span>
              <span>{{jobDetail.Grade}}</span>
            </div>
            <div class="jobsection">
              <span>{{jobDetail.Address}}</span>
              <span></span>
              <span>{{jobDetail.Settlement}}</span>
              <span></span>
              <!-- <i class="el-icon-star-on"></i> -->
              <i :class='{"iconfont":true,"el-icon-star-on":true,"shoucang":true,"active":isSelected}'
                @click="toggleCollect"></i>
              <span></span>
              <i class="el-icon-chat-round" @click="btn_open"></i>
            </div>
          </div>
          <!-- <div class="submit">及时聊天</div> -->
          <!-- <router-link to="/takecourse"> -->
          <div class="submit" id="sideMenuControl" @click="dialog = true">立即购买</div>
          <!-- </router-link> -->
        </div>
      </div>
      <!-- part-hd end -->
      <div class="jobcontent">
        <div class="jobleft">
          <div class="jobdesc">
            <div class="desctitle">
              <div>工作描述</div>
              <div></div>
            </div>
            <div class="desccont">
              <span>【时间安排】</span>
              <div>期望时间>>>>>>>>>>>>>>>>>></div>
              <span>【授课内容简介】</span>
              <div>//////////>>>>>>>>>>>>>>>>>></div>
              <!-- <span>【往期授课资料展示】</span> -->
              <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">【往期授课资料展示】</template>
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
              </el-collapse>
              <span>【评论展示】</span>
              <div id="com" ref="scroll">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等</div>
            </div>
          </div>
        </div>
        <!-- jobleft end -->
        <div class="jobright">
          <div class="recommond">
            <div class="recommondtitle">
              <div class>推荐家教</div>
              <div></div>
            </div>
            <ul class="partList">
              <li>
                <div class="contentleft">
                  <div class="jobtitle">诚招菲律宾游学校园代理</div>
                  <div class="jobdata">工作时间：不限工作日期</div>
                  <div class="jobdata">工作地点：不限工作地点</div>
                </div>
                <div class="contentright">
                  <div class="salary">200元/次</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- jobright end -->
      </div>
      <!-- jobcontent end -->
    </div>
    <el-drawer
      title="请选择类型"
      :visible.sync="dialog"
      :modal="true"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="科目选择" :label-width="formLabelWidth">
            <el-select v-model="form.subject" placeholder="请选择科目">
              <el-option label="语文" value="shanghai"></el-option>
              <el-option label="数学" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级选择" :label-width="formLabelWidth">
            <el-select v-model="form.garde" placeholder="请年级选择">
              <el-option label="小六" value="shanghai"></el-option>
              <el-option label="高一" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <p class="form-jiage">
            <span>300</span>
            <span>元/次</span>
          </p>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="handleClose()"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
    <!-- el-drawer end -->
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import testApi from '@/api/api';
import clients from "../Client/Clients.vue";

export default {
  name: "JobDetail",
  components: {
    clients
  },
  data() {
    return {
      isSelected: false,
      isShow: true,
      flag: false,
      expectArr: [],
      jobDetail: {
        Title: "",
        Address: "",
        Time: "",
        Role: "",
        Subject: "",
        Gender: "",
        Grade: "",
        FreeTime: "",
        ExpectTime: "",
        Settlement: ""
      },
      dialog: false,
      loading: false,
      form: {
        subject: "",
        grade: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        newId: ""
      },
      formLabelWidth: "80px",
      timer: null,
      map: {},
      introduces:
        "Gordon developed his own stitching technique, which made the garments more durable, cost effective and less labor intensive. He employed machinists, moved the operation into a factory, set up a distribution network and sponsored a team of renowned Australian surfers. The business thrived."
    };
  },
  created() {},
  mounted() {
    this.map = this.$store.state.userData.job;
    window.addEventListener("scroll", this.nav_toggle);
    this.getDetail();
    window.addEventListener("scroll", this.handeleScroll);
    // console.log(this.introduce.length,"len")
  },
  methods: {
    handeleScroll() {
      var scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scroll)
      if (scroll >= 100) {
        //   this.flag = true;
        $("#com").fadeIn("slow");
        // this.$refs.scroll.classList.add("fadeInUp")
      }
    },
    toggleCollect() {
      this.isSelected = !this.isSelected;
    },
    getDetail(this_ = this) {
      this.newId = this.$route.query.id;
      testApi.jobDetail(this.newId).then(res=>{
        console.log(res)
            if ((res.status = 200)) {
            this.jobDetail.Title = res.data.Title;
            this.jobDetail.Address = res.data.Address;
            let ExpectTime = res.data.ExpectTime;
            this.expectArr.push(ExpectTime);
            // 将空闲时间数组存储在session中
            sessionStorage.setItem(
              "expectTime",
              JSON.stringify(this.expectArr)
            );
            let Role = res.data.Role;
            this.resove(Role);
            this.jobDetail.Settlement = res.data.Settlement;
            this.jobDetail.Subject = res.data.Subject;
            let Gender = res.data.Gender;
            this.resoveGender(Gender);
            this.jobDetail.Grade = res.data.Grade;
            this.jobDetail.FreeTime = res.data.FreeTime;
            this.resolveTime(ExpectTime);
          }
      }).catch(err=>{
        console.log(err);
      })
    },
    // 解析教员
    resove(Role) {
      let obj = { "1": "教员", "2": "学员" };
      Role = Role.toString();
      this.jobDetail.Role = obj[Role];
    },
    // 解析性别
    resoveGender(Gender) {
      let obj = { "0": "", "1": "男", "2": "女" };
      Gender = Gender.toString();
      this.jobDetail.Gender = obj[Gender];
    },
    //解析期望时间
    resolveTime(str) {
      var ExpectArr = str.split(",");
      // 解析星期
      var WeekNum = ExpectArr[0];
      var week = {
        "1": "周一",
        "2": "周二",
        "3": "周三",
        "4": "周四",
        "5": "周五",
        "6": "周六",
        "7": "周日"
      };
      var WeekTime = week[WeekNum];
      // 解析时间
      var ClockNum = ExpectArr[1];
      var a = (ClockNum * 30) / 60;
      var b = (ClockNum * 30) % 60;
      // console.log("b1",b) //0
      b = b == "0" ? b + "0" : b;
      // console.log("b2",b) //0   这里??????
      var ClockTime = a + ":" + b;
      // console.log("ClockTime",ClockTime);
      // 解析持续时间
      var EndNum = ExpectArr[2];
      var aa = Math.floor((EndNum * 30) / 60);
      var aEnd = Number(a) + Number(aa);
      var bb = (EndNum * 30) % 60;
      bb = bb == "0" ? bb + "0" : bb; //这里??????明明一样耶结果却不一样
      var EndTime = aEnd + ":" + bb;
      this.jobDetail.Time = WeekTime + " " + ClockTime + "~" + EndTime;
    },
    handleClose() {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            // done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
              this.$router.push({ path: "/takecourse" });
              // 将空闲时间数组存储在session中
              sessionStorage.setItem(
                "freeTime",
                JSON.stringify(this.jobDetail.FreeTime)
              );
              // console.log(this.jobDetail.FreeTime)
              // console.log(sessionStorage.getItem('freeTime'))
              // this.routerTo();
            }, 400);
          }, 1000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    routerTo() {
      // this.$router.push({
      //     name: `TakeCourse`,
      //     params: {
      //      free:this.jobDetail.FreeTime
      //     }
      // })
    },
    btn_open() {
      this.$refs.clients.connectServer();
      $(".dialogue-support-btn").css({ display: "none" });
      $(".dialogue-main").css({ display: "inline-block", height: "0" });
      $(".dialogue-main").animate({ height: "600px" });
    }
  }
};
</script>
<style>
.el-collapse-item__arrow {
  color: #fff;
}
</style>
<style  scoped>
#com {
  display: none;
}
.el-drawer {
  position: relative;
}
.demo-drawer__footer {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.form-jiage {
  position: absolute;
  bottom: 280px;
  right: 60px;
}
.form-jiage span:nth-of-type(1) {
  font-size: 30px;
  margin-right: 6px;
}
.form-jiage span:nth-of-type(2) {
  color: red;
}
.part {
  width: 100%;
  height: 154px;
  background: #374266;
  display: flex;
}
.part-hd {
  width: 100%;
  height: 184px;
  background: #374266;
  display: none;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 100;
}
.centerList {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  /* position:fixed; */
  justify-content: space-between;
}
.part_title {
  position: relative;
  overflow: hidden;
  align-self: center;
}
.part-hd_title {
  position: relative;
  overflow: hidden;
  align-self: center;
}
.part-tips {
  width: 100%;
  color: #fff;
  font-size: 14px;
}
.part-hd-tips {
  width: 100%;
  color: #fff;
  font-size: 14px;
}
.jobtitle {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  color: #fff;
  letter-spacing: 1px;
  font-size: 20px;
  padding: 12px 0;
}
.jobtitle span {
  color: #f66;
  margin-left: 40px;
  font-weight: 500;
}
.jobsection {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  color: #fff;
  letter-spacing: 1px;
}
.jobsection span {
  color: #fff;
  font-size: 14px;
  margin: 0 8px;
}
.jobsection span:nth-of-type(1) {
  margin-left: 0;
}
.jobsection span:nth-of-type(2) {
  width: 2px;
  height: 12px;
  display: inline-block;
  background-color: #fff;
}
.jobsection span:nth-of-type(4) {
  width: 2px;
  height: 12px;
  display: inline-block;
  background-color: #fff;
}
.jobsection span:nth-of-type(5) {
  width: 2px;
  height: 12px;
  display: inline-block;
  background-color: #fff;
}
.el-icon-star-on {
  /* color:red; */
  font-size: 18px;
}
.submit {
  width: 180px;
  height: 50px;
  background: #409eff;
  border-radius: 4px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  align-self: center;
  cursor: pointer;
  margin-top: 50px;
  /* border:1px solid red; */
}
.jobcontent {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  background: #fff;
  padding: 20px 0;
  margin: 0 auto 40px;
  /* border:1px solid red; */
}
.jobcontent .jobleft {
  width: 800px;
  float: left;
  border-right: 1px solid #eee;
  padding: 0 40px 20px;
  position: relative;
  overflow: hidden;
}
.jobcontent .jobright {
  width: 390px;
  float: left;
  position: relative;
  overflow: hidden;
}
.jobleft .jobdesc {
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #eee;
}
.jobleft .desctitle {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.jobleft .desctitle div:nth-of-type(1) {
  width: 100%;
  float: left;
  font-size: 18px;
  font-weight: 700;
}
.jobleft .desctitle div:nth-of-type(2) {
  width: 20px;
  height: 2px;
  background: #409eff;
  float: left;
  margin-top: 10px;
}
.jobleft .desccont {
  width: 100%;
  padding-bottom: 20px;
  /* white-space: pre-line; */
  color: #666;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 24px;
  margin-top: 20px;
}
.jobleft .interview {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}
.interview .intertitle {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}
.interview .intertitle div:first-of-type {
  width: 100%;
  float: left;
  font-size: 18px;
  font-weight: 700;
}
.interview .intertitle div:nth-of-type(2) {
  width: 20px;
  height: 2px;
  background: #409eff;
  float: left;
  margin-top: 10px;
}
.intertime,
.interaddr {
  width: 100%;
  color: #666;
  font-size: 12px;
  margin-bottom: 5px;
}
.company,
.companytitle,
.companycout {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.company {
  margin-top: 20px;
}
.companytitle div:first-of-type {
  width: 100%;
  float: left;
  font-size: 18px;
  font-weight: 700;
}
.companytitle div:nth-of-type(2) {
  width: 20px;
  height: 2px;
  background: #409eff;
  float: left;
  margin-top: 10px;
}
.company .companyname {
  width: 65%;
  float: left;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.jobright .recommond {
  width: 100%;
}
.jobright .recommond .recommondtitle {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-left: 40px;
}
.recommondtitle div:first-of-type {
  width: 100%;
  float: left;
  font-size: 18px;
  font-weight: 700;
}
.recommondtitle div:nth-of-type(2) {
  width: 20px;
  height: 2px;
  background: #409eff;
  float: left;
  margin-top: 10px;
}
.jobright .partList {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.partList ul {
  list-style: none;
}
.partList li {
  width: calc(100%-80px);
  background: #fff;
  border-bottom: 1px dashed #f2f2f2;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 10px 0;
  margin: 0 40px;
  box-sizing: border-box;
}
.partList li .contentleft {
  width: 70%;
  float: left;
  /* border:1px solid red; */
}
.contentleft .jobtitle {
  width: 100%;
  line-height: 20px;
  color: #2c2c2c;
  font-size: 14px;
}
.contentleft .jobdata {
  width: 100%;
  color: #999;
  line-height: 25px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.contentright {
  width: 30%;
  float: left;
  text-align: right;
  /* border:1px solid red; */
}
.contentright .salary {
  width: 100%;
  color: #ff2f2f;
  font-size: 14px;
  line-height: 35px;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/* 收藏 */
/* .shoucang{
        font-size: 32px;
    } */
.shoucang.active {
  color: red;
}
#cont {
  position: relative;
  padding: 10px;
  border: 1px solid red;
  width: 100%;
  overflow: hidden;
}
#gradient {
  width: 100%;
  height: 35px;
  background: url() repeat-x;
  position: absolute;
  bottom: 0;
  left: 0;
}
#read-more {
  padding: 5px;
  border-top: 4px double #ddd;
  background: #fff;
  color: #333;
}
#read-more a {
  padding-right: 22px;
  background: url() no-repeat 100% 50%;
  font-weight: bold;
  text-decoration: none;
}
#read-more a:hover {
  color: #000;
}
#gradient {
  width: 100%;
  height: 35px;
  background: url() repeat-x;
  position: absolute;
  bottom: 0;
  left: 0;
}
#read-more {
  padding: 5px;
  border-top: 4px double #ddd;
  background: #fff;
  color: #333;
}
#read-more a {
  padding-right: 22px;
  background: url() no-repeat 100% 50%;
  font-weight: bold;
  text-decoration: none;
}
#read-more a:hover {
  color: #000;
}
</style>