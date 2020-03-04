<template>
<div  class="orderinfo">
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
                                <div class="cell itemname">科目</div><div class="cell itemcot">语文</div>
                            </div>
                        </dd>
                        <dd>
                            <div class="cart-row">
                                <div class="cell itemname">姓名</div><div class="cell itemcot">李三</div>
                            </div>
                        </dd>
                         <dd>
                            <div class="cart-row">
                                <div class="cell itemname">地点</div><div class="cell itemcot">湖南文理学院</div>
                            </div>
                        </dd>
                         <dd>
                            <div class="cart-row">
                                <div class="cell itemname">结款方式</div><div class="cell itemcot">日结</div>
                            </div>
                        </dd>
                    </dl>
                    <div class="cart-total color-stress">
                        <span>¥</span><span class="num">80</span>
                    </div>
                    <!-- cart-total end -->
                </div>
            </div>
            <!-- main-left end -->
            <div class="main-right">
                <div class="check-addr">
                    <h2>付款人</h2>
                    <ul class="addr-list">
                        <li class="list-group active">
                            <div class="addr-info">
                                <p>李三 18229695956</p>
                                <p>湖南省常德市武陵区白马湖街道</p>
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
                    <ul class="payment clearfix">
                        <li @click="toggle()" class="alipay"  :class="[isActive?'selected':' ']">
                            <div class="item-content">
                                <h4>支付宝</h4>
                            </div>
                        </li>
                        <li  @click="toggle()" class="weixin" :class="[isActive?' ':'selected']">
                           <div class="item-content">
                                <h4>微信</h4>
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
import axios from "axios";
export default {
    name: 'Orderinfo',
    data () {
        return {
            isActive:true,
            header: { 
                "Content-Type": "application/json;charset=UTF-8",
                // "Token":"123333",
                
            }
        }
    },
    created(){

    },
    mounted () {
    
    },
    methods: {
     toggle(){
          this.isActive = !this.isActive;
     },
     toAlipay(){
         window.location.href='https://openapi.alipay.com/gateway.do?app_id=2019111169065414&biz_content=%7b%22body%22%3a%22%e4%b9%b0%e7%a9%ba%e6%b0%94%22%2c%22out_trade_no%22%3a%2270501111111S0d1111154%22%2c%22product_code%22%3a%22FAST_INSTANT_TRADE_PAY%22%2c%22qrcode_width%22%3a0%2c%22subject%22%3a%22%e5%85%b3%e7%88%b1%e8%b4%ab%e5%9b%b0%e5%8d%9a%e5%bc%ba%22%2c%22timeout_express%22%3a%2230m%22%2c%22total_amount%22%3a%22666.66%22%7d&charset=UTF-8&format=json&method=alipay.trade.page.pay&notify_url=http%3a%2f%2f9ysep.com%2f111&sign_type=RSA2&timestamp=2019-12-08+20%3a01%3a08&version=2.0&sign=phzdPDyVtg2Oh%2flkc2HyIAUAjNjR7DiJBBCNieWkixYRlr0pvuOBj11ykTdqswdnvWjC86VfzCagzb4QUNvqCNfpkD4UsiqzrZbspooUiTWQgWHSxhwLoDOA9eDqemmCp%2fMbPqjCnUh%2fGPZkh7CvsZowqTr4fwADqMau5Uh730A%2fR%2bQJfNpqnH82ULW92ygzizFIuY2vZ9o8ys9dyEHsGshxTzUSHx%2br%2fZbn6XuyaYC4jdxrVMKdn0vhnp0IfwWWbNn6TPtyRnIji2a38rveJsdAH5GDbW7rC0HIM485RQ5cjNw7%2bBqUlpFcyUF28ge7NYNJh6wYfQY4O3Mu7eFHkQ%3d%3d'
     },
    //  toAlipay(){
    //      var this_ = this;
    //      var data = {
    //          total_amount:"80",
    //          subject:"chinese",
    //          out_trade_no:'1575801715458',
    //          product_code:'FAST_INSTANT_TRADE_PAY'
    //      }
    //     axios({
    //     url: "https://openapi.alipay.com/gateway.do?app_id=2019111169065414&biz_content=%7b%22body%22%3a%22%e4%b9%b0%e7%a9%ba%e6%b0%94%22%2c%22out_trade_no%22%3a%2270501111111S0d1111154%22%2c%22product_code%22%3a%22FAST_INSTANT_TRADE_PAY%22%2c%22qrcode_width%22%3a0%2c%22subject%22%3a%22%e5%85%b3%e7%88%b1%e8%b4%ab%e5%9b%b0%e5%8d%9a%e5%bc%ba%22%2c%22timeout_express%22%3a%2230m%22%2c%22total_amount%22%3a%22666.66%22%7d&charset=UTF-8&format=json&method=alipay.trade.page.pay&notify_url=http%3a%2f%2f9ysep.com%2f111&sign_type=RSA2&timestamp=2019-12-08+20%3a01%3a08&version=2.0&sign=phzdPDyVtg2Oh%2flkc2HyIAUAjNjR7DiJBBCNieWkixYRlr0pvuOBj11ykTdqswdnvWjC86VfzCagzb4QUNvqCNfpkD4UsiqzrZbspooUiTWQgWHSxhwLoDOA9eDqemmCp%2fMbPqjCnUh%2fGPZkh7CvsZowqTr4fwADqMau5Uh730A%2fR%2bQJfNpqnH82ULW92ygzizFIuY2vZ9o8ys9dyEHsGshxTzUSHx%2br%2fZbn6XuyaYC4jdxrVMKdn0vhnp0IfwWWbNn6TPtyRnIji2a38rveJsdAH5GDbW7rC0HIM485RQ5cjNw7%2bBqUlpFcyUF28ge7NYNJh6wYfQY4O3Mu7eFHkQ%3d%3d",
    //     method: "get",
    //     dataType: "json",
    //     //发送格式为json
    //     data: data,
    //     headers: this_.header
    //   }).then(res => {
    //       console.log(res);
    //        if (res.status == "200") {
    //                 var reHtml= res.html;
    //                 var div = document.createElement('div');
    //                 div.innerHTML =reHtml;
    //                 document.body.appendChild(div);
    //                 document.forms[0].submit(); 
    //     }
    //     }).catch(err => {
    //       console.log(err);
    //     });
    //  },
    }

}
</script>
<style scoped>
.orderhead{
    width:100%;
    height:96px;
    background: #0089dc;
}
.order-title{
    font-size: 26px;
    color: #fff;
    margin-left: 14px;
    line-height: 96px;
    display:inline-block;
    vertical-align: text-bottom;
}
.order-title:before{
    background: #fff;
    content: "";
    display: inline-block;
    width: 2px;
    height: 55px;
    margin-right: 16px;
    margin-bottom: 2px;
    vertical-align: middle;

}
.order-cont{
    width:450px;
    height:96px;
    padding-top:30px;
    position: relative;
    float: right;
}
.order-cont p{
    font-size:28px;
    color:#fff;
    letter-spacing: 12px;
}
.main-left{
    float:left;
    width:34%;
    margin-top:12px;
    background-color: #fff;
}
.cart{
    border: 1px solid #e0e0e0;
    border-bottom: 0;
    line-height: 1;
    background: url('../../assets/images/ss.png') bottom repeat-x;
}
.cart-title{
    position: relative;
    padding: 20px;
    height: 60px;
    border-bottom: 1px solid #eee;
}
.cart-title h2{
    font-size:16px;
    font-weight:700;
    color:#333;
}
.cart-group{
    margin-top: -1px;
    background-color: #fff;
}
.cart-row{
    display: table;
    table-layout: fixed;
    /* background-color: #fcfaf8; */
    height: 48px;
    line-height: 48px;
    padding: 0 18px 0 20px;
    width: 100%;
    font-size: 14px;
    color: #666;
    margin-top:-5px;
}
.group-title{
    border-bottom: 1px solid #eee;
    padding-left: 30px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
}
.itemname{
    padding: 5px 0 3px 60px;
    width: 45%;
    font-size: 14px;
    line-height: 1.3;
    /* border:1px solid red; */
}
.itemcot{
    width: 50%;
    text-align: center;
    white-space: nowrap;
    /* border:1px solid red; */
}
.cell{
    display: table-cell;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
}
.cart-total{
    padding: 12px 28px 10px;
    font-size: 24px;
    text-align: right;
}
.color-stress {
    color: #f74342;
}
.num{
    font-size:46px;
}
.main-right{
    padding: 25px 20px 150px 30px;
    float: right;
    width: 65%;
    border: 1px solid #e0e0e0;
    margin-top: 12px;
    background-color: #fff;
}
.check-addr{
    margin-bottom:40px;
}
.check-addr h2{
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 700;
}
.addr-list{
    display:block;
}
.addr-info{
    display:table-cell;
    padding-left:16px;
}
.addr-info p:nth-of-type(1){
    margin-bottom:6px; 
    margin-top:8px;
}
.addr-info p:nth-of-type(2){
    color:#666;
}
.checkout{
    margin-bottom:40px;
}
.checkout h2{
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 700;
}
.checkout-title span{
    margin-left:16px;
    font-size:14px;
    color:#666;
    font-weight:400;
    /* color:#ff9c00; */
}
.checkout-title .time{
    color:#ff9c00;
    margin-left:3px;
}
ol, ul {
    list-style: none;
}
.active{
    border:1px solid #0089dc;
    background: url('../../assets/images/active.png') right bottom no-repeat;
}
.checkout-pay{
    margin-right: 1.6%; 
    float: left;
    padding: 11px 20px;
    width: 49.2%;
    height: 90px;
    margin-top:20px;
    cursor: pointer;
}
.checkout-pay p:first-child {
    margin-bottom: 4px;
}
.checkout-pay p:nth-of-type(2){
    color:#999;
}
.sub{
    width:100%;
    height:50px;
    margin-top:80px;
    /* border:1px solid red; */
}
.sub-btn{
    width:120px;
    background-color: #f74342;
    color: #fff;
    height:50px;
    line-height: 50px;
    font-size: 16px;
    display: inline-block;
    border: none;
    border-radius: 2px;
    outline: 0;
    float:right;
    margin-right:80px;
    cursor: pointer;
    text-align: center;  
}
.payment .selected{
   border:1px solid #f74342;
}
.payment .selected:after{
    background: url('../../assets/images/payway.jpg') 0 -496px no-repeat;
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    width: 17px;
    height: 17px;
}
.payment li{
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
.payment .alipay:before{
    background-image: url('../../assets/images/alipay.png');
    content: '';
    display: inline-block;
    width: 38px;
    height: 38px;
    margin-right: 10px;
    vertical-align: middle;
    background-repeat: no-repeat;
    
}
.payment .weixin:before{
    background-image: url('../../assets/images/weixin.png');
    content: '';
    display: inline-block;
    width: 38px;
    height: 38px;
    margin-right: 10px;
    vertical-align: middle;
    background-repeat: no-repeat;
    
}
.item-content{
    display: inline-block;
    vertical-align: middle;
}
.item-content h4{
    font-size: 1.25em;
    font-weight: 500;
}
</style>