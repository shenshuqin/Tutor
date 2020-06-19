<template>
  <div id="certify">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(show, index) in shows" :key="index">
          <div class="slide_main">
            <div v-if="show.is_teach" class="flag_jaoyuan flag-left">教员</div>
            <div v-else class="flag_xueyuan flag-left">学员</div>
            <img src="../../assets/images/01.png">
            <p class="name">{{show.name}}</p>
            <div class="fix-content">
              <span class="unisever">{{show.unit}}</span>
              <p class="kemu"><span>{{show.subject}}</span><span>教龄:{{show.teach_age}}</span></p>
              <p class="maoshu">{{show.describe}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      shows: [
        {
          is_teach: true,
          name: '申老师',
          unit: '湖南文理学院',
          subject: '数学',
          teach_age: '1年',
          describe: '性格暴躁,有亲和力,有耐心,喜欢小朋友'
        },
        {
          is_teach: true,
          name: '胡老师',
          unit: '湖南文理学院',
          subject: '数学',
          teach_age: '2年',
          describe: '性格好,有亲和力,有耐心,喜欢小朋友'
        },
        {
          is_teach: false,
          name: '张博强',
          unit: '湖南文理学院',
          subject: '计算机',
          teach_age: '3年',
          describe: '性格好,有亲和力,有耐心,喜欢小朋友'
        }
      ]
    }
  },
  created () {
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      var certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
          // clickable :true,
        },
        on: {
          progress: function (progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              var slideProgress = this.slides[i].progress
              var modify = 1
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
              }
              var translate = slideProgress * modify * 260 + 'px'
              var scale = 1 - Math.abs(slideProgress) / 5
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
              slide.transform('translateX(' + translate + ') scale(' + scale + ')')
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1)
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0)
              }
            }
          },
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition)
            }
          }
        }
      })
    }
  }

}
</script>

<style  scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";
#certify {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 480px;
  height: 370px;
  background: #fff;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px #ddd;
}
.slide_main {
  width: 100%;
  margin: 0 auto;
  /* border:1px solid red; */
}

/* .swiper-slide:before{
	    content:'';
        position: absolute;
        display:block;
        width: 0;
        height: 0;
        border-top: 65px solid #37c2a6;
        border-right: 65px solid transparent;
        z-index: 99;
}
.swiper-slide:after{
	    content:'教员';
        position: absolute;
        top: 0px;
        left: 10px;
        width: 50px;
        height: 50px;
        display: inline-block;
        transform: rotate(-45deg);
        color:#fff;
        z-index: 100;
} */
.slide_main img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 30px auto;
}
#certify .swiper-slide img {
  display: block;
}
/* #certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
} */

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  left: -30px;
  width: 45px;
  height: 45px;
  background: url("../../assets/images/wm_button_icon.png") no-repeat;
  background-position: 0 0;
  background-size: 100%;
}

#certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%;
}

#certify .swiper-button-next {
  right: -30px;
  width: 45px;
  height: 45px;
  background: url("../../assets/images/wm_button_icon.png") no-repeat;
  background-position: 0 -93px;
  background-size: 100%;
}

#certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%;
}
.name {
  text-align: center;
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-top: 25px;
}
.fix-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  -webkit-flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-direction: column;
  -ms-flex-wrap: nowrap;
}
.unisever {
  display: inline-block;
  /* width: 94px; */
  padding: 0 10px;
  height: 30px;
  background: rgba(255, 211, 77, 1);
  border-radius: 15px;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 15px;
  text-align: center;
  line-height: 30px;
  margin: 8px auto;
}
.kemu {
  text-align: center;
  display: block;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 8px;
}
.kemu span {
  margin-left: 12px;
}
.maoshu {
  display: block;
  width: 315px;
  /* height: 130px; */
  font-size: 16px;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
  margin: 0px auto;
  /* border:1px solid red; */
}
.swiper-slide .flag_jaoyuan {
  position: absolute; /*绝对定位*/
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 74px;
  background-color: #ff5722;
  color: #fff;
}
.swiper-slide .flag_xueyuan {
  position: absolute; /*绝对定位*/
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 74px;
  background-color: #37c2a6;
  color: #fff;
}
.swiper-slide .flag-left {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: -18px;
  top: 9px;
}
</style>
