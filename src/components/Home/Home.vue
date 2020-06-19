    <template>
  <div class="home">
    <!-- <div class="nav_search clearfix" id="navT">
      <div class="nav-search">
        <div class="min_width">
          <div class="logo">龙呤科技</div>
          <div class="nav-search-box">
            <div class="nav-search-form">
              <div class="nav-search-form-con">
                <p class="ipt-wrap">
                  <input
                    type="text"
                    name="query"
                    class="ipt-search"
                    maxlength="50"
                    autocomplete="off"
                    placeholder="搜索科目"
                  />
                </p>
              </div>
              <div class="btn-search" ka="search_box_index">
                <i class="el-icon-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- nav_search end -->
    <div class="bgimg"> <img alt="" :src='img' class="imgbg"></div>
    <!-- <div class="search">
      <div class="min_width">
        <div class="search-box">
          <div class="search-form">
            <div class="search-form-con">
              <p class="ipt-wrap">
                <input
                  type="text"
                  name="query"
                  class="ipt-search"
                  maxlength="50"
                  autocomplete="off"
                  placeholder="搜索科目"
                  ref="getValue"
                  @keyup.enter="submit()"
                  @focus="focusfns"
                  @blur="blurfns"
                />
              </p>
            </div>
            <div class="btn-search" ka="search_box_index">
              <i class="el-icon-search"></i>
            </div>
          </div>
          <searchHistory ref="mychild" v-show="flag" :parentmsg="flag"></searchHistory>
          <div class="search-hot">
            <b>热门职位</b>
            <a>语文</a>
            <a>数学</a>
            <a>英语</a>
            <a>物理</a>
          </div>
        </div>
      </div>
    </div> -->
    <!-- search end -->
    <div class="content">
      <div class="min_width">
        <div class="nav-bar">
          <div class="cat">家教分类</div>
        </div>
        <div class="fs clearfix">
          <div class="fs_left clearfix">
            <!-- 家教分类内容栏 -->
            <ul class="cate">
              <li class="clearfix" v-for="(subject, index) in data.subjects" :key="index">
                <!-- 遍历科目 -->
                <span>{{subject.sub_name + index}}</span>
                <!-- 科目 -->
                <i class="el-icon-arrow-right"></i>
              </li>
            </ul>

            <div class="popup" v-for="(subject, index) in data.subjects" :key="index">
              <!-- 遍历科目 -->
              <div class="subview">
                <div class="subview_header">
                  <svg class="icon" id="icons" aria-hidden="true">
                    <use xlink:href="#icon-nianji" />
                  </svg>
                  <span>选择年级</span>
                </div>
                <div class="subview_content">
                  <div class="content_item" v-for="(school, index) in subject.grade_msg" :key="index">
                    <!-- 遍历学校 -->
                    <p>
                      <span class="title">{{school.type + index}}</span>
                      <i class="el-icon-arrow-right"></i>
                    </p>
                    <ul>
                      <li v-for="(grade, index) in school.grades" :key="index">{{grade}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fs_right">
            <el-carousel height="355px">
              <el-carousel-item class="slide" v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <!-- fs end -->
        <div class="teach">
          <div class="teach-header">优秀学员●教员展</div>
          <swiper ref="swiper" class="swiper"></swiper>
        </div>
        <!-- teach end -->
        <div class="eva">
          <div class="bubble-header">好评展览</div>
          <bubble ref="bubble" class="bubbles"></bubble>
        </div>
        <!-- bubble end -->
      </div>
      <!-- min_width end -->
    </div>
    <!-- content end -->
    <clients class="client" ref="clients"></clients>
    <div class="open-client">
      <div ref="btn_open" class="dialogue-support-btn" @click="btn_open">
        <i class="dialogue-support-icon"></i>
        <i class="dialogue-support-line"></i>
        <span class="dialogue-support-text">联系客服</span>
      </div>
    </div>
    <!--open-client end  -->
  </div>
</template>
<script>
import $ from 'jquery'
import swiper from './swiper.vue'
import bubble from './bubble.vue'
import clients from '../Client/Clients.vue'
import searchHistory from '../Common/search_history.vue'
import axios from 'axios'
import { setCookie, getCookie } from '../../util/util.js'
export default {
  name: 'Home',
  components: {
    swiper,
    bubble,
    clients,
    searchHistory
  },
  data () {
    return {
      searchArr: [],
      img: require('../../assets/images/bgimg.jpg'),
      flag: false,
      data: {
        subjects: [
          {
            sub_name: '语文',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              }
            ]
          },
          {
            sub_name: '数学',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级']
              }
            ]
          },
          {
            sub_name: '英语',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级']
              }
            ]
          },
          {
            sub_name: '政治',
            grade_msg: [
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              }
            ]
          },
          {
            sub_name: '历史',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级', '三年级', '四年级']
              }
            ]
          },
          {
            sub_name: '地理',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级', '三年级', '四年级']
              }
            ]
          },
          {
            sub_name: '物理',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级', '三年级', '四年级']
              }
            ]
          },
          {
            sub_name: '化学',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级', '三年级', '四年级']
              }
            ]
          },
          {
            sub_name: '生物',
            grade_msg: [
              {
                type: '小学',
                grades: [
                  '一年级',
                  '二年级',
                  '三年级',
                  '四年级',
                  '五年级',
                  '六年级'
                ]
              },
              {
                type: '初中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '高中',
                grades: ['一年级', '二年级', '三年级']
              },
              {
                type: '大学',
                grades: ['一年级', '二年级', '三年级', '四年级']
              }
            ]
          }
        ]
      }
    }
  },

  mounted () {
    this.selsect_course()
    window.addEventListener('scroll', this.nav_toggle)
    //  this.nav_toggle();
  },
  methods: {
    focusfns () {
      this.flag = true
    },
    blurfns () {
      this.flag = false
    },
    submit () {
      var item = this.$refs.getValue.value
      if (localStorage.getItem('searchHistory')) {
        this.searchArr = localStorage.getItem('searchHistory').split(',')
      } else {
        this.searchArr = []
      }
      if (item) {
        this.searchArr.push(item)
        localStorage.setItem('searchHistory', this.searchArr) // 存入 参数： 1.调用的值 2.所要存入的数据
      }

      //  console.log(localStorage.getItem("searchHistory"));
      this.$refs.mychild.historyShow()
      this.$refs.mychild.msg = '历史记录'
      this.$refs.mychild.clear = true
      // this.$router.push('/job')
    },
    // 课程分类的显示与隐藏
    selsect_course () {
      $('.popup').css('display', 'none')
      $('.cate').on('mouseenter', 'li', function (event) {
        $(this)
          .addClass('select')
          .siblings()
          .removeClass('select')
        $('.popup')
          .hide()
          .eq($(this).index())
          .show()
      })
      $('.fs').mouseleave(function () {
        $('.popup').css('display', 'none')
        $('.cate li').removeClass('select')
      })
    },
    // 导航显示和隐藏
    nav_toggle () {
      // var scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var winHeight = $(document).scrollTop()
      var scrollY = $(window).scrollTop()
      // console.log($(window).scrollTop());
      if (scrollY > 200) {
        // 如果滚动距离大于0px则隐藏，否则删除隐藏类
        $('#navT').css('display', 'block')
        // $(".commonTopbar").css("z-index", -999999);
      } else {
        $('#navT').css('display', 'none')
        // $(".commonTopbar").css("display", 999999);
      }
    },
    btn_open () {
      this.$refs.clients.connectServer()
      // this.connection = new signalR.HubConnectionBuilder().withUrl("http://192.168.199.10:8001/chatHub").build();
      $('.dialogue-support-btn').css({ display: 'none' })
      $('.dialogue-main').css({ display: 'inline-block', height: '0' })
      $('.dialogue-main').animate({ height: '600px' })
      // console.log(this.connection)
    }
  }
}
</script>
    <style scoped>
.client {
  z-index: 99999999;
}
li,
ol,
ul {
  list-style: none;
}
body {
  background: #f6f6f8;
}
.min_width {
  width: 1200px;
  margin: 0 auto;
}
.nav_search {
  width: 100%;
  height: 68px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  /* border:1px solid red; */
}
#navT {
  display: none;
}
.logo {
  width: 180px;
  height: 68px;
  line-height: 68px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 8px;
  color: #409eff;
  font-weight: bolder;
  /* border:1px solid red; */
  float: left;
}
.nav-search-box {
  width: 934px;
  margin: 8px auto;
  /* padding-top:20px; */
  position: relative;
  font-size: 13px;
  float: left;
  /* border:1px solid red; */
}
.nav-search-form-con {
  width: 794px;
  float: left;
  height: 50px;
  border: 1px solid #409eff;
}
.search {
  position: relative;
  z-index: 1006;
}
.search-box {
  width: 934px;
  margin: 30px auto;
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
.nav-search-form {
  position: relative;
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
.search-hot a {
  margin-right: 22px;
  color: #409eff;
}
.content {
  width: 100%;
  height: auto;
  margin-top: 30px;
  /* border:1px solid red; */
}
.nav-bar {
  height: 36px;
  width: 100%;
  letter-spacing: 8px;
  /* border:1px solid red; */
}
.cat {
  background-color: #409eff;
  height: 36px;
  line-height: 36px;
  text-align: center;
  width: 240px;
  float: left;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.fs {
  width: 100%;
  max-height: 585px;
  position: relative;
  /* margin-top:2px; */
  /* border:1px solid red; */
}
.fs_left {
  position: relative;
  float: left;
  width: 240px;
  /* height:auto; */
  height: 354px;
  /* max-height:585px; */
  /* overflow: hidden; */
  /* padding: 0 14px; */
  z-index: 11;
  border: 1px solid #ccc;
  background: #fff;
}

.cate {
  width: 240px;
  position: relative;
  /* padding:0 14px; */
  max-height: 584px;
  overflow: hidden;
}
.cate li {
  float: left;
  position: relative;
  list-style: none;
  width: 240px;
  height: 34px;
  line-height: 3px;
  margin: 0;
  padding: 19px 0;
  margin-left: -42px;
  border-top: 1px solid #e7e7e7;
  cursor: default;
  /* border:1px solid red; */
}
.el-icon-arrow-right {
  margin-top: -6px;
}
.select {
  background: #409eff;
  color: #fff;
}
.cate li span:nth-of-type(1) {
  float: left;
  padding-bottom: 5px;
  font-size: 16px;
  margin-left: 20px;
}
.cate li .el-icon-arrow-right {
  float: right;
  /* margin-right: 20px; */
}
.popup {
  position: absolute;
  background-color: #fff;
  border: 1px solid #409eff;
  width: 900px;
  height: 357px;
  top: 0;
  left: 100%;
  margin-left: 1px;
  line-height: 1.2;
  z-index: 1000;
  -webkit-transition: top 10ms ease-in;
  transition: top 10ms ease-in;
  /* overflow: hidden */
}
.subview {
  width: 520px;
  height: 357px;
  /* border:1px solid red; */
}
.subview_header {
  width: 400px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  /* border:1px solid red; */
}
.subview_header span {
  font-size: 16px;
  color: #409eff;
  margin-left: 12px;
}
#icons {
  width: 20px;
  height: 20px;
  color: #409eff;
}
.subview_content {
  width: 448px;
  height: auto;
  margin: 20px auto;
  /* display:flex;
         justify-content: center;
         align-items: center; */
  /* border:1px solid red; */
}
.title {
  font-weight: bold;
  margin-right: 10px;
}
.content_item {
  width: 100%;
  display: flex;
  height: 56px;
  line-height: 56px;
  border-bottom: 1px dashed #ccc;
}
.content_item ul {
  padding: 18px 18px;
}
.content_item ul li {
  width: 56px;
  height: 20px;
  line-height: 20px;
  /* border-right:1px solid red; */
  float: left;
}
.fs_right {
  float: left;
  width: 900px;
  height: 355px;
  /* border:1px solid red; */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.teach {
  width: 100%;
  height: auto;
  margin-top: 40px;
}
.teach-header {
  width: 100%;
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 28px;
  /* color:#409EFF; */
  color: #222222;
  font-weight: 500;
  /* border:1px solid red; */
  letter-spacing: 8px;
  margin: 0 auto;
}
.swiper {
  padding-top: 50px;
  /* border:1px solid red; */
}
.eva {
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  height: auto;
  /* position:relative; */
  /* border:1px solid red; */
}
.bubble-header {
  width: 100%;
  height: 66px;
  line-height: 66px;
  text-align: center;
  font-size: 28px;
  color: #222222;
  font-weight: 500;
  /* border:1px solid red; */
  letter-spacing: 8px;
  margin: 0px auto;
}
.bubbles {
  width: 100%;
  /* border:1px solid red; */
}
/* 客服 */
.open-client {
  color: #fff;
}
/*右侧点击按钮*/
.dialogue-support-btn {
  position: fixed;
  display: inline-block;
  top: 50%;
  right: 0;
  margin-top: -70px;
  padding: 10px 0;
  width: 40px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.4);
  background-color: #5d94f3;
  z-index: 9999;
}
.dialogue-support-btn .dialogue-support-icon {
  position: relative;
  display: inline-block;
  margin-bottom: -2px;
  width: 20px;
  height: 16px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 9999;
}
.dialogue-support-btn .dialogue-support-icon:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  margin-left: -3px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #fff;
  z-index: 9999;
}
.dialogue-support-btn .dialogue-support-line {
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  z-index: 9999;
}

.dialogue-support-btn .dialogue-support-text {
  padding: 5px 0;
  letter-spacing: 4px;
  writing-mode: vertical-rl;
  -webkit-user-select: none;
}
.bgimg {
  width: 100%;
  height: 120px;
  /* border:1px solid red; */
}
.imgbg {
  width: 100%;
  height: 100%;
}
/* 輪播 */
.slide:nth-of-type(1) {
  background: url("../../assets/images/jj.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* border:1px solid red; */
}
.slide:nth-of-type(2) {
  background: url("../../assets/images/jz.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* border:1px solid red; */
}
.slide:nth-of-type(3) {
  background: url("../../assets/images/jj.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* border:1px solid red; */
}
.slide:nth-of-type(4) {
  background: url("../../assets/images/slide11.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* border:1px solid red; */
}
</style>
