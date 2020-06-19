<template>
  <div class="commonTopbar">
    <div class="w pos min_width">
      <div class="bar_left">
        <div class="commonTopbar_city">
          <i class="el-icon-location-information"></i>
          <el-select v-model="city" style="width:36%" id="select-option">
            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </div>
        <div class="commonTopbar_login" v-if="!user">
          <span>登录</span>
          <span class="gap">/</span>
          <span>注册</span>
        </div>
        <div class="commonTopbar_login" v-else>{{user}}</div>
        <!-- <img  alt="" :src='imgStr' class="avatar"> -->
        <div class="block avatarimg">
          <el-avatar :size="30" :src="avatar" class="avatar"></el-avatar>
        </div>
      </div>
      <div class="bar_right">
        <div class="commonTopbar_shouye">
          <router-link class="" to="/">
            <span>首页</span>
          </router-link>
        </div>
        <div class="commonTopbar_jianzhi">
          <router-link class="" to="/job">
            <span>兼职</span>
          </router-link>
        </div>
        <div class="commonTopbar_huiyuan">
          <router-link class="" to="/vmenber">
            <span>会员中心</span>
          </router-link>
        </div>
        <div class="commonTopbar_huwu">
          <router-link class="" to="/help">
            <span>服务中心</span>
          </router-link>
        </div>
        <div class="commonTopbar_geren">
          <router-link class="" to="/usercenter">
            <span>个人中心</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
import axios from 'axios'
import testApi from '@/api/api'
import getCurrentCityName from '../../assets/js/getUserLocation'
import { setCookie, getCookie } from '../../util/util.js'
export default {
  name: 'Header',
  data () {
    return {
      city: null,
      //   avatar: require('../../assets/images/zbq.jpg'),
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      user: '',
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      value: '',
      header: {
        'Content-Type': 'text/plain; charset=utf-8 ;multipart/form-data',
        'Authorization': 'Bearer ' + getCookie('AccessToken')
      },
      userId: getCookie('uUid')
    }
  },
  created () {

  },
  mounted () {
    this.getCurrentCity()
    this.user = getCookie('username')
    this.getAvater()
  },
  methods: {
    // 通过百度地图获取当前城市
    getCurrentCity () {
      var this_ = this
      getCurrentCityName().then((city) => {
        console.log(city) // 顺利的话能在控制台打印出当前城市
        this.city = city
      })
    },
    getAvater (this_ = this) {
      testApi.getAvatar(this.userId).then(res => {
        // console.log(this.userId)
        if (res.data.Code = 1) {
          this.avatar = res.data.Data.Url
        } else {
          console.log('失败')
        }
      }).catch(err => {
        console.log(err)
      })
      // axios({
      // url :"https://dev-ao5dx3e.lonltech.com:646/api/user/simple-info",
      // method: "get",
      // headers: this.header
      // }).then(res => {
      // console.log("imguser",res)
      // if (res.status = 200) {
      //     this.avatar = res.data.AvatarSrc; // 请求之后将返回的URL给修改的接口在进行一次修改请求
      // } else if(err.response.status === 401) {
      //     console.log("失败");
      // }
      // }).catch(err => {
      //     console.log(err);
      // });
    }
  }

}
</script>
<style>
a {
  color: #555;
  text-decoration: none;
}
a:hover {
  color: #555;
  text-decoration: none;
}
.el-icon-search {
  font-size: 25px;
}
.commonTopbar_city .el-input__inner,
#select-option {
  border: 0px solid #dcdfe6 !important;
  color: #409eff;
  font-weight: bolder;
}
</style>
<style  scoped>
.commonTopbar {
  font-size: 14px;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  position: relative;
  z-index: 999;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  color: #555;
  border-bottom: 1px solid #ddd;
  /* border:1px solid red; */
}
.min_width {
  width: 1200px;
  margin: 0 auto;
}
.commonTopbar .w {
  width: 1190px;
  margin: 0 auto;
}
.commonTopbar .pos {
  z-index: 999;
}
.commonTopbar .bar_left {
  float: left;
  word-spacing: 1px;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.commonTopbar_city {
  margin-right: -100px;
  position: relative;
}
.commonTopbar .bar_right {
  z-index: 999;
  position: relative;
  float: right;
  display: flex;
}
.commonTopbar .bar_right a {
  color: #666;
  text-decoration: none;
}
.dorpdown-city li,
.dorpdown-province li {
  padding-left: 28px;
  line-height: 50px;
  cursor: pointer;
  list-style: none;
}
.dorpdown-city {
  margin-left: 150px;
  background: #f8f9fa;
  height: 302px;
  overflow: auto;
}
.dorpdown-city ul {
  /* display: none; */
}
.bar_right div:hover {
  border-bottom: 3px solid #409eff;
}
.commonTopbar .bar_left .city {
  display: inline;
  font-size: 14px;
  color: #409eff;
  line-height: 50px;
  font-weight: 700;
  margin-right: 10px;
}
.commonTopbar #commonTopbar_login {
  padding: 0 18px;
  height: 50px;
  line-height: 50px;
  float: left;
}
.commonTopbar span {
  color: #666;
  margin: 0 6px;
  cursor: pointer;
}
.gap {
  font-style: italic;
}
.commonTopbar_jianzhi,
.commonTopbar_shouye,
.commonTopbar_huiyuan,
.commonTopbar_huwu,
.commonTopbar_geren {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  z-index: 999;
  position: relative;
  padding: 0 24px 0 14px;
  /* border: 1px solid #fff; */
  border-bottom: none;
  border-top: none;
  float: left;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 50% !important;
}
.avatarimg {
  width: 40px;
  height: 50px;
  padding-top: 8px;
  margin-left: 12px;
  /* border:1px solid red; */
}
.avatar {
  width: 35px;
  height: 35px;
  margin-top: 18px;
  border-radius: 50%;
  /* border:1px solid red; */
}
.el-avatar {
  background-color: #fff;
}
</style>
