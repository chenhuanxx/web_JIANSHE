<template>
  <div class="center mar-t-2">
    <div class="search-lqxx">
    		<el-form    :model="ruleForm" label-width="120px" ref="ruleForm" :rules="rules" :inline="true">
            <el-form-item label="身份证号:" prop="idCard">
              <el-input v-model="ruleForm.idCard" placeholder="请输入身份证号" clearable/>
            </el-form-item>
            <el-form-item label="姓名："  prop="name">
               <el-input v-model="ruleForm.name" placeholder="请输入姓名" clearable/>
            </el-form-item>

            <el-form-item class="mol-tj">
              <el-button class="layui-btn" type="primary" @click="onSubmit">立即提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>

      <div style="min-height: 100px;width: 100%;">
					<div v-if="lqxx"  >
						<p style="color: #0893b0;font-size: 14px;">恭喜您已被我校录取；您的录取信息如下！</p>
					 </div>
					 <div v-if="lqxx1">
						<p style="color: red;font-size: 14px;">抱歉！未查询到您的录取信息！</p>
					 </div>
					 <div v-if="lqxx">
              <el-table ref="multipleTable" :data="tableData"   style="width: 100%"    border :header-cell-style="{background:'#e6e6e6;',color:'#606266'}">
                <el-table-column prop="enrollNo" label="录取编号"   align="center"/>
                <el-table-column prop="name" label="姓名" align="name"/>
                <el-table-column prop="idCard" label="身份证号" align="center"  />
                <el-table-column prop="college" label="录取学院" align="center"  />
                <el-table-column prop="major" label="录取专业" align="center"/>
                <el-table-column prop="type" label="招考类型" align="center"/>
                <el-table-column prop="enrollYear" label="入学年份" align="center"/>
              </el-table>
					</div>
			</div>
      
		</div>

</template>
<script>
 import Left from './left/Left.vue';
 
  export default {
	  components:{
			"app-Left":Left,
		},
     data() {
      return {
        lqxx:false,
        lqxx1:false,
        ruleForm:{
          idCard :'',
          name :'',
        },

        rules: {
          idCard: [
            { required: true, message: '请输入身份证号码', trigger: 'blur'}
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
        },
        tableData:[ {enrollNo:"sa",name:"sac"} ],


      };
    },

    methods: {
     onSubmit(){
       this.$refs.ruleForm.validate((valid) => {
                  if (valid) {
                       this.$http.post("/app/enrollinfo/list", this.ruleForm ).then((response) => {
                         let arrlist = response.data.enrollinfoList;
                         if(arrlist != ''){
                           this.tableData = response.data.enrollinfoList;
                           this.lqxx=true;
                           this.lqxx1=false;

                         }else{
                           this.lqxx1=true;
                           this.lqxx=false;

                       }
                    })
                 } else {
                   return false;
                 }
        });

      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    },
 };

</script>


<style>
  #lqxx{display: none;clear: both;overflow: hidden;}
	#lqxx1{display: none;clear: both;overflow: hidden;}
	#tab-show{display: none;}
</style>
