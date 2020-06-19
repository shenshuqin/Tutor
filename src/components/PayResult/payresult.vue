<template>
  <div class="pay">
    <header class="header"><img :src="logo"><span>龙呤科技收银台</span></header>
    <div class="main">
      <div class="apply-seccess" v-if="flag">
        <i class="el-icon-circle-check"></i>
        <p class="title">支付成功</p>
        <p class="money"><span>￥</span><span>{{this.total_amount}}</span></p>
        <div class="footer">
          <router-link to="/" tag="div">返回首页</router-link>
          <router-link to="/usercenter/orderform" tag="div">查看订单</router-link>
        </div>
      </div>
      <div class="apply-fail" v-else>
        <i class="el-icon-circle-close"></i>
        <p class="title">支付失败</p>
        <footer class="footer">
          <router-link to="/" tag="div">返回首页</router-link>
          <router-link to="/orderinfo" tag="div">重新支付</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import testApi from '@/api/api'
import { getCookie, setCookie, delCookie } from '@/util/util.js'
export default {
  name: 'payresult',
  data () {
    return {
      logo: require('../../assets/images/logo_g.png'),
      flag: true,
      data: {},
      total_amount: null
    }
  },
  created () {
    // setTimeout(this.verify,3000);

  },
  mounted () {
    this.data = this.getRequest()
    this.total_amount = this.data.total_amount
    let outTradeId = this.data.out_trade_no
    // 将订单号进行存储
    sessionStorage.setItem('outTradeId', outTradeId)
    this.verifyApply(this.data)
    // let data = this.getRequest()
    // console.log(url);
    //     axios({
    //     url:url,
    //     // url:`https://dev-ao5dx3e.lonltech.com:646/api/payment/verify?charset=${data.charset}&&out_trade_no=${data.out_trade_no}&&method=${data.method}&&total_amount=${data.total_amount}&&sign=${data.sign}&&trade_no=${data.trade_no}&&auth_app_id=${data.auth_app_id}&&version=${data.version}&&app_id=${data.app_id}&&sign_type=${data.sign_type}&&seller_id=${data.seller_id}&&timestamp=${data.timestamp}`,
    //     method: "get",
    //     dataType: "json",
    //     //发送格式为json
    //     data: data,
    //     headers: {
    //            "Content-Type": "application/json;charset=UTF-8",
    //            Authorization: "Bearer " + getCookie("AccessToken")
    //     }
    // }).then(res => {
    //     console.log(res)
    // })
    // console.log(this.getRequest());
  },
  methods: {
    verifyApply (data) {
      // console.log(data,"data")
      testApi.verifyApply(data).then(res => {
        // console.log(res)
        let result = res.data.Data.Result
        this.flag = result
      }).catch(err => {
        console.log(err)
      })
    },
    getRequest () {
      if (typeof urlStr === 'undefined') {
        var url = decodeURI(location.search) // 获取url中"?"符后的字符串
      } else {
        var url = '?' + urlStr.split('?')[1]
      }
      var theRequest = new Object()
      if (url.indexOf('?') != -1) {
        var str = url.substr(1)
        let strs = str.split('&')
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
        }
      }
      return theRequest
    }
  }
}
</script>

<style scoped>
header {
  margin: 20px 0 0 20px;
}
header img {
  width: 66px;
  vertical-align: center;
}
.header span {
  font-size: 18px;
}
.main {
  width: 100%;
  /* height:500px; */
}
.apply-seccess,
.apply-fail {
  margin-top: 80px;
  text-align: center;
}
.apply-seccess .title {
  margin-top: 10px;
  font-size: 20px;
}
.apply-seccess .money span:nth-child(2) {
  font-size: 25px;
  padding-left: 5px;
}
.el-icon-circle-check {
  display: block;
  font-size: 60px;
  color: #409eff;
}
.el-icon-circle-close {
  display: block;
  font-size: 60px;
  color: #e74c3c;
}
.apply-seccess .footer {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.apply-seccess .footer div {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #666666;
}
.apply-seccess .footer div:nth-child(2) {
  margin-left: 10px;
}
.apply-seccess .footer div:hover {
  color: #409eff;
  border: 1px solid #409eff;
}
.apply-fail .title {
  margin-top: 10px;
  font-size: 20px;
}
.apply-fail .footer {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.apply-fail .footer div {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #666666;
}
.apply-fail .footer div:nth-child(2) {
  margin-left: 10px;
}
.apply-fail .footer div:hover {
  color: #e74c3c;
  border: 1px solid #e74c3c;
}
</style>
