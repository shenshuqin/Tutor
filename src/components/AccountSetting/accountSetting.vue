<template>
  <div class="account">
    <div class="jy-main clearfix">
      <div class="min-width">
        <div class="jy-content">
          <div class='module-box'>
            <div class="module-body">
              <div class="pro-caption clearfix">
                <span class="info-title">账户设置</span>
              </div>
              <!-- 设置 -->
              <el-form v-if="isUser" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px"
                class="demo-ruleForm">
                <el-form-item label="设置用户名" prop="username">
                  <el-input v-model.number="ruleForm2.username" style="width:40%"></el-input>
                </el-form-item>
                <el-form-item label="设置密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" style="width:40%"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" style="width:40%">
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
              </el-form>
              <!-- 修改 -->
              <el-form v-else :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="120px"
                class="demo-ruleForm">
                <el-form-item label="修改用户名" prop="username1">
                  <el-input v-model.number="ruleForm1.username1" style="width:40%"></el-input>
                </el-form-item>
                <el-form-item label="修改密码" prop="pass1">
                  <el-input type="password" v-model="ruleForm1.pass1" auto-complete="off" style="width:40%"></el-input>
                </el-form-item>
                <el-form-item label="修改密码" prop="checkPass1">
                  <el-input type="password" v-model="ruleForm1.checkPass1" auto-complete="off" style="width:40%">
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
                  <el-button @click="resetForm('ruleForm1')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- modile-box end -->
        </div>
        <!-- jy-content end -->
      </div>
      <!-- min-width end -->
    </div>
    <!-- jy-main end -->
  </div>
</template>
<script>
import PersonalHeader from '../Personal/personalheader'
import PersonalList from '../Personal/personallist.vue'
import { getCookie } from '../../util/util'
export default {
  name: 'Publish',
  components: {
    PersonalHeader,
    PersonalList
  },
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      let flag = !/[@#\$%\^&\*]+/g.test(value)
      if (!flag) {
        callback(new Error('不能为非法字符'))
      } else {
        callback()
      }
    }
    // 设置
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    // 设置
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    // 修改
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm1.checkPass !== '') {
          this.$refs.ruleForm1.validateField('checkPass1')
        }
        callback()
      }
    }
    // 修改
    var validatePass4 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm1.pass1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isUser: false,
      ruleForm2: {
        pass: '',
        checkPass: '',
        username: ''
      },
      ruleForm1: {
        pass1: '',
        checkPass1: '',
        username1: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkName, trigger: 'blur' }
        ]
      },
      rules1: {
        pass1: [
          { validator: validatePass3, trigger: 'blur' }
        ],
        checkPass1: [
          { validator: validatePass4, trigger: 'blur' }
        ],
        username1: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 判断是否有用户名
    let uUid = getCookie('uUid')
    if (uUid) {
      this.isUser = false
    }
    let isUser = sessionStorage.getItem('isUser')
    if (isUser) {
      this.isUser = true
    }
  },
  methods: {
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
.min-width {
  width: 1200px;
  margin: 0 auto;
}
.jy-main .jy-content {
  margin: 0 0 0 10px;
  width: 74%;
  float: left;
}
.module-box {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background: #fff;
}
.module-box:last-child {
  margin-bottom: 0;
}
.module-body {
  padding: 10px 20px;
}
.pro-caption {
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-bottom: 1px solid #d4d4d4;
  overflow: hidden;
}
.info-title {
  font-weight: 700;
  font-size: 16px;
  margin-top: 13px;
  line-height: 22px;
  display: inline-block;
}
</style>
