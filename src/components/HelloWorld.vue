<template>
  <div>
    <div class="hello">
      <div class="user-header">
        <input type="file" name="image" accept="image/*" @change="onchangeImgFun"
          class="header-upload-btn user-header-com" />
        <img alt :src="imgStr" class="user-header-img user-header-com" />
        <p class="tip">
          图片限制50kb
          <span class="error">{{errorStr}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getCookie } from '../util/util.js'
import testApi from '@/api/api'
export default {
  data () {
    return {
      userId: 'q7xboopiqwm26k5',
      list: [],
      header: {
        'Content-Type': 'text/plain; charset=utf-8 ;multipart/form-data',
        Authorization: 'Bearer ' + getCookie('AccessToken')
      },
      imgStr: require('../assets/images/zbq.jpg'),
      errorStr: ''
    }
  },
  created () {
    this.fechData()
  },
  mounted () {
    axios({
      url:
        'https://dev-ao5dx3e.lonltech.com:646/api/files/avatar?userUuid=' +
        this.userId,
      method: 'get',
      headers: this.header
    })
      .then(res => {
        console.log('imguser', res)
        if ((res.status === 200)) {
          this.successUrl = res.data.response // 请求之后将返回的URL给修改的接口在进行一次修改请求
        } else {
          console.log('失败')
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    fechData () {
      testApi.getList().then(res => {
        console.log(res, 'api')
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit (index, row) {
      console.log(index, row) // 这里可打印出每行的内容
      // 点击编辑
      this.dialogFormVisible = true // 显示弹框
      let _row = row
      // 将每一行的数据赋值给Dialog弹框（这里是重点）
      this.editForm = Object.assign({}, _row) // editForm是Dialog弹框的data
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    onchangeImgFun (e) {
      var file = e.target.files[0]
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size / 1024
      var _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 1024) {
        let param = new FormData() // 创建form对象
        param.append('uploadFile', file) // 通过append向form对象添加数据
        console.log(param.get('uploadFile'), '7777') // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        axios({
          url: 'https://dev-ao5dx3e.lonltech.com:646/api/files/avatar',
          method: 'post',
          data: param,
          headers: this.header
        })
          .then(res => {
            console.log('img', res)
            if ((res.status = 200)) {
              this.successUrl = res.data.response // 请求之后将返回的URL给修改的接口在进行一次修改请求
            } else {
              console.log('失败')
            }
          })
          .catch(err => {
            console.log(err)
          })
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // 本地路径方法 1
        // this.imgStr = window.URL.createObjectURL(e.target.files[0])
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

        // base64方法 2
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          // console.log(dataURL)
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log(imgSize, '大小不合适')
        // 第一种方法
      }
    }
  }
}
</script>
<style scoped>
.user-header {
  position: relative;
  display: inline-block;
}
.user-header-com {
  width: 144px;
  height: 144px;
  display: inline-block;
}
.header-upload-btn {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
}
.tip {
  font-size: 14px;
  color: #666;
}
/* error是用于错误提示 */
.error {
  font-size: 12px;
  color: tomato;
  margin-left: 10px;
}
</style>
