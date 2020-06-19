<template>
  <div class="info-wrapper">
    <!-- vueCropper 剪裁图片实现-->
    <el-dialog title="图片剪裁" :visible.sync="dialogVisible" append-to-body>
      <div class="cropper-content">
        <div class="cropper" style="text-align:center">
          <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType"
            :info="true" :full="option.full" :canMove="option.canMove" :canMoveBox="option.canMoveBox"
            :original="option.original" :autoCrop="option.autoCrop" :fixed="option.fixed"
            :fixedNumber="option.fixedNumber" :centerBox="option.centerBox" :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"></vueCropper>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="finish">确认</el-button>
      </div>
    </el-dialog>
    <!-- 裁剪图片 -->
    <div class="min-width">
      <div class="profile-info-wrapper">
        <div class="profile-level"></div>
        <div class="profile-info-main clearfix">
          <a class="head-pic clearfix">
            <el-upload class="avatar-uploader" action="#" :on-change='changeUpload' :auto-upload="false"
              :show-file-list="false">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </a>
          <div class="profile-info-cont">
            <section>
              <a class="profile-user-name">zbq</a>
            </section>
            <ul class="profile-cont clearfix">
              <li class="profile-city"><i class="ico-pcity"></i>湖南</li>
              <li class="profile-work"><i class="ico-pwork"></i>教员</li>
              <li class="profile-edu"><i class="ico-pedu"></i>湖南文理学院</li>
              <li class="work-authentica"><i class="ico-auth"></i>暂未认证<a class="link-blue">点击申请></a></li>
            </ul>
          </div>
        </div>
        <!--profile-info-main end -->
        <div class="profile-oprt-box">
          <router-link to="/usercenter/account">
            <el-button type="primary" icon="el-icon-edit">编辑</el-button>
          </router-link>
        </div>
        <!--profile-oprt-box end  -->
      </div>
      <!--profile-info-wrapper end  -->
    </div>
    <!-- min-width end -->
  </div>
  <!-- info-wrapper end -->
</template>

<script>
import axios from 'axios'
// 引入image-conversion
import testApi from '@/api/api'
import imageConversion from 'image-conversion'
import { setCookie, getCookie } from '../../util/util.js'
export default {
  name: 'PersonalHeader',
  data () {
    return {
      userId: getCookie('uUid'),
      errorStr: '',
      imageUrl: '',
      imgStr: require('../../assets/images/zbq.jpg'),
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getCookie('AccessToken')
      },
      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'png', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        // autoCropWidth: 300, // 默认生成截图框宽度
        // autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [7, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      // 防止重复提交
      loading: false,
      obj: ''
    }
  },
  created () {

  },
  mounted () {
    this.resoveImg()
  },
  methods: {
    // base64转文件
    dataURItoBlob (dataURI) {
      var byteString = atob(dataURI.split(',')[1])
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      var ab = new ArrayBuffer(byteString.length)
      var ia = new Uint8Array(ab)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ab], { type: mimeString })
    },
    changeUpload (file, fileList) {
      const this_ = this
      const isLt1M = file.size / 1024 / 1024 < 1
      if (!isLt1M) {
        // this.$message.error('上传文件大小不能超过 1MB!');
        // 通过canvas压缩图片
        var reader = new FileReader()
        reader.readAsDataURL(file.raw)
        var img = new Image()
        reader.onload = function (e) {
          var width = 1080, // 图像大小
            quality = 0.8, // 图像质量
            canvas = document.createElement('canvas'),
            drawer = canvas.getContext('2d')
          img.src = this.result
          img.onload = function () {
            canvas.width = width
            canvas.height = width * (img.height / img.width)
            drawer.drawImage(img, 0, 0, canvas.width, canvas.height)
            let src = canvas.toDataURL('image/png', quality)
            this.obj = this_.dataURItoBlob(src) // 將base64轉化為文件
            this_.$nextTick(() => {
              // 此方法可以解決本地自主渲染圖片
              var reader = new FileReader() // new對象
              reader.readAsDataURL(this.obj) // 读出 base64
              reader.onloadend = function () {
                this_.option.img = reader.result // 將圖片賦值給彈出框
                this_.dialogVisible = true
              }
            })
          }
        }
        return false
      }
      //   this.fileinfo = file
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        // 此方法可以解決本地自主渲染圖片
        var reader = new FileReader() // new對象
        reader.readAsDataURL(file.raw) // 读出 base64
        reader.onloadend = function () {
          this_.option.img = reader.result // 將圖片賦值給彈出框
          this_.dialogVisible = true
        }
      })
    },
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish () {
      let this_ = this
      this.dialogVisible = false
      this.$refs.cropper.getCropBlob((data) => {
        this.loading = true
        // base64方法
        var reader = new FileReader()
        reader.readAsDataURL(data) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          this_.imageUrl = dataURL
        }
        // console.log(this_.imageUrl)
        // 發送給後台
        const formData = new FormData()
        //  console.log(data,"data")
        formData.append('uploadFile', data)
        testApi.uploadAvatar(formData).then(res => {
          console.log('res', res)
          if (res.status == 200) {
            this.dialogVisible = false
            this.successUrl = res.data.Data.response // 请求之后将返回的URL给修改的接口在进行一次修改请求
          } else {
            console.log('失败')
          }
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
        // axios({
        // url :"https://dev-ao5dx3e.lonltech.com:646/api/files/avatar",
        // method: "post",
        // data:formData,
        // headers: this.header
        // }).then(res => {
        // console.log("res",res)
        // if (res.status == 200) {
        //     this.dialogVisible = false
        //     this.successUrl = res.data.response; // 请求之后将返回的URL给修改的接口在进行一次修改请求
        // } else {
        //     console.log("失败");
        // }
        // }).catch(err => {
        //     this.loading = false
        //     console.log(err);
        // });
      })
    },
    resoveImg () {
      testApi.getAvatar(this.userId).then(res => {
        console.log(res)
        console.log(res.data, '头像')
        if (res.data.Code = 1) {
          this.imageUrl = res.data.Data.Url // 请求之后将返回的URL给修改的接口在进行一次修改请求
        } else {
          console.log('失败')
        }
      }).catch(err => {
        console.log(err)
      })
      // axios({
      // url :"https://dev-ao5dx3e.lonltech.com:646/api/files/avatar?userUuid="+this.userId,
      // method: "get",
      // headers: this.header
      // }).then(res => {
      // if (res.status = 200) {
      //     this.imageUrl = res.data; // 请求之后将返回的URL给修改的接口在进行一次修改请求
      // } else {
      //     console.log("失败");
      // }
      // }).catch(err => {
      //     console.log(err);
      // });
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
        // console.log(param.get('uploadFile'),"7777") // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        testApi.uploadAvatar(param).then(res => {
          if (res.status = 200) {
            //    this.successUrl = res.data.response; // 请求之后将返回的URL给修改的接口在进行一次修改请求
          } else {
            console.log('失败')
          }
        }).catch(err => {
          console.log(err)
        })
        //   axios({
        //     url :"https://dev-ao5dx3e.lonltech.com:646/api/files/avatar",
        //     method: "post",
        //     data:param,
        //     headers: this.header
        //    }).then(res => {
        //     console.log("img",res)
        //     if (res.status = 200) {
        //     //    this.successUrl = res.data.response; // 请求之后将返回的URL给修改的接口在进行一次修改请求
        //     } else {
        //         console.log("失败");
        //     }
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // base64方法
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          // console.log(dataURL) //base64
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log(imgSize, '大小不合适')
      }
    }
  }
}
</script>
<style  scoped>
.info-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
.min-width {
  width: 1200px;
  margin: 0 auto;
}
.profile-info-wrapper {
  position: relative;
  margin-bottom: 10px;
  height: 100px;
  background: #fff;
  clear: both;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
}
.profile-level {
  width: 10px;
  height: 100%;
  border-radius: 3px 0 0 3px;
  float: left;
  background: #409eff;
}
.profile-info-main {
  float: left;
  padding: 20px 20px 0;
}
.profile-info-main .head-pic {
  position: relative;
  width: 60px;
  height: 60px;
  display: block;
  float: left;
  /* margin-right:10px; */
}
a {
  color: #333;
  text-decoration: none;
}
.profile-info-main .head-pic img {
  width: 100%;
  /* height:100%; */
  height: 58px;
  border-radius: 50%;
}
.profile-info-cont {
  margin-left: 80px;
  padding-top: 5px;
}
.profile-user-name {
  max-width: 14px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  vertical-align: middle;
  line-height: 1;
  color: #409eff !important;
}
.profile-cont {
  overflow: hidden;
  margin: 15px -44px;
}
.profile-cont li {
  float: left;
  margin-right: 10px;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 1100px;
}
.profile-cont i {
  background: url(//static.nowcoder.com/images/img/profile/icon-card.png)
    no-repeat;
  display: inline-block;
  width: 21px;
  height: 16px;
  vertical-align: text-bottom;
  margin-right: 2px;
}
.profile-cont .ico-pcity {
  background-position: 0 0;
}
.profile-cont .ico-pwork {
  background-position: 0 -35px;
}
.profile-cont .ico-pedu {
  background-position: 0 -67px;
}
.profile-cont .ico-auth {
  background: url(//static.nowcoder.com/images/img/profile/icon-auth.png)
    no-repeat;
}
.profile-cont .work-authentica {
  max-width: 20em;
}
.work-authentica a {
  margin-left: 10px;
}
.link-blue {
  color: #409eff !important;
}
.profile-oprt-box {
  position: absolute;
  right: 20px;
  top: 30px;
}
.el-button {
  margin-right: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 68px;
  height: 68px;
  line-height: 68px;
  border: 1px solid #ccc;
  text-align: center;
  z-index: 99999;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
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
.cropper-content .cropper {
  width: auto;
  height: 300px;
}
</style>
