<template>
  <div class="center mar-t-2">
				 
					 
	        	
        <div class="search-lqxx">			  
					<!-- <el-form    :model="ruleForm" label-width="120px" ref="ruleForm" :rules="rules" > -->
            
						<!-- <div class="form-tab">
              <div class="layui-form-item" >
						    <label class="layui-form-label" prop="sfz">身份证号:</label>
						    <div class="layui-input-block">
						      <input type="text" v-model="ruleForm.sfz"   placeholder="请输入身份证号"   class="layui-input">
						    </div>
						  </div>
              <div class="layui-form-item">
						    <label class="layui-form-label"  prop="name">姓名:</label>
						    <div class="layui-input-block">
						      <input type="text" v-model="ruleForm.name"   placeholder="请输姓名"   class="layui-input">
						    </div>
						  </div> 
              <div class="layui-form-item">
                <div class="layui-input-block"> 
                    <el-button class="layui-btn" type="primary" @click="tj" >立即提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button> 
                </div>
              </div>
              
            </div> -->
					<!-- </el-form> -->
      </div>


      <div style="min-height: 100px;width: 100%;">
					<div id="lqxx">
						<p style="color: #0893b0;">恭喜您已被我校录取；您的录取信息如下！</p>
					 </div>
					 <div id="lqxx1">
						<p style="color: red;">恭喜您已被我校录取；您的录取信息如下！</p>
					 </div>
					 
					 <div id="tab-show">
							 
						<table class="layui-table" >
						  <colgroup>
						    <col width="150">
						    <col width="200">
						    <col>
						  </colgroup>
						  <thead>
						    <tr>
						      <th>录取编号</th>
						      <th>姓名</th>
						      <th>身份证号</th>
						      <th>考试号</th>
						      <th>录取学院</th>
						      <th>录取专业</th>
						      <th>招考类型</th>
						    </tr> 
						  </thead>
						  <tbody>
						   <tr>
						      <th>123</th>
						      <th>chenhuan</th>
						      <th>421024199410061211</th>
						      <th>1234567890</th>
						      <th>人文艺术学院</th>
						      <th>影视动画专业</th>
						      <th>自主招生</th>
						    </tr> 
						  </tbody>
						</table>
					</div> 
			</div>
		</div>
		
</template>
<script>
  export default {
     data() {
      return {
        ruleForm:{},
        rules: {
          sfz: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ], 
        }
       
       

      };
    },
 
    methods: {
     tj(){ 
  	
          if("cc"=="cc"){
              var sp = document.getElementById("lqxx");
              sp.style.display="block";
              var tabshow = document.getElementById("tab-show");
              tabshow.style.display="block";      
          }else{
              var sp1 = document.getElementById("lqxx1");
              sp1.style.display="block";
          }	
  	
        alert('a')
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