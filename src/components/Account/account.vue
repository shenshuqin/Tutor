<template>
<div class="account">
    <div class="jy-main clearfix">
        <div class="min-width">
            <div class="jy-content">
                <div class='module-box'>
                    <div class="module-body">
                        <div class="pro-info-box">
                            <div class="pro-caption clearfix">
                                <span class="info-title">基本信息</span>
                                <span class="ctr-btn-box">
                                    <!-- <button type="button" class="btn btn-primary">编辑</button> -->
                                    <!-- <button type="button" class="btn btn-default">取消</button>
                                    <button type="button" class="btn btn-success">保存</button> -->
                                    <el-button>取消</el-button>
                                    <el-button type="primary">保存</el-button>
                                </span>
                            </div>
                            <!-- pro-caption end -->
                            <div class="info-box">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="我的昵称">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="手机号">
                                        <el-input v-model="form.phone"></el-input>
                                    </el-form-item>
                                     <el-form-item label="我的身份">
                                        <el-input v-model="form.status"></el-input>
                                    </el-form-item>
                                    <el-form-item label="我的性别">
                                        <el-radio-group v-model="form.resource">
                                        <el-radio label="女"></el-radio>
                                        <el-radio label="男"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                     <el-form-item label="擅长科目">
                                        <el-checkbox-group v-model="form.type">
                                        <el-checkbox label="语文" name="type"></el-checkbox>
                                        <el-checkbox label="数学" name="type"></el-checkbox>
                                        <el-checkbox label="英语" name="type"></el-checkbox>
                                        <el-checkbox label="物理" name="type"></el-checkbox>
                                        <el-checkbox label="生物" name="type"></el-checkbox>
                                        <el-checkbox label="化学" name="type"></el-checkbox>
                                        <el-checkbox label="地理" name="type"></el-checkbox>
                                        <el-checkbox label="政治" name="type"></el-checkbox>
                                        <el-checkbox label="历史" name="type"></el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                      <el-form-item label="个人优势">
                                        <el-input type="textarea" v-model="form.desc"></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <!-- info-box end -->
                        </div>
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
export default {
     name: 'Publish',
     components: {
        PersonalHeader,
        PersonalList
    },
  data() {
      return {
           form: {
            name: '',
            phone:'',
            status:'',
            resource: '',
            type: [],
            desc:''
            }
      }
  },
  methods: {
     onSubmit() {
        console.log('submit!');
      }
  },
}
</script>
<style scoped>
 .min-width{
    width:1200px;
    margin:0 auto;
}
.jy-main .jy-content{
    margin:0 0 0 10px;
    width:74%;
    float:left;
}
.module-box{
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    background: #fff;
}
.module-box:last-child{
    margin-bottom:0;
}
.module-body{
    padding:10px 20px;
}
.pro-caption{
    padding-bottom:5px;
    margin-bottom:30px;
    border-bottom:1px solid #d4d4d4;
    overflow: hidden;
}
.info-title{
    font-weight:700;
    font-size:16px;
    margin-top:13px;
    line-height: 22px;
    display:inline-block;
}
.ctr-btn-box{
    float:right;
}
.pro-caption {
    /* display:flex;
    justify-content: space-between; */
}
</style>