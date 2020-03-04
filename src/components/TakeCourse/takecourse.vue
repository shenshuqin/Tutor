<template>
 <div class="takecourse">
   <div class="topBar">
     <div class="nav-wrap">
        <!-- <p class="title">龙呤选课中心</p> -->
        <div class="logingbg">
            <div class="loging_txt">选课</div>
            <div class="irow">
                <div class="trigle"></div>
            </div>
        </div>
    </div>
   </div>
   <!-- topBar end -->
   <div class="min-width clearfix section">
     <Week class="calender" :status="isStudent" :free="FreeArry" :expect="ExpectArry"></Week>
        <div class="list">
            <div class="block">
        <el-timeline>
        <el-timeline-item timestamp="2019/4/12" placement="top">
        <el-card>
        <h4>体验试课阶段</h4>
        <p>只需支付试课费用</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/4/3" placement="top">
        <el-card>
        <h4>双方享受试课</h4>
        <p></p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/4/2" placement="top">
        <el-card>
        <h4>体验完整课程</h4>
        <p>支付剩余费用</p>
        </el-card>
        </el-timeline-item>
        </el-timeline>
        </div>
     </div>
   </div>
 </div>
</template>

<script>
import Week from '../Personal/week.vue'
  export default {
    components: {
        Week
        },
    data() {
      return {
         isStudent:true,
         FreeTime:[],
         FreeArry:[],
         ExpectTime:[],
         ExpectArry:[],
      }
    },
    beforeMount() {
      this.FreeTime = JSON.parse(sessionStorage.getItem('freeTime'));
      this.ExpectTime = JSON.parse(sessionStorage.getItem('expectTime'));
    },
    mounted(){
        this.FreeArry = this.resolveTime(this.FreeTime);
        this.ExpectArry = this.resolveTime(this.ExpectTime);
    },
    methods: {
        resolveTime(array){
            //构造二维数组
            var tArray = new Array(); //先声明一维
                for(var k=0;k<7;k++){ //一维长度为i,i为变量，可以根据实际情况改变
                tArray[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
                for(var j=0;j<32;j++){ //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
                tArray[k][j]=false; //这里将变量初始化，我这边统一初始化为false，后面在用所需的值覆盖里面的值
                }
            }
            //将时间点转换为true
            //遍历time数组
             array.forEach((item,index)=>{
                let itemArr = item.split(',');//将字符串分为数组,方便去数据
                let row = itemArr[0]-1; //二维数组行
                let col = itemArr[1]%16;//二维数组列
                if(Math.floor(itemArr[1]/16) == 2){
                    col = 16+itemArr[1]%16;
                }else if(Math.floor(itemArr[1]/16) == 3){
                    col = 32+itemArr[1]%16;
                }
                tArray[row][col] = true; //改变false-true
                //判断是否 连续时间
                if(itemArr[2]>1){
                    let item = itemArr; //找出所有连续时间
                    for(let k=0;k<item.length;k++){
                        let len = item[2];//确定长度
                        for(let j=0;j<len;j++){
                            tArray[row][col+j] = true; //从当前true-依次递增
                        }
                    }
                }
            })
           
            return tArray;
        },
    }
  }
</script>
<style scoped>
 .topBar {
        height: 50px;
        /* background:#fff;
        position: fixed; 
        top: 0; */
        width: 100%;
        border-bottom: 1px solid #cacaca;
        z-index: 900;
        margin-bottom:35px;
    }
    .nav-wrap{
        width:1200px;
        margin:0 auto;
        position:relative;
    }
    .title{
        width:200px;
        height:49px;
        line-height: 49px;
        font-size:20px;
        float:left;
        letter-spacing: 5px;
    }
    .logingbg{
        width:86px;
        height:50px;
        position: absolute;
        left:0;
        top:0;
        background-color: #6aae21;
    }
    .loging_txt{
        text-align: center;
        color:#fff;
        line-height: 50px;
    }
    .irow{
        position:absolute;
        left:0;
        bottom:-30px;
        width:100%;
        height:30px;
        z-index: 10;
    }
    .trigle{
        /*margin-left: 10px;*/
        float: left;
        width: 0;
        height: 0;
        border-width: 43px;
        border-style: solid;
        border-color: #6aae21 transparent transparent transparent;
    }
    .section{
        height:auto;
        margin-top:50px;
    }
    .calender{
      width:72%;
      float:left;
      /* margin:0 auto; */
      /* border:1px solid red; */
    }
    .list{
        width:26%;
        float:left;
        /* border:1px solid red; */
    }
    .el-card h4{
        color:#FF5722;
    }
</style>
