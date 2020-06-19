<template>
  <div>
    <div v-if="arr.length" class="search-history">
      <div class="history-header"><span>{{msg}}</span><span @mousedown="clearHistory()" v-show="clear">清除记录</span></div>
      <ul class="h-list">
        <li v-for="(item, index) in arr" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: ['parentmsg'],
  data () {
    return {
      clear: true,
      msg: '历史记录',
      arr: []
    }
  },
  created () {

  },
  mounted () {
    this.historyShow()
  },
  methods: {
    historyShow () {
      var searchHistory = localStorage.getItem('searchHistory')
      if (searchHistory) {
        var searchArr = searchHistory.split(',')
      }
      var searchArr = [...new Set(searchArr)]
      if (searchArr.length > 6) {
        var len = searchArr.length
        var indx = len - 6
        searchArr.splice(0, indx)
      }
      this.arr = searchArr
    },
    clearHistory () {
      // this.parentmsg = false;
      this.clear = false
      this.msg = '暂无记录'
      localStorage.removeItem('searchHistory')
      this.arr = []
    }
  }

}
</script>
<style scoped>
li,
ol,
ul {
  list-style: none;
}
.search-history {
  width: 794px;
  height: auto;
  position: absolute;
  top: 69px;
  left: 0;
  background: #fff;
  /* border:1px solid red; */
}
.history-header {
  width: 90%;
  display: flex;
  margin: 8px auto;
  margin-bottom: -10px;
  justify-content: space-between;
}
.history-header span:nth-of-type(1) {
  color: #999999;
}
.history-header span:nth-of-type(2) {
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
}
.search-history ul li {
  width: 60px;
  height: 35px;
  float: left;
  margin: 10px 10px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  border-radius: 1px;
  box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.3);
  border: solid 1px #ededed;
  color: #4a4a4a;
  background-color: #fafafa;
}
.search-history ul li:hover {
  background-color: #ededed;
}
</style>
