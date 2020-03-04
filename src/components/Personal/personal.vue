<template>
<div class="personal">
    <div class="jy-main clearfix">
        <div class="min-width">
            <div class="jy-content">
                <div class="module-box">
                    <div class="module-header clearfix">
                        <h1>个人中心</h1>
                    </div>
                    <!--module-header end  -->
                    <div class="module-body paw-wrapper">
                        <div class="paw-mod">
                            <div class="paw-mod-hd"><h2>钱包</h2></div>
                            <div class="paw-mod-bd">
                                <span class="paw-bd-item"><span>余额</span><span>0.00</span></span>
                                <span class="paw-bd-item"><span>九月币</span><span>0.00</span></span>
                            </div>
                        </div>
                        <div class="paw-mod">
                            <div class="paw-mod-hd"><h2>订单</h2></div>
                            <div class="paw-mod-bd">
                                <span class="paw-bd-item-cart"><span>待确定</span><span>0</span></span>
                                <span class="paw-bd-item-cart"><span>进行中</span><span>0</span></span>
                                <span class="paw-bd-item-cart"><span>已完成</span><span>0</span></span>
                            </div>
                        </div>
                        <div class="clock-info">
                            <span>日程表</span>
                        </div>
                         <Week></Week>
                         <!--calendar end  -->
                    </div>
                    <!--module-body end -->
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
import PersonalHeader from './personalheader.vue'
import PersonalList from './personallist.vue'
import Week from './week.vue'
export default {
    name: 'Personal',
     components: {
        PersonalHeader,
        PersonalList,
        Week
    },
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

<style  scoped>
.min-width{
    width:1200px;
    margin:0 auto;
}
.jy-main{
    width:100%;
    height:auto;
    overflow: hidden;
    position:relative;
    /* border:1px solid red; */
}
.jy-main .jy-content{
    margin:0 0 0 10px;
    width:74%;
    float:left;
    /* border:1px solid red; */
}

.module-header{
    padding:15px 20px 0;
    line-height: normal;
    position: relative;
}
.module-header h1{
    font-size:16px;
    line-height: 16px;
    float:left;
    font-weight:700;
    white-space: nowrap;
}
.module-header h1:before{
    background: #ff6547;
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.module-body{
    padding:20px;
}
.paw-wrapper{
    margin-right:-20px;
}
.module-body .paw-mod{
    display:inline-block;
    vertical-align: top;
    border-radius: 4px;
    width:45%;
    border:1px solid #ebebeb;
    font-size:14px;
    margin-right:10px;
    margin-bottom:10px;
    height:125px;
}
.paw-mod-hd {
    border-radius: 4px 4px 0 0;
    background: #f7f7f7;
    font-size: 16px;
    text-align: right;
    padding: 8px 20px;
    overflow: hidden;
}
.paw-mod-hd h2{
    font-size:16px;
    font-weight:700;
    float:left;
    position:relative;
}
.paw-mod-hd h2:before{
    background: #25bb9b;
    content: "";
    display: inline-block;
    width: 2px;
    height: 12px;
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.paw-mod-bd {
    padding: 30px 20px;
    font-size:14px;
}
.paw-bd-item{
    width:45%;
    display:inline-block;
}
.paw-bd-item-cart{
    width:30%;
    display:inline-block;
}
.paw-bd-item-cart span:nth-of-type(1){
    margin-right:10px;
    padding-left:30px;
}
.paw-bd-item span:nth-of-type(1){
    margin-right:10px;
    padding-left:30px;
    /* border-left:1px solid #666; */
    /* border:1px solid red; */
}
.clock-info {
    margin-bottom: 20px;
}
.clock-info span{
    font-size:18px;
    margin-right:30px;
    font-weight:700;
    position:relative;
}
.clock-info span:before{
    background: #409EFF;
    content: "";
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.calendar{
    width:92%;
    /* border:1px solid red; */
}

.calender-header{
    width:100%;
    background: #e9e9e9;
    padding: 15px 0;
    color: #000;
    text-align: left;
    font-weight: inherit;
    /* border:1px solid red; */
}
table {
    max-width: 100%;
    width: 100%;
    text-align: center;
    border: 1px solid #f0f0f0;
    font-size: 14px;
}
.pre-month{
    float:left;
    padding:0 25px;
}
.date{
    float:left;
    width:600px;
    text-align: center;
    font-weight:700;
    /* border:1px solid red; */
}
.next-month{
    padding:0 25px;
    float:right;
}
.week th {
    background: #f7f7f7;
    padding: 3px 10px;
    color: #333;
    text-align: center;
}
table th,table td{
  border: 1px solid #e1e1e1;
}
table .day{
    height:55px;
    position:relative;
}
table .num{
    font-size:36px;
    color:#ccc;
    float:right;
    margin-right:5px;
    font-weight:400;
}
</style>