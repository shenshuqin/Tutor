<template>
<div>
   <full-calendar :events="monthData" class="test-fc"
                     first-day='1'  locale="zh-cn" 
                     @changeMonth="changeMonth"   
                     @eventClick="eventClick"     
                     @dayClick="dayClick"        
                     @moreClick="moreClick">
    </full-calendar>   
</div>
</template>
<script>
import { FullCalendar } from 'vue-fullcalendar'
export default {
  data() {
      return {
       monthData: [
    {
      title : 'eeeeeeeee',  // 事件内容
      start : '2019-11-11', // 事件开始时间
      end : '2019-11-11',   // 事件结束时间
      cssClass: 'red'       // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
    },
    {
      title : 'sssss',
      start : '2019-11-12',
      end : '2018-11-12',
      cssClass: 'blue'  
    },
    {
      title : 'dddddddd',
      start : '2019-11-21',
      end : '2019-11-21',
      cssClass: 'blue'  
    },
    {
      title : 'cccccc',
      start : '2019-11-1',
      end : '2018-11-1',
      cssClass: 'red'  
    },
    {
      title : 'aaaaaa',
      start : '2019-11-19',
      end : '2019-11-19',
      cssClass: 'red'  
    },
    {
      title : 'bbbbbb',
      start : '2019-11-30',
      end : '2019-11-30',
      cssClass: 'blue'
    }
  ]
      }
  },
  methods: {
     // 选择月份
      changeMonth (start, end, current) {
    //    console.log('changeMonth', start.format(), end.format(), current.format())
      },
      // 点击事件
      eventClick (event, jsEvent, pos) {
        console.log('eventClick', event, jsEvent, pos)
      },
      // 点击当天
      dayClick (day, jsEvent) {
         console.log('dayClick', day, jsEvent)
      },
      // 查看更多
      moreClick (day, events, jsEvent) {
        console.log('moreCLick', day, events, jsEvent)
      },
  },
  components: {
      'full-calendar': require('vue-fullcalendar')
  },
}
</script>
<style>
.comp-full-calendar {
    padding: 20px;
    background: #fff;
    /* max-width: 891px; */
    width: 92%;
    margin-left:-16px;
    /* margin: 0 auto; */
    /* border:1px solid red; */
}
</style>