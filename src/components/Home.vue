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
	        			<router-link to="/zyjs">社会人员招生</router-link> 
	        		</li>
	        		<i><img src="../images/jt1.png"/></i>
	        		<li>
	        			<router-link to="/zyjs">提前单招</router-link> 
	        		</li>
	        		<i><img src="../images/jt2.png"/></i>
	        		<li>
	        			<router-link to="/zyjs">对口单招</router-link> 
	        		</li>
	        		<i><img src="../images/jt3.png"/></i>
	        		<li>
	        			<router-link to="/zyjs">普通招生</router-link> 
	        		</li>
	        		<i><img src="../images/jt4.png"/></i>
	        		<li>
	        			<router-link to="/zyjs">普通注册招生</router-link> 
	        		</li>
	        	</ul>
        	</div>
        </div>


        <div class="center ">
        		<div class="fl school-sp">
        			<!-- <video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
					    <source :src="vcrvideo" type="video/mp4" >
					 </video> -->
					 <video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
					    <source src="../video/wbxy.mp4" type="video/mp4" >
					</video>
					
	        	</div>
	        	
	        	<div class="fl school-tzgg">
					 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="通知公告" name="first" class="tzgg-news">
							<ul >
					    		<li v-for="(item ,index) in NoticeData" :key="index"><router-link :to="{path: 'listpage/xqy', query: {id: item.id}}">{{item.title}}</router-link> 
					    			<img v-if="item.new==true" src="../images/new.png" />
					    			<img v-if="item.hot==true" src="../images/hot.png" />
					    			<span>{{item.publishTime}}</span>
					    		</li>
					    	</ul>
						</el-tab-pane>
						<el-tab-pane label="招生计划" name="second" class="tzgg-news" >
					    	<ul >
					    		<li v-for="(item ,index) in PlaningData" :key="index"><router-link :to="{path: 'listpage/xqy', query: {id: item.id}}">{{item.title}}</router-link> 
					    			<img v-if="item.new==true" src="../images/new.png" />
					    			<img v-if="item.hot==true" src="../images/hot.png" />
					    			<span>{{item.publishTime}}</span>
					    		</li>
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
	        			<router-link to="/xyfc">查看更多>></router-link>
	        		</span>
	        		<div class="school-xyfc-tp">
	        			<dl v-for ="(item,i) in imglist" :key="i">
	        				<dt><img :src='item.url'/></dt>
	        				<dd>{{item.name}}</dd>
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
					<li v-for="(item ,index) in linkINlist" :key="index">
						<a target="_blank" :href="item.url"  rel="noopener noreferrer" :title="item.name">{{item.name}}</a>
						</li>
					<!-- <a :href="getURL(url)" target="_blank" rel="noopener noreferrer">{{url}}</a> -->
        			<!-- <li><a target="_blank" href="http://bpo.siso.edu.cn/" title="商学院">商学院</a></li>
        			<li><a target="_blank" href="http://dco.siso.edu.cn/" title="人文艺术学院">人文艺术学院</a></li>
        			<li><a target="_blank" href="http://ito.siso.edu.cn/" title="信息工程学院">信息工程学院</a></li>
        			<li><a target="_blank" href="http://nto.siso.edu.cn/" title="纳米科技学院">纳米科技学院</a></li>
        			<li><a target="_blank" href="http://sai.siso.edu.cn/" title="人工智能学院">人工智能学院</a></li>
        			<li><a target="_blank" href="http://siso.91job.org.cn/" title="就业网">就业网</a></li> -->
        		</ul>
        	</div>
        </div>
        
        <div class="center mar-t-2">
        	<div class="xylblj">
        		<div class="xylblj-tit">
        			<p>友情链接</p>
        		</div>
        		<ul>
					<li v-for="(item ,index) in linkOutlist" :key="index">
						<a target="_blank" :href="item.url" rel="noopener noreferrer" title="item.name">{{item.name}}</a>
					</li>
        			<!-- <li><a target="_blank" href="http://www.moe.gov.cn/" title="国家教育部">国家教育部</a></li>
        			<li><a target="_blank" href="https://www.tech.net.cn/" title="中国高职高专教育网">中国高职高专教育网</a></li>
        			<li><a target="_blank" href="https://www.chsi.com.cn/xlcx/" title="中国高等教育学籍查询">中国高等教育学籍查询</a></li>
        			<li><a target="_blank" href="http://jyt.jiangsu.gov.cn/" title="江苏省教育厅">江苏省教育厅</a></li>
        			<li><a target="_blank" href="http://www.jseea.cn/" title="江苏省教育厅考试院">江苏省教育厅考试院</a></li>
        			<li><a target="_blank" href="https://www.kuaidi100.com/?from=openv" title="快递查询">快递查询</a></li> -->
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
		imglist:[],
		vcrvideo:'',
		host:'http://47.92.84.126',
		id:'',
		idtype:"",
		NoticeData:[],
		PlaningData:[],
		linkINlist:[],
		linkOutlist:[],
      };
	},
	created(){  
			this.Notice();
			this.getVideo();
			this.gettp();
			this.getlinkIn();
			this.getlinkOut();
			// this.Planing();
		   
         },
         methods:{
			
			handleClick(tab, event) {
				if(tab.index==0){
					this.Notice()

				}else if(tab.index==1){
					this.Planing()
				} 
			},
			//通知公告
			
			Notice(){
				let list={
					type:'articileNotice'
				} 
				this.$http.post("/app/article/list",list).then((response) => {
					let arr = response.data.page.records; 
					for(var i =0;i<arr.length;i++){
						let datatime = arr[i].publishTime;
						arr[i].publishTime = datatime.substring(0, datatime.length - 8);
					}
					this.NoticeData =  arr;
				}) 

			},
			//招生计划
			Planing(){
				let list={
					type:'articleEnrollPlaning'
				} 
				this.$http.post("/app/article/list",list).then((response) => {
					let arr = response.data.page.records; 
					for(var i =0;i<arr.length;i++){
						let datatime = arr[i].publishTime;
						arr[i].publishTime = datatime.substring(0, datatime.length - 8);
					}
					this.PlaningData =  arr; 
					 
				}) 

			},
			//视频
			getVideo(){
				this.$http.get("/app/vcrvideo/list").then((response) => {
					 this.vcrvideo = this.host + response.data.vcrVideoData.url;
				}) 

			},
			 //校园风采图片
            gettp(){
                 this.$http.get("/app/schoolelegant/index/list").then((response) => {
					 this.imglist = response.data.schoolelegantList ;
					 let arr = response.data.schoolelegantList ;
					 for(var i =0 ;i<arr.length;i++){
						 arr[i].url = this.host + arr[i].url;  
					 }
					 this.imglist = arr;
				}) 

			} ,
			//获取连接
			getlinkIn(){ 
                 this.$http.get("/app/linkinfo/list",{params: { type:'linkTypeIn'}}).then((response) => {
					 let arr = response.data.linkInfoList ;
					 for(var i =0 ;i<arr.length;i++){
						 arr[i].url="http://"+arr[i].url
					 }
					 this.linkINlist=response.data.linkInfoList;
				}) 

			} ,
			getlinkOut(){ 
                 this.$http.get("/app/linkinfo/list",{params: { type:'linkTypeOut'}}).then((response) => {
					 let arr = response.data.linkInfoList ;
					 for(var i =0 ;i<arr.length;i++){
						 arr[i].url="http://"+arr[i].url
					 }
					 this.linkOutlist=response.data.linkInfoList ;
				}) 

			} ,
			
	}
  };
   
</script>
 

<style>

</style>