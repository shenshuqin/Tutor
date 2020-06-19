<template>
  <div class="orderinfo">
    <div class="orderhead">
      <div class="min-width clearfix">
        <span class="order-title">订单信息</span>
        <div class="order-cont">
          <p>龙呤科技</p>
          <!-- <el-steps :active="1" finish-status="success">
                <el-step title="确认信息"></el-step>
                <el-step title="支付"></el-step>
                <el-step title="提交信息"></el-step>
                </el-steps> -->
        </div>
      </div>
    </div>
    <!-- orderhead end -->
    <div class="order-main">
      <div class="min-width clearfix">
        <div class="main-left">
          <div class="cart">
            <div class="cart-title">
              <h2>订单详情</h2>
            </div>
            <dl class="cart-group">
              <dt class="group-title">商品信息</dt>
              <dd>
                <div class="cart-row">
                  <div class="cell itemname">科目</div>
                  <div class="cell itemcot">{{detailData.Subject}}</div>
                </div>
              </dd>
              <dd>
                <div class="cart-row">
                  <div class="cell itemname">年级</div>
                  <div class="cell itemcot">{{detailData.Grade}}</div>
                </div>
              </dd>
              <dd>
                <div class="cart-row">
                  <div class="cell itemname">结算</div>
                  <div class="cell itemcot">{{detailData.Settlement}}</div>
                </div>
              </dd>
              <dd>
                <!-- <div class="cart-row">
                                <div class="cell itemname">时间</div><div v-for="(item,index) in detailData.bussinessTime" :key = "index" class="cell itemcot">{{item}}</div>
                            </div> -->
              </dd>
            </dl>
            <div class="cart-total color-stress">
              <span>¥</span><span class="num">{{detailData.Price}}</span>
            </div>
            <!-- cart-total end -->
          </div>
        </div>
        <!-- main-left end -->
        <div class="main-right">
          <div class="check-addr">
            <h2>购买课程</h2>
            <ul class="addr-list">
              <li class="list-group active">
                <div class="addr-info">
                  <!-- <p>李三 18229695956</p>
                                <p>湖南省常德市武陵区白马湖街道</p> -->
                  <p v-for="(item,index) in detailData.bussinessTime" :key="index" class="cell itemcot">{{item}}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="checkout">
            <h2 class="checkout-title">付款方式<span>剩余支付时间<span class="time">12分29秒</span>，逾期订单将自动取消</span></h2>
            <!-- <ul class="clearfix">
                        <li class="checkout-pay active">
                            <p>在线支付</p>
                            <p>支持支付宝、微信</p>
                        </li>
                    </ul> -->
            <ul class="payment clearfix" id="ulbox">
              <li @click="toggle($event)" class="alipay" data-id="1">
                <div class="item-content" style="pointer-events: none;">
                  <h4 style="pointer-events: none;">支付宝</h4>
                </div>
              </li>
              <li @click="toggle($event)" data-id="2" class="weixin" ref="applyType">
                <div class="item-content" style="pointer-events: none;">
                  <h4 style="pointer-events: none;">微信</h4>
                </div>
              </li>
            </ul>
          </div>
          <div class="sub clearfix">
            <input type="submit" class="sub-btn" @click="toAlipay()" value="提交订单">
          </div>
        </div>
        <!-- main-right end -->
      </div>
    </div>
    <!-- order-main end -->
  </div>
</template>

<script>
import axios from 'axios'
import { getCookie, setCookie, delCookie } from '@/util/util.js'
import testApi from '@/api/api'
export default {
  name: 'Orderinfo',
  data () {
    return {
      isActive: true,
      applyType: 1,
      busTime: [],
      detailData: {
        Subject: '',
        Grade: '',
        Settlement: '',
        Price: '',
        bussinessTime: ''
      },
      header: {
        'Content-Type': 'application/json;charset=UTF-8'
        // "Token":"123333",

      }
    }
  },
  created () {

  },
  mounted () {
    // 给支付宝样式添加默认样式
    let ulbox = document.getElementById('ulbox')
    let libox = ulbox.getElementsByTagName('li')
    libox[0].classList.add('selected')
    // 获取businessTime
    let bussinessTime = JSON.parse(sessionStorage.getItem('bussinessTime'))
    this.detailData.bussinessTime = this.resolveTime(bussinessTime) // [ '周三 8:00~12:00', '周二 8:00~12:00', '周二 13:00~16:00' ]
    // console.log(JSON.parse(sessionStorage.getItem('bussinessTime')),"000000")
    this.busTime = this.arrToobj(bussinessTime)
    // console.log(this.busTime);
    this.getData()
  },
  methods: {
    arrToobj (arr) {
      let data = []
      arr.forEach((item, index) => {
        let obj = {}
        let arr = item.split(',')
        obj.w = Number(arr[0])
        obj.s = Number(arr[1])
        obj.l = Number(arr[2])
        data.push(obj)
      })
      return data
    },
    getData () {
      this.detailData.Subject = sessionStorage.getItem('Subject')
      this.detailData.Grade = sessionStorage.getItem('Grade')
      this.detailData.Price = sessionStorage.getItem('Price')
      this.detailData.Settlement = sessionStorage.getItem('Settlement')
    },
    resolveTime (arr) {
      let timeArr = [], Time = ''
      arr.forEach((item, index) => {
        var ExpectArr = item.split(',')
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
        Time = WeekTime + ' ' + ClockTime + '~' + EndTime
        timeArr.push(Time)
      })

      return timeArr
    },
    toggle (e) { // 需改进
      //   this.isActive = !this.isActive;
      let ulbox = document.getElementById('ulbox')
      let libox = ulbox.getElementsByTagName('li')
      for (let i = 0; i < libox.length; i++) {
        libox[i].classList.remove('selected')
      }
      e.target.classList.add('selected')
      this.applyType = e.target.getAttribute('data-id')
    },
    toAlipay () {
      let data = {
        'buyType': this.applyType,
        'demandId': Number(getCookie('demandId')),
        'bussinessTime': JSON.parse(JSON.stringify(this.busTime))
      }
      testApi.payOrder(data).then(res => {
        let data = {
          'orderId': res.data.Data.OrderID,
          'payMethod': this.applyType
        }
        testApi.pay(data).then(res => {
          console.log(res.data.Data)
          console.log(res.data.Data.OrderToken)
          window.location.href = res.data.Data.Pay_Url
        })
      })
    }
  }

}
</script>
<style scoped>
.orderhead {
  width: 100%;
  height: 96px;
  background: #0089dc;
}
.order-title {
  font-size: 26px;
  color: #fff;
  margin-left: 14px;
  line-height: 96px;
  display: inline-block;
  vertical-align: text-bottom;
}
.order-title:before {
  background: #fff;
  content: "";
  display: inline-block;
  width: 2px;
  height: 55px;
  margin-right: 16px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.order-cont {
  width: 450px;
  height: 96px;
  padding-top: 30px;
  position: relative;
  float: right;
}
.order-cont p {
  font-size: 28px;
  color: #fff;
  letter-spacing: 12px;
}
.main-left {
  float: left;
  width: 34%;
  margin-top: 12px;
  background-color: #fff;
}
.cart {
  border: 1px solid #e0e0e0;
  border-bottom: 0;
  line-height: 1;
  background: url("../../assets/images/ss.png") bottom repeat-x;
}
.cart-title {
  position: relative;
  padding: 20px;
  height: 60px;
  border-bottom: 1px solid #eee;
}
.cart-title h2 {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.cart-group {
  margin-top: -1px;
  background-color: #fff;
}
.cart-row {
  display: table;
  table-layout: fixed;
  /* background-color: #fcfaf8; */
  height: 48px;
  line-height: 48px;
  padding: 0 18px 0 20px;
  width: 100%;
  font-size: 14px;
  color: #666;
  margin-top: -5px;
}
.group-title {
  border-bottom: 1px solid #eee;
  padding-left: 30px;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
}
.itemname {
  padding: 5px 0 3px 60px;
  width: 45%;
  font-size: 14px;
  line-height: 1.3;
  /* border:1px solid red; */
}
.itemcot {
  width: 50%;
  text-align: center;
  white-space: nowrap;
  /* border:1px solid red; */
}
.cart .cell {
  display: table-cell;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}
.cart-total {
  padding: 12px 28px 10px;
  font-size: 24px;
  text-align: right;
}
.color-stress {
  color: #f74342;
}
.num {
  font-size: 46px;
}
.main-right {
  padding: 25px 20px 150px 30px;
  float: right;
  width: 65%;
  border: 1px solid #e0e0e0;
  margin-top: 12px;
  background-color: #fff;
}
.check-addr {
  margin-bottom: 40px;
}
.check-addr h2 {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
}
.addr-list {
  display: block;
}
.addr-info {
  /* display:table-cell; */
  padding-left: 16px;
}
.addr-info p {
  margin-bottom: 0px;
  width: 20%;
  display: block;
  float: left;
  line-height: 30px;
  /* margin-top:8px; */
}
.addr-info p:nth-of-type(2) {
  /* color:#666; */
}
.checkout {
  margin-bottom: 40px;
}
.checkout h2 {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
}
.checkout-title span {
  margin-left: 16px;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  /* color:#ff9c00; */
}
.checkout-title .time {
  color: #ff9c00;
  margin-left: 3px;
}
ol,
ul {
  list-style: none;
}
.active {
  border: 1px solid #0089dc;
  background: url("../../assets/images/active.png") right bottom no-repeat;
}
.checkout-pay {
  margin-right: 1.6%;
  float: left;
  padding: 11px 20px;
  width: 49.2%;
  height: 90px;
  margin-top: 20px;
  cursor: pointer;
}
.checkout-pay p:first-child {
  margin-bottom: 4px;
}
.checkout-pay p:nth-of-type(2) {
  color: #999;
}
.sub {
  width: 100%;
  height: 50px;
  margin-top: 80px;
  /* border:1px solid red; */
}
.sub-btn {
  width: 120px;
  background-color: #f74342;
  color: #fff;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  display: inline-block;
  border: none;
  border-radius: 2px;
  outline: 0;
  float: right;
  margin-right: 80px;
  cursor: pointer;
  text-align: center;
}
.payment .selected {
  border: 1px solid #f74342;
}
.payment .selected:after {
  background: url("../../assets/images/payway.jpg") 0 -496px no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  content: "";
  width: 17px;
  height: 17px;
}
.payment li {
  border: 1px solid #e6e6e6;
  float: left;
  margin-right: 14px;
  margin-bottom: 14px;
  padding: 10px 16px;
  width: 164px;
  height: 64px;
  background-size: 176px auto;
  cursor: pointer;
  position: relative;
}
.payment .alipay:before {
  background-image: url("../../assets/images/alipay.png");
  content: "";
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right: 10px;
  vertical-align: middle;
  background-repeat: no-repeat;
}
.payment .weixin:before {
  background-image: url("../../assets/images/weixin.png");
  content: "";
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right: 10px;
  vertical-align: middle;
  background-repeat: no-repeat;
}
.item-content {
  display: inline-block;
  vertical-align: middle;
}
.item-content h4 {
  font-size: 1.25em;
  font-weight: 500;
}
</style>
