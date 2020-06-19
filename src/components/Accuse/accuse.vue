<template>
  <div class="accuse">
    <div class="accuse-header">
      <p>投诉中心</p>
    </div>
    <div class="accuse-main min-width">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="类别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="侵权"></el-radio>
            <el-radio label="建议"></el-radio>
            <el-radio label="其他"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="投诉内容" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="联系方式" prop="name">
          <el-input></el-input>
          <el-button type="primary">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="yzm">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        yzm: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        dialogImageUrl: '',
        dialogVisible: false
      },
      rules: {
        name: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        yzm: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择投诉类别', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写投诉内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      console.log(file.url)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.accuse-header {
  width: 100%;
  height: 130px;
  background: #409eff;
}
.accuse-header p {
  width: 1200px;
  line-height: 130px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  letter-spacing: 6px;
}
.accuse-main {
  margin-top: 40px;
}
.el-input {
  width: 30%;
}
</style>
