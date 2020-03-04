<template>
<div>
    <div class="wrapper">
        <ul class="bg-bubbles">
            <li v-for="(item,index) in praise" :key="index" :class="setClass(index)" ><img :src="item.avatar" class="avatar">{{item.content}}</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name: 'bubble',
    data () {
        return {
            praise:[
                {avatar:require('../../assets/images/02.png'),content:'hello'},
                {avatar:require('../../assets/images/03.png'),content:'hello'},
                {avatar:require('../../assets/images/02.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/01.png'),content:'hello'},
                {avatar:require('../../assets/images/02.png'),content:'hello'},
                {avatar:require('../../assets/images/03.png'),content:'hello'},
                {avatar:require('../../assets/images/01.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
                {avatar:require('../../assets/images/04.png'),content:'hello'},
            ]
        }
    },
    created(){
    },
    mounted () {
        
    },
    methods: {
        // vue中v-for循环如何将变量带入class的属性名中
         setClass(index) {
             let obj = {}
            obj[`bubble${index%10}`] = true
            return obj
         },

    }

}
</script>
<style  scoped>
  .wrapper {
        background: #50a3a2;
        background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
        background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
        /* position: absolute;
        top: 100%;
        left: 0; */
        width: 100%;
        height: 400px;
        margin-top: 20px;
        overflow: hidden;
    }
    .bg-bubbles {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 150px;
        height: 35px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -100px;
        -webkit-animation: square 25s infinite;
        animation: square 25s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }
    .bg-bubbles li:nth-child(even){
        text-align:right;
    }
    .bg-bubbles li:nth-child(even):after{
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 5px;
        right: -16px;
        border: solid 8px;
        border-color: transparent transparent transparent  rgba(255, 255, 255, 0.15);
        font-size: 0;
    }
    .bg-bubbles li:nth-child(odd):after{
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 5px;
        left: -16px;
        border: solid 8px;
        border-color: transparent rgba(255, 255, 255, 0.15) transparent transparent;
        font-size: 0;
    }
    .bg-bubbles li:nth-child(even) img{
        width:50px;
        height:50px;
        border-radius: 50%;
        position: absolute;
        top:-8px;
        left:108%;
        /* background-color: #ff5721; */
    }
    .bg-bubbles li:nth-child(odd) img{
        width:50px;
        height:50px;
        border-radius: 50%;
        position: absolute;
        top:-8px;
        right:108%;
        /* background-color: #5b6aba; */
    }
    .bubble0{
         left: 10%;
    }
    .bubble1{
        left: 20%;
        -webkit-animation-delay: 8s !important;
        animation-delay: 8s !important;
        -webkit-animation-duration: 17s !important;
        animation-duration: 17s !important;
    }
    .bubble2{
         left: 60%;
        -webkit-animation-delay: 2s !important;
        animation-delay: 2s !important;
        -webkit-animation-duration: 17s  !important;
        animation-duration: 17s  !important;
    }
    .bubble3{
        left: 25%;
        -webkit-animation-delay: 14s  !important;
        animation-delay: 14s  !important;
    }
    .bubble4{
         left: 40%;
        -webkit-animation-duration: 22s  !important;
        animation-duration: 22s  !important;
        background-color: rgba(255, 255, 255, 0.25);
    }
    .bubble5{
         left: 70% ;
    }
    .bubble6{
        left: 80%;
        -webkit-animation-delay: 23s  !important;
        animation-delay: 23s  !important;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bubble7{
          left: 32%;
        -webkit-animation-delay: 17s  !important;
        animation-delay: 17s  !important;
    }
    .bubble8{
         left: 55%;
        -webkit-animation-delay: 15s  !important;
        animation-delay: 15s  !important;
        -webkit-animation-duration: 40s  !important;
        animation-duration: 40s  !important;
    }
    .bubble9{
        left: 25%;
        -webkit-animation-delay: 12s  !important;
        animation-delay: 12s  !important;
        -webkit-animation-duration: 40s  !important;
        animation-duration: 40s  !important;
        background-color: rgba(255, 255, 255, 0.3);
    }
    .bubble10{
         left: 60%;
        -webkit-animation-delay: 31s  !important;
        animation-delay: 31s  !important;
    }
    /* .bg-bubbles li:nth-child(1) {
        left: 10%;
    }
    .bg-bubbles li:nth-child(2) {
        left: 20%;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }
    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 14s;
        animation-delay: 14s;
    }
    .bg-bubbles li:nth-child(4) {
        left: 40%;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }
    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }
    .bg-bubbles li:nth-child(6) {
        left: 80%;
        -webkit-animation-delay: 23s;
        animation-delay: 23s;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bg-bubbles li:nth-child(7) {
        left: 32%;
        -webkit-animation-delay: 17s;
        animation-delay: 17s;
    }
    .bg-bubbles li:nth-child(8) {
        left: 55%;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }
    .bg-bubbles li:nth-child(9) {
        left: 25%;
        -webkit-animation-delay: 12s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }
    .bg-bubbles li:nth-child(10) {
        left: 60%;
        -webkit-animation-delay: 31s;
        animation-delay: 31s;
    } */
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) ;
            transform: translateY(-700px) ;
        }
    }
    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) ;
            transform: translateY(-700px) ;
        }
    }
</style>