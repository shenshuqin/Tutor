<template>
<div  class="menber">
    <div class="banner">
        <p class="banner-title">开通九月特权,享受会员特权</p>
        <div class="banner-btn">
            <div class="btn-box"><p>开通会员</p></div>
        </div>
    </div>
    <!-- banner end -->
    <div class="menber-main">
        <div class="min-width clearfix">
            <div class="main-title">更多会员特权</div>
            <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">排名优先</div>
                    <div class="vip-sub">排名比普通优先</div>
                </div>
            </div>
             <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">名称更明显</div>
                    <div class="vip-sub">专属图标</div>
                </div>
            </div>
             <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">会员权限</div>
                    <div class="vip-sub">免费得九月年检一次</div>
                </div>
            </div>
              <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">广告位</div>
                    <div class="vip-sub">白天时段享受折扣,晚间时段免费</div>
                </div>
            </div>
              <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">服务费</div>
                    <div class="vip-sub">服务费折扣</div>
                </div>
            </div>
              <div class="item-box">
                <div class="vip-box">
                    <div class="vip-img"></div>
                    <div class="vip-title">订单返现</div>
                    <div class="vip-sub">订单返现</div>
                </div>
            </div>
        </div>
    </div>
    <!-- menber-main end -->
    <div class="comper">
        <div class="min-width">
            <div class="com-title">特权对比</div>
            <div class="com-main">
                <div class="flag">推荐</div>
                <ul class="com-ul">
                    <li class="first-item"><p class="li-title"><span>奖励</span></p></li>
                    <li><span>用户等级为一级(综合评分达4.0以上)</span></li>
                    <li><span>用户等级为二级(综合评分达4.2以上)</span></li>
                    <li><span>用户等级为三级(综合评分达4.5以上)</span></li>
                    <li><span>用户等级为四级(综合评分达4.8以上)</span></li>
                    <li><span>用户等级为五级(综合评分达4.9以上)</span></li>
                </ul>
                  <ul class="com-ul jiaoyuan">
                    <li class="first-item"><p class="li-title"><span>教员</span></p></li>
                    <li><span>奖励十元</span></li>
                    <li><span>奖励十五元</span></li>
                    <li><span>奖励二十五元</span></li>
                    <li><span>奖励四十元</span></li>
                    <li><span>奖励六十元</span></li>
                </ul>
                <ul class="com-ul xueyuan">
                    <li class="first-item"><p class="li-title"><span>学员</span></p></li>
                    <li><span>会员总费用享受九九折</span></li>
                    <li><span>会员总费用享受九八折</span></li>
                    <li><span>会员总费用享受九七折</span></li>
                    <li><span>会员总费用享受九六折</span></li>
                    <li><span>会员总费用享受九五折</span></li>
                </ul>
            </div>
        </div>
    </div>
    <!--comper end  -->
</div>
</template>

<script>
export default {
    name: 'Vmenber',
    data () {
        return {
         
        }
    },
    created(){

    },
    mounted () {
    
    },
    methods: {
       
    }

}
</script>
<style scoped>
.banner{
    width:100%;
    height:400px;
    /* border:1px solid red; */
    background: url('../../assets/images/vip_bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
}
.banner-title{
    position: absolute;
    width: 100%;
    font-size: 30px;
    top: 120px;
    text-align: center;
    color: #f9d681;
}
.banner-btn{
    position: absolute;
    width: 100%;
    top: 220px;
    text-align: center;
    /* border:1px solid red; */
}
.btn-box{
    display:inline-block;
}
.btn-box p{
    width: 185px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    border-radius: 25px;
    border: 1px solid #f9d681;
    background-color: #f9d681;
    color: #351d06;
    cursor: pointer;
}
.menber-main{
    margin-top:30px;
}
.main-title,.com-title{
    font-size: 26px;
    color: #4c4c4c;
    text-align: center;
    width:100%;
    margin-bottom:20px;
    /* margin: 0 10px; */
}
.item-box{
    float:left;
    width:33%;
    margin-top:10px;
}
.vip-box{
    width:90%;
    height: 180px;
    padding: 24px 13px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
}
.vip-img{
    width:60px;
    height:60px;
    margin:0 auto;
    border:1px solid red;
}
.vip-title{
    height: 18px;
    font-size: 18px;
    margin-top: 23px;
    margin-bottom: 9px;
    text-align: center;
    line-height: 18px;
    color: #0e0517;
}
.vip-sub{
    height: 20px;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    color: #999;

}
.comper{
    width:100%;
    height:auto;
    margin-top:30px;
    /* border:1px solid red; */
}
.com-main{
    width:100%;
    height:330px;
    margin-top:30px;
    position:relative;
    overflow: hidden;
}
.flag{
    position: absolute; /*绝对定位*/
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 74px;
    background-color: #FF5722;
    color: #fff;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: -18px;
    top: 9px;
}
ul, li, ol {
    list-style: none;
}
.com-ul{
    float: left;
    border: 1px solid #d3d1d0;
    background: #fff;
    width:33%;
}
.com-ul .first-item{
    height:102p;
    padding-top:20px;
}
.com-ul li{
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    margin-left:-40px;
}
.com-ul li span{
    color: #666;
    display: block;
    width: 100%;
    height: 100%;
}
.li-title{
    font-size:20px;
}
.li-title span{
    text-align: center;
}
.com-ul li:nth-child(odd){
    background: #fff;
}
.com-ul li:nth-child(even){
    background: #fbf9f8;
}
.jiaoyuan{
    border-color: #f2ddaf;
    z-index: 10;
}
.xueyuan{
    border: 1px solid #d3d1d0;
    background: #fff;
}
</style>