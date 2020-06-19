<template>
  <div class="confers">
    <div class="hed"><i class="el-icon-umbrella"></i></div>
    <div class="hed_title">确认好课程价格时间,即可创建订单</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="课程价格">
        <el-col :span="19">
          <el-input v-model="form.price"></el-input>
        </el-col>
        <el-col class="line" :span="4">元</el-col>
      </el-form-item>
      <el-form-item label="课程时间">
        <el-col :span="22">
          <el-input v-model="form.time"></el-input>
        </el-col>
      </el-form-item>
      <!-- <el-form-item> -->
      <el-col :span="22">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-col>
      <!-- </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        price: '',
        time: ''
      }
    }
  },

  components: {},

  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.confers .el-form {
  width: 20%;
  margin: 20px auto;
  height: 250px;
  /* border:1px solid red; */
}
.confers .el-input {
  background-color: #f6f6f8;
  border-bottom: 1px solid #ccc;
}
.confers .el-input__inner {
  height: 33px;
  font-size: 13px;
  box-shadow: none;
  background-color: #f6f6f8;
  border: none;
}

.confers .el-input__inner:hover {
  border-color: #e9e9e9;
}

.confers .el-input__inner:focus {
  border-color: #e9e9e9;
  box-shadow: none;
  transition-duration: 0.5s;
}

.confers .el-input__inner::-webkit-input-placeholder {
  line-height: 20px;
}

.confers .el-input__inner,
.el-checkbox__inner,
.el-textarea__inner,
.el-button {
  border-radius: 0;
}
</style>
<style scoped>
.confers .hed {
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
}
.confers .el-icon-umbrella {
  font-size: 38px;
}
.confers .el-button {
  width: 110%;
  margin-top: 10px;
}
.confers .hed_title {
  width: 100%;
  height: 40px;
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  color: #ccc;
}
</style>
