<template>
  <div class="center">

	   <div class="center"> 
		   <el-carousel :interval="5000" arrow="always"  height="245px" class="pc">
			    <el-carousel-item  > 
				  <h3><img src="../images/logo1.jpg" width="100%" /></h3>
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

			<el-carousel :interval="5000" arrow="always" height="90px"   class="mobile">
			    <el-carousel-item  > 
				  <h3><img src="../images/logo1.jpg" width="100%"  /></h3>
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
        	<div class="lqcx pc" style="margin-top: 20px;">
		        	<router-link to="/lqcx" title="请输入您的身份证号码查询"><img src="../images/lqcx.png" height="100px" width="1000px"/> </router-link> 
		      </div>
        	<div class="lqcx mobile " style="margin-top: 20px;">
		        	<router-link to="/lqcx" title="请输入您的身份证号码查询"><img src="../images/lqcx.png"   width="100%"/> </router-link> 
		      </div>

      </div>

      <div class="zsfs pc">
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
	        			<router-link to="/zyjs">中职招生</router-link> 
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


        <div class="center pc">
        		<div class="fl school-sp">
        			<video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
								<source :src="vcrvideo" type="video/mp4" >
							</video>
					<!-- <video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
					    <source src="../video/wbxy.mp4" type="video/mp4" >
					</video> -->
					
	        	</div>
	        	
	        	<div class="fl school-tzgg">
					<div class="tz-tit">
						<p class="tzggsx fl">通知公告</p>
						<span class="fr">
							<router-link to="/tzgg">查看更多>></router-link>
						</span>
					</div>
					<div  class="tzgg-news">
							<ul >
					    		<li v-for="(item ,index) in NoticeData" :key="index"> 
									<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}"  :style='item.titleColor'> {{item.title  | ellipsis}}</router-link> 
					    			<img v-if="item.new==true" src="../images/new.png" />
					    			<img v-if="item.hot==true" src="../images/hot.png" />
					    			<span class="fr">{{item.publishTime}}</span>
					    		</li>
					    	</ul>
					</div>
	        	</div>
        </div>

		<div class="center mobile mar-t-2"  > 

        			<video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
								<source :src="vcrvideo" type="video/mp4" >
							</video>
					<!-- <video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
					    <source src="../video/wbxy.mp4" type="video/mp4" >
					</video> -->
					 
	        	
	        	<div class="  school-tzgg mar-t-2">
					<div class="tz-tit">
						<p class="tzggsx fl">通知公告</p>
						<span class="fr">
							<router-link to="/tzgg">查看更多>></router-link>
						</span>
					</div>
					<div  class="tzgg-news">
							<ul >
					    		<li v-for="(item ,index) in NoticeData" :key="index"> 
									<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor' > {{item.title  | ellipsis}}</router-link> 
					    			<img v-if="item.new==true" src="../images/new.png" />
					    			<img v-if="item.hot==true" src="../images/hot.png" />
					    			<span class="fr">{{item.publishTime}}</span>
					    		</li>
					    	</ul>
					</div>
	        	</div>
        </div>
<!-- pc -->

        <div class="center mar-t-2 pc">
			<el-row :gutter="20">
				<el-col :span="8">
					<div class="fr search-gjz" >
						<form class="layui-form" action=""> 
							<input type="text" v-model="title"    placeholder="请输入关键字"   class="layui-input">
							<button type="button" class="layui-btn"  style="background: #00a0e9;"  @click="search">
											<img src="../images/search-ico.png" width="10px"/>
											  搜索 
									</button> 
						</form>
					</div>

					<div class="school-zszx">
						<div class="zszxzx">
							<p class="tzggsx" >招生咨询</p> 
						</div> 
						<ul  > 
	        				<div class="qqlx"><span class="iconfont icon-qq1"></span> 
	        					<a target="_blank" :href="qqhm" id="udesk-feedback-tab" title="欢迎您前来咨询" style="padding-left: 10px;">
	        						招生咨询qq : {{enrollQq}} <img border="0" src="./../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px" >
	        					</a>
	        				</div>
							<dl class="phone">
								<dt style="float:left">
									<span class="iconfont icon-dianhua"></span>
								</dt>
								<dd class="fl">
									<ul>
										<li>咨询电话1 ：{{enrollTel1}} 	</li>
										<li>咨询电话1 ：{{enrollTel2}} 	</li>
										<li>咨询电话1 ：{{enrollTel3}} 	</li>
										 
									</ul>
								</dd>
							</dl>

	        				 <div class="adds">
								 <p class="fl dzl1"><span class="iconfont icon-dizhi1"></span> </p>  <p class="fl dzl">学院地址 ：{{schoolAddress}}</p>  
							 </div> 
	        			</ul>
							<div class="wxlist">
								<div class="fr wxtp1 ">
									<img src="../images/wxewm.png" alt="" width="120px">
								</div>
								<div  class="fr  wxtp1">
									<img src="../images/QQewm.png" alt="" width="120px">
								</div>

							</div>
					</div>

				</el-col>
				<el-col :span="8">
					<div >
						<el-tabs type="border-card" class="news-list1">

							<el-tab-pane label="招生计划">
								<div class="tzgg-news" >
									<ul >
										<li v-for="(item ,index) in PlaningData" :key="index"> 
											<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title  | ellipsis1}}</router-link> 
											<img v-if="item.new==true" src="../images/new.png" />
											<img v-if="item.hot==true" src="../images/hot.png" />
											<span class="  fr">{{item.publishTime}}</span>
										</li>
									</ul> 
								
								</div>
							</el-tab-pane>
							<el-tab-pane label="招生简章">
								<div class="tzgg-news" >
									<ul >
										<li v-for="(item ,index) in GuideData" :key="index"> 
											<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title | ellipsis2}}</router-link> 
											<img v-if="item.new==true" src="../images/new.png" />
											<img v-if="item.hot==true" src="../images/hot.png" />
											<span class="  fr" >{{item.publishTime}}</span>
										</li> 
									</ul> 
								</div>
							</el-tab-pane>
						</el-tabs>
					 
					</div>

				</el-col>
				<el-col :span="8">
					<div class="news-list1">
						<div class="tzgg-news" >
								<div class="tz-tit">
									<p class="tzggsx fl">校园动态</p><span class="fr">
									<a href="http://www.siso.edu.cn/html/News7.htm" target="_blank">查看更多>></a>
								</span>
								</div>

								<ul > 
									<li v-for="(item ,index) in GuideData" :key="index"> 
										<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title | ellipsis2}}</router-link> 
										<img v-if="item.new==true" src="../images/new.png" />
										<img v-if="item.hot==true" src="../images/hot.png" /> 
										<span class="  fr" >{{item.publishTime}}</span>
									</li> 
								</ul>
						</div>
					</div> 
				</el-col>

			</el-row> 
        </div>
		<!-- pc end -->
		<!-- mobile --> 
        <div class=" mobile  "> 
					<div class="  search-gjz" >
						<form class="layui-form" action=""> 
							<input type="text" v-model="title"    placeholder="请输入关键字"   class="layui-input">
							<button type="button" class="layui-btn"  style="background: #00a0e9;"  @click="search">
									 <img src="../images/search-ico.png" width="10px"/>  搜索 
							</button> 
						</form>
					</div>

					<div class="school-zszx ">
						<div class="zszxzx">
							<p class="tzggsx" >招生咨询</p> 
						</div>
						
				
						<ul  > 
	        				<div class="qqlx"><span class="iconfont icon-qq1"></span> 
	        					<a target="_blank" :href="qqhm" id="udesk-feedback-tab" title="欢迎您前来咨询" style="padding-left: 10px;">
	        						招生咨询qq : {{enrollQq}} <img border="0" src="./../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px" >
	        					</a>
	        				</div>
							<dl class="phone">
								<dt style="float:left">
									<span class="iconfont icon-dianhua"></span>
								</dt>
								<dd class="fl">
									<ul>
										<li>咨询电话1 ：<a :href='"tel://"+enrollTel1' >{{enrollTel1}}</a> 	</li>
										<li>咨询电话1 ：<a :href='"tel://"+enrollTel2' >{{enrollTel2}}</a> 	</li>
										<li>咨询电话1 ：<a :href='"tel://"+enrollTel3' >{{enrollTel3}}</a></li> 
									</ul>
								</dd>
							</dl> 
	        				 <div class="adds">
								 <p class="fl dzl1"><span class="iconfont icon-dizhi1"></span> </p>  <p class="fl dzl">学院地址 ：{{schoolAddress}}</p>  
							 </div>
	        				 
	        			</ul>
							<div class="wxlist">
								<div class="fr wxtp1 ">
									<img src="../images/wxewm.png" alt="" width="120px">
								</div>
								<div  class="fr  wxtp1">
									<img src="../images/QQewm.png" alt="" width="120px">
								</div> 
							</div>
					</div>
 
					<div class="mar-t-2" >
						<el-tabs type="border-card" class="news-list1 "> 
							<el-tab-pane label="招生计划">
								<div class="tzgg-news" >
									<ul >
										<li v-for="(item ,index) in PlaningData" :key="index"> 
											<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title  | ellipsis1}}</router-link> 
											<img v-if="item.new==true" src="../images/new.png" />
											<img v-if="item.hot==true" src="../images/hot.png" />
											<span class="  fr">{{item.publishTime}}</span>
										</li>
									</ul> 
								
								</div>
							</el-tab-pane>
							<el-tab-pane label="招生简章">
								<div class="tzgg-news" >
									<ul >
										<li v-for="(item ,index) in GuideData" :key="index"> 
											<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title | ellipsis2}}</router-link> 
											<img v-if="item.new==true" src="../images/new.png" />
											<img v-if="item.hot==true" src="../images/hot.png" />
											<span class="  fr" >{{item.publishTime}}</span>
										</li> 
									</ul> 
								</div>
							</el-tab-pane>
						</el-tabs> 
					</div>
 
					<div class="news-list1 mar-t-2">
						<div class="tzgg-news" >
								<div class="tz-tit">
									<p class="tzggsx fl">校园动态</p><span class="fr">
									<a href="http://www.siso.edu.cn/html/News7.htm" target="_blank">查看更多>></a>
								</span>
								</div> 
								<ul > 
									<li v-for="(item ,index) in GuideData" :key="index"> 
										<router-link :to="{path: 'listpage/xqy', query: {id: item.id}}" :style='item.titleColor'> {{item.title | ellipsis2}}</router-link> 
										<img v-if="item.new==true" src="../images/new.png" />
										<img v-if="item.hot==true" src="../images/hot.png" />
										
										<span class="  fr" >{{item.publishTime}}</span>
									</li> 
								</ul>
						</div>
					</div>
  
        </div>
		<!-- mobile end -->
		<div class="center mar-t-2 pc">
				<div class="school-xyfc">
					<div style="overflow: hidden; height: 30px;line-height: 30px;">
						<p class="tzggsx fl">校园风采</p>
						<span class="fr">
							<router-link to="/xyfc">查看更多>></router-link>
						</span> 
					</div>
	        		
	        		<div class="school-xyfc-tp">
	        			<dl v-for ="(item,i) in imglist" :key="i">
	        				<dt  @click="selectGood($event,item)" v-if="item.type==0"><img :src='item.url'/></dt>
							<dt  @click="selectGood($event,item)" v-if="item.type==1">
								<video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
									  <source :src='item.url' type="video/mp4" >   
								</video></dt>
	        				<dd>{{item.name}}</dd>
	        			</dl> 
	        		</div>
	        	</div>
        </div>
 
		<div class=" mar-t-2 mobile ">
			<div class="tz-tit"  >
				<p class="tzggsx fl">校园风采</p>
				<span class="fr">
					<router-link to="/xyfc">查看更多>></router-link>
				</span>
			</div>  		
        </div>
		<div class="school-xyfc mobile" > 
			<el-row :gutter="10" > 
						<dl v-for ="(item,i) in imglist" :key="i">
							<el-col :xs="12"  >
							<dt  @click="selectGood($event,item)" v-if="item.type==0"><img :src='item.url' width="100%"/></dt>
							<!-- <dt  @click="selectGood($event,item)" v-if="item.type==1">
								<video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
									<source :src='item.url' type="video/mp4" >  
								</video>
							</dt> -->
						<dd v-if="item.type==0">{{item.name}}</dd>
						</el-col>
					</dl> 
			</el-row>
		
		</div>
			<!--遮罩层-->
			<div class="mask" v-if="mask"></div> 
			<!--弹出层-->
			<div class="show_d"  v-if="show_d">
				 <div class="qxan" @click="qxan"><img src="../images/quan.png" alt="" style="width:20px;height:20px"> </div>
				<div class="xqtp">
					<img :src="imgurl"  v-if=" typedata==0" />  
				</div> 
				<video   poster="../images/about2.png"  controls="controls" muted autoplay="autoplay" v-if="typedata==1">
						<source :src='imgurl' type="video/mp4" >
						<!-- <source src='http://player.youku.com/embed/XNDQ3MzE1MDI2NA==' type="video/mp4" >  -->
				</video>
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
						<a target="_blank" :href="item.url" rel="noopener noreferrer" :title="item.name">{{item.name}}</a>
					</li>
        			
        		</ul>
        	</div>
        </div>
  </div>



  
</template>
<script>
  export default {

	  		filters: {
				ellipsis (value) {
					if (!value) return ''
						if (value.length > 45) {
							return value.slice(0,45) + '...'
						}
					return value
				} ,
				ellipsis1 (value) {
					if (!value) return ''
					if (value.length > 20) {
						return value.slice(0,20) + '...'
					}
					return value
				},
				ellipsis2 (value) {
					if (!value) return ''
					if (value.length > 20) {
						return value.slice(0,20) + '...'
					}
					return value
				}
			},
			 


    data() {
      return {
		mask:false,
		show_d:false,
		activeName: 'first',
		imglist:[],
		vcrvideo:'',
		host:'http://47.92.84.126',
		id:'',
		idtype:"",
		NoticeData:[
			 
		],
		PlaningData:[ ],
		GuideData:[
			 
		],
		linkINlist:[],
		linkOutlist:[],
		title:'',

		enrollQq:'',
		enrollTel1:'',
		enrollTel2:'',
		enrollTel3:'', 
		schoolAddress:'',

		selectedFood:{},

		imgurl:'',	
		typedata:'',
		qqhm:'',
	  };
	  
	},
	created(){  
			
			this.getVideo();

			 this.Notice();
			this.Guide();
			this.Planing();
			
			this.getdata();

			this.gettp();
			this.getlinkIn();
			this.getlinkOut();
		   
         },
         methods:{
			 qxan(){
				this.mask=false;
				this.show_d=false;
			 },
			selectGood($event,food){
					this.selectedFood = food;    //将当前点击的数据放入显示数组
					this.imgurl=this.selectedFood.url ;
					console.log(this.imgurl);
					this.typedata= this.selectedFood.type;
					this.mask=true;
					this.show_d=true;
			},

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
					console.log(arr)
					for(var i =0;i<arr.length;i++){
						let datatime = arr[i].publishTime;
						arr[i].publishTime = datatime.substring(0, datatime.length - 8);
						arr[i].titleColor = 'color:'+arr[i].titleColor
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
						arr[i].titleColor = 'color:'+arr[i].titleColor
					}
					this.PlaningData =  arr; 
					 
				}) 

			},
			//招生简章
			Guide(){
				let list={
					type:'articleEnrollGuide'
				} 
				this.$http.post("/app/article/list",list).then((response) => {
					let arr = response.data.page.records; 
					for(var i =0;i<arr.length;i++){
						let datatime = arr[i].publishTime;
						arr[i].publishTime = datatime.substring(0, datatime.length - 8);
						arr[i].titleColor = 'color:'+arr[i].titleColor
					}
					this.GuideData =  arr; 
					 
				}) 

			},
			//视频
			getVideo(){
				this.$http.get("/app/vcrvideo/list").then((response) => {
					 this.vcrvideo = this.host + response.data.vcrVideoData.url;
				}) 

			},
			//质询信息
			getdata(){
			this.$http.get("/app/enrollconsult/list" ).then((response) => {

					let listdata = response.data.enrollconsultData;
					 this.enrollQq=listdata.enrollQq
					this.enrollTel1=listdata.enrollTel1
					this.enrollTel2=listdata.enrollTel2
					this.enrollTel3=listdata.enrollTel3
					this.schoolAddress=listdata.schoolAddress
					this.qqhm = 'http://wpa.qq.com/msgrd?v=3&uin='+this.enrollQq+'&site=qq&menu=yes'
					 
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
			//外链
			getlinkOut(){ 
                 this.$http.get("/app/linkinfo/list",{params: { type:'linkTypeOut'}}).then((response) => {
					 let arr = response.data.linkInfoList ;
					 for(var i =0 ;i<arr.length;i++){
						 arr[i].url="http://"+arr[i].url
					 }
					 this.linkOutlist=response.data.linkInfoList ;
				}) 

			} ,
			// 搜索
			search(){
				this.$router.push({ path:'/search', query: {title:this.title}}) 

			},
			
	}
  };
   
</script>
 

<style>
.el-tabs--border-card>.el-tabs__content {
    padding: 0px;
}
 
</style>