<template>
  <div class="center mar-t-2">
    <div class="pc">


					<app-Left></app-Left>


			<div class="fl list">
				<div class="contact">
          <div class="xslxfs">
						<strong>学生联系方式</strong>
					</div>
          <el-form    :model="ruleForm" label-width="120px" ref="ruleForm" :rules="rules"  >
              <el-form-item label="联系方式:" prop="contract">
                <el-input v-model="ruleForm.contract" placeholder="请输入电话或者QQ" clearable/>
              </el-form-item>
              <el-form-item label="姓名："  prop="name">
                 <el-input v-model="ruleForm.name" placeholder="请输入姓名" clearable/>
              </el-form-item>
              <el-form-item label="毕业院校："   prop="graduateFrom">
                 <el-input v-model="ruleForm.graduateFrom" placeholder="请输入毕业院校" clearable/>
              </el-form-item>
              <el-form-item label="拟报考专业："   prop="major">
                 <el-input v-model="ruleForm.major" placeholder="请输入拟报考专业" clearable/>
              </el-form-item>
              <el-form-item label="考试分数："  prop="score">
                 <el-input v-model="ruleForm.score" placeholder="请输入考试分数" clearable/>
              </el-form-item>

              <el-form-item>
                <el-button class="layui-btn" type="primary" @click="onSubmit">立即提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>

          </el-form>
          <div class="map">
						<iframe src="https://j.map.baidu.com/fa/CHl" ></iframe>
					</div>
					<ul class=" mar-t-2">
						<strong>学校联系方式</strong>
						<li>学校名称 : {{schoolName}}</li>
						<li>咨询电话 :{{consultTel}}</li>
						<!-- // 0512-62933888、62932251、62932092 -->
						<li>商学院电话 : 
              {{busCollegeTel}}
              <!-- 0512-62932663 -->
              </li>
						<li>人文艺术学院电话 : 
              {{humanCollegeTel}}
              <!-- 0512-62932640 -->
              </li>
						<li>信息工程学院电话 : 
              {{aiCollegeTel}}
              <!-- 0512-62932507 -->
              </li>
						<li>纳米科技学院电话 : 
              {{nanoCollegeTel}}
              <!-- 0512-62932554 -->
              </li>
						<li>人工智能学院电话 : 
              <!-- 0512-62932553 -->
              {{aiCollegeTel}}
              </li>
						<li>学校官网 : <a href="http://www.siso.edu.cn/" target="_blank" title="苏州工业园区服务外包职业学院">
							{{officalWebsite}}</a>
						</li>
						<li>咨询QQ群 : {{consultQq}}</li>
						<li>微信号 : {{wechat}}</li>
						<li>学校地址 : {{schoolAddress}}</li>
						<li>邮箱 : {{email}}</li>
						<li>邮编 : 215123</li>
					</ul> 
				</div>
			</div>
</div>

 <div class="mobile">
 
			<div class=" list-m">
				<div class="contact">
          	<div class="xslxfs">
						<strong>学生联系方式</strong>
					</div>
          <el-form    :model="ruleForm" label-width="100px" ref="ruleForm" :rules="rules"  >
              <el-form-item label="联系方式:" prop="contract">
                <el-input v-model="ruleForm.contract" placeholder="请输入电话或者QQ" clearable/>
              </el-form-item>
              <el-form-item label="姓名："  prop="name">
                 <el-input v-model="ruleForm.name" placeholder="请输入姓名" clearable/>
              </el-form-item>
              <el-form-item label="毕业院校："   prop="graduateFrom">
                 <el-input v-model="ruleForm.graduateFrom" placeholder="请输入毕业院校" clearable/>
              </el-form-item>
              <el-form-item label="拟报考专业："   prop="major">
                 <el-input v-model="ruleForm.major" placeholder="请输入拟报考专业" clearable/>
              </el-form-item>
              <el-form-item label="考试分数："  prop="score">
                 <el-input v-model="ruleForm.score" placeholder="请输入考试分数" clearable/>
              </el-form-item>

              <el-form-item>
                <el-button class="layui-btn" type="primary" @click="onSubmit">立即提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>

          </el-form>
          <div class="map">
						<iframe src="https://j.map.baidu.com/fa/CHl" ></iframe>
					</div>

					<ul>
						<strong>学校联系方式</strong>
						<li>学校名称 : {{schoolName}}</li>
						<li>咨询电话 :{{consultTel}}</li>
						<!-- // 0512-62933888、62932251、62932092 -->
						<li>商学院电话 : 
              {{busCollegeTel}}
              <!-- 0512-62932663 -->
              </li>
						<li>人文艺术学院电话 : 
              {{humanCollegeTel}}
              <!-- 0512-62932640 -->
              </li>
						<li>信息工程学院电话 : 
              {{aiCollegeTel}}
              <!-- 0512-62932507 -->
              </li>
						<li>纳米科技学院电话 : 
              {{nanoCollegeTel}}
              <!-- 0512-62932554 -->
              </li>
						<li>人工智能学院电话 : 
              <!-- 0512-62932553 -->
              {{aiCollegeTel}}
              </li>
						<li>学校官网 : <a href="http://www.siso.edu.cn/" target="_blank" title="苏州工业园区服务外包职业学院">
							{{officalWebsite}}</a>
						</li>
						<li>咨询QQ群 : {{consultQq}}</li>
						<li>微信号 : {{wechat}}</li>
						<li>学校地址 : {{schoolAddress}}</li>
						<li>邮箱 : {{email}}</li>
						<li>邮编 : 215123</li>
					</ul>
					
				
				</div>
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
			"schoolName": " ",
			"consultTel": " ",
			"busCollegeTel": " ",
			"humanCollegeTel": " ",
			"itCollegeTel": " ",
			"nanoCollegeTel": " ",
			"aiCollegeTel": " ",
			"officalWebsite": " ",
			"consultQq": " ",
			"wechat": " ",
			"schoolAddress": " ",
			"email": " ",
      ruleForm:{},
      rules: {
        contract: [
          { required: true, message: '请输入联系方式', trigger: 'blur'}
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
      },

      };
	},
	created(){
		this.getdata();
	},

    methods: {
		getdata(){
			this.$http.get("/app/contactus/list").then((response) => {

				  this.schoolName=response.data.contactusdata.schoolName;
				  this.schoolAddress=response.data.contactusdata.schoolAddress;
				  this.email=response.data.contactusdata.email;
				  this.consultQq=response.data.contactusdata.consultQq;
				  this.consultTel=response.data.contactusdata.consultTel;
				  this.wechat=response.data.contactusdata.wechat;
				  this.officalWebsite=response.data.contactusdata.officalWebsite;  
				  this.aiCollegeTel=response.data.contactusdata.aiCollegeTel;
				  this.busCollegeTel=response.data.contactusdata.busCollegeTel;
				  this.itCollegeTel=response.data.contactusdata.itCollegeTel;
          this.nanoCollegeTel=response.data.contactusdata.nanoCollegeTel;
          this.humanCollegeTel=response.data.contactusdata.humanCollegeTel; 


				})

		},


      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

     onSubmit(){
       this.$refs.ruleForm.validate((valid) => {
                 if (valid) {
                   this.$http.post("/app/consult/save",this.ruleForm).then((response) => {
                     if(response.data.msg=='success'){
                        this.$message({
                          message: "添加成功",
                          type: 'success',
                          })
                     }else{
                       this.$message({
                         message: "添加失败",
                         type: 'warning',
                        })
                     }

                  })
                 } else {
            return false;
          }
        });

	 }
    },
 };

</script>


<style>

</style>
