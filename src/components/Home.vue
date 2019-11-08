<template>
  <div class="center">

	   <div class="center"> 
		   <el-carousel :interval="5000" arrow="always"  height="245px">
			    <el-carousel-item  > 
				  <h3><img src="../images/logo1.jpg" width="100%" height="300px"/></h3>
			    </el-carousel-item>
			  	<el-carousel-item  > 
				  <h3><img src="../images/logo2.jpg" width="100%"/></h3>
			    </el-carousel-item>
			 	 <el-carousel-item  > 
				  <h3><img src="../images/logo3.jpg" width="100%"/></h3>
			    </el-carousel-item>
			 	 <el-carousel-item  > 
				  <h3><img src="../images/logo4.jpg" width="100%"/></h3>
			    </el-carousel-item>
			  </el-carousel>
        </div>


      <div class="center">
        	<div class="lqcx fl" style="margin-top: 20px;">
		        	<a href="../views/admissionInquiry.html" title="请输入您的身份证号码查询"><img src="../images/lqcx.png"  width="400px"/></a> 
		      </div>
        	<div class="fr search-gjz" >
        		
        	<form class="layui-form" action="">
        			<p>关键字搜索:</p>
        		 	<input type="text" name="title" required  lay-verify="required" placeholder="请输入关键字" autocomplete="off" class="layui-input">
        			<button type="button" class="layui-btn" lay-submit lay-filter="formDemo" style="background: #00a0e9;" >
				  		<img src="../images/search-ico.png" width="20px"/>
				  		<a href="../views/searchList.html">搜索</a>
					</button>
        			<p></p>
        		</form>
        	</div>

      </div>

      <div class="zsfs">
        	<div class="center ">
	        	<ul>
	        		<li>
	        			<a href="../views/professionalPresentation.html" >社会人员招生</a>
	        		</li>
	        		<i><img src="../images/jt1.png"/></i>
	        		<li>
	        			<a href="../views/professionalPresentation.html" >提前单招</a>
	        		</li>
	        		<i><img src="../images/jt2.png"/></i>
	        		<li>
	        			<a href="../views/professionalPresentation.html" >对口单招</a>
	        		</li>
	        		<i><img src="../images/jt3.png"/></i>
	        		<li>
	        			<a href="../views/professionalPresentation.html" >普通招生</a>
	        		</li>
	        		<i><img src="../images/jt4.png"/></i>
	        		<li>
	        			<a href="../views/professionalPresentation.html" >普通注册招生</a>
	        		</li>
	        	</ul>
        	</div>
        </div>


        <div class="center ">
        		<div class="fl school-sp">
        			<!-- <video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay"> -->
					    <!-- <source src="../video/wbxy.mp4" type="video/mp4" > -->
					<!-- </video> -->
					
	        	</div>
	        	
	        	<div class="fl school-tzgg">
					 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="通知公告" name="first" class="tzgg-news">
							<ul >
					    		<li><a href="../views/detailsPage.html">我校召开2019年国家奖学金评审会</a>
					    			<img src="../images/new.png" />
					    			<img src="../images/hot.png" />
					    			<span>2019-10-10</span>
					    		</li>
					    		<li>信息工程学院党总支开展“不忘初心、牢记使命”主题讲座<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    	</ul>
						</el-tab-pane>
						<el-tab-pane label="招生计划" name="second" class="tzgg-news" >
							<ul >
					    		
					    		<li><a href="../views/detailsPage.html">信息工程学院党总支开展“不忘初心、牢记使命”主题讲座</a><span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li><a href="">我校召开2019年国家奖学金评审会</a>
					    			<img src="../images/new.png" />
					    			<img src="../images/hot.png" />
					    			<span>2019-10-10</span>
					    		</li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li><a href="">我校召开2019年国家奖学金评审会</a>
					    			<img src="../images/new.png" />
					    			<img src="../images/hot.png" />
					    			<span>2019-10-10</span>
					    		</li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    		<li>我校校企合作课题获中华职教社课题成果二等奖<span>2019-10-10</span></li>
					    		<li>我校召开2019年国家奖学金评审会<span>2019-10-10</span></li>
					    	</ul>
							
						</el-tab-pane> 
					</el-tabs>
	        		
	        	</div>
        </div>


        <div class="center mar-t-2">
        		<div class="school-zszx">
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
        				<!--<li>
        					<button>各地招生咨询电话</button>
        				</li>-->
        			</ul>
        		
	        	</div>
	        	<div class="school-xyfc">
	        		<strong>校园风采</strong>
	        		<span class="fr">
	        			<a href="">查看更多>></a>
	        		</span>
	        		<div class="school-xyfc-tp">
	        			<dl>
	        				<dt><img src="../images/xy1.jpg"/></dt>
	        				<dd>图书馆</dd>
	        			</dl>
	        			<dl>
	        				<dt><img src="../images/xy2.jpg"/></dt>
	        				<dd>校园一角</dd>
	        			</dl>
	        			<dl>
	        				<dt><img src="../images/xy3.jpg"/></dt>
	        				<dd>报告厅</dd>
	        			</dl>
	        			<dl>
	        				<dt><img src="../images/xy4.jpg"/></dt>
	        				<dd>校园走廊</dd>
	        			</dl>
	        			<dl>
	        				<dt><img src="../images/xy5.jpg"/></dt>
	        				<dd>校训</dd>
	        			</dl>
	        			<dl>
	        				<dt><img src="../images/xy6.jpg"/></dt>
	        				<dd>体育场</dd>
	        			</dl>
	        		</div>
	        	</div>
        </div>
        
        <div class="center mar-t-2">
        	<div class="xylblj">
        		<div class="xylblj-tit">
        			<p>校园内部链接</p>
        		</div>
        		<ul>
        			<li><a target="_blank" href="http://bpo.siso.edu.cn/" title="商学院">商学院</a></li>
        			<li><a target="_blank" href="http://dco.siso.edu.cn/" title="人文艺术学院">人文艺术学院</a></li>
        			<li><a target="_blank" href="http://ito.siso.edu.cn/" title="信息工程学院">信息工程学院</a></li>
        			<li><a target="_blank" href="http://nto.siso.edu.cn/" title="纳米科技学院">纳米科技学院</a></li>
        			<li><a target="_blank" href="http://sai.siso.edu.cn/" title="人工智能学院">人工智能学院</a></li>
        			<li><a target="_blank" href="http://siso.91job.org.cn/" title="就业网">就业网</a></li>
        		</ul>
        	</div>
        </div>
        
        <div class="center mar-t-2">
        	<div class="xylblj">
        		<div class="xylblj-tit">
        			<p>友情链接</p>
        		</div>
        		<ul>
        			<li><a target="_blank" href="http://www.moe.gov.cn/" title="国家教育部">国家教育部</a></li>
        			<li><a target="_blank" href="https://www.tech.net.cn/" title="中国高职高专教育网">中国高职高专教育网</a></li>
        			<li><a target="_blank" href="https://www.chsi.com.cn/xlcx/" title="中国高等教育学籍查询">中国高等教育学籍查询</a></li>
        			<li><a target="_blank" href="http://jyt.jiangsu.gov.cn/" title="江苏省教育厅">江苏省教育厅</a></li>
        			<li><a target="_blank" href="http://www.jseea.cn/" title="江苏省教育厅考试院">江苏省教育厅考试院</a></li>
        			<li><a target="_blank" href="https://www.kuaidi100.com/?from=openv" title="快递查询">快递查询</a></li>
        		</ul>
        	</div>
        </div>
        
  </div>



  
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
		
      };
	},
	created(){

	},
    methods: {
		getlist(){
			
		},






      handleClick(tab, event) {
        console.log(tab, event);
	  }

	  











	}
	











  };
   
</script>
 

<style>

</style>