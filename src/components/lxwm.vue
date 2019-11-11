<template>
  <div class="center mar-t-2">
				 
					
					<div class="zszx-left">
						<ul>
	        				<strong>招生咨询</strong>
	        				<p>招生咨询qq : 
	        					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1276520&site=qq&menu=yes" id="udesk-feedback-tab" title="欢迎您前来咨询">
	        						1276520 <img border="0" src="../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px">
	        					</a>
	        				</p>
	        				<li>咨询电话1 :   0512-62933888</li>
	        				<li>咨询电话2 :   0512-62932251</li>
	        				<li>咨询电话3 :   0512-62932092</li>
	        				<li>学校地址 : 江苏省苏州独墅湖科教创新区若水路99号</li>
	        				
	        			</ul>
	        			<dl>
							<dt> <img src="../images/wxewm.png" alt="" width="100px"></dt>
							<dd>关注官方微信公众号</dd>
						</dl>
						<dl>
							<dt><img src="../images/QQewm.png" alt="" width="100px"></dt>
							<dd>官方咨询QQ群</dd>
						</dl>
						
					</div> 
	        	
        			
			<div class="fl list">
				<div class="contact">
					<ul>
						<strong>学校联系方式</strong>
						<li>学校名称 : 苏州工业园区服务外包职业学院</li>
						<li>咨询电话 : 0512-62933888、62932251、62932092</li>
						<li>商学院电话 : 0512-62932663</li>
						<li>人文艺术学院电话 : 0512-62932640</li>
						<li>信息工程学院电话 : 0512-62932507</li>
						<li>纳米科技学院电话 : 0512-62932554</li>
						<li>人工智能学院电话 : 0512-62932553</li>
						<li>学校官网 : <a href="http://www.siso.edu.cn/" target="_blank" title="苏州工业园区服务外包职业学院">
							http://www.siso.edu.cn</a>
						</li>
						<li>咨询QQ群 : 1276520</li>
						<li>微信号 : sisozs</li>
						<li>学校地址 : 江苏省苏州独墅湖科教创新区若水路99号</li>
						<li>邮编 : 215123</li>
					</ul>
					<div class="map">
						<iframe src="https://j.map.baidu.com/fa/CHl" ></iframe>
					</div>
					<div class="xslxfs">
						<strong>学生联系方式</strong>
					</div>
					<form class="layui-form" action="">
						
					  <div class="layui-form-item">
					    <label class="layui-form-label"><span style="color: red;">*</span>联系方式:</label>
					    <div class="layui-input-block">
					      <input type="text" name="lxfs"  required  lay-verify="required" placeholder="电话或者QQ" autocomplete="off" class="layui-input">
					    </div>
					  </div>
					  <div class="layui-form-item">
					    <label class="layui-form-label"><span style="color: red;">*</span>姓名:</label>
					    <div class="layui-input-block">
					      <input type="text" name="name" required  lay-verify="required" placeholder="请输入姓名" autocomplete="off" class="layui-input">
					    </div>
					  </div>
					   <div class="layui-form-item">
					    <label class="layui-form-label">毕业院校:</label>
					    <div class="layui-input-block">
					      <input type="text" name="byyx"   placeholder="请输入毕业院校" autocomplete="off" class="layui-input">
					    </div>
					  </div>
					   <div class="layui-form-item">
					    <label class="layui-form-label">拟报考专业:</label>
					    <div class="layui-input-block">
					      <input type="text" name="nbkzy"    placeholder="请输入拟报考专业" autocomplete="off" class="layui-input">
					    </div>
					  </div>
					   <div class="layui-form-item">
					    <label class="layui-form-label">考试分数:</label>
					    <div class="layui-input-block">
					      <input type="text" name="ksfs"   placeholder="请输入考试分数" autocomplete="off"  class="layui-input">
					    </div>
					  </div>
					  <div class="layui-form-item">
					    <div class="layui-input-block">
					      <button class="layui-btn" lay-submit lay-filter="formDemo1" @click="tj">立即提交</button>
					      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
					    </div>
					  </div>
					</form>
 
				</div>
			</div>
		</div>
		
</template>
<script>
  export default {
     data() {
      return {
       
       

      };
    },
 
    methods: {
     tj(){
		 alert('a')
	 }
    },
 };
   
</script>
 

<style>

</style>