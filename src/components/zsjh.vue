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
				<div class="list-1">
					<dl > 			
						<dt><router-link :to="{path: 'listpage/xqy', query: {id: id}}"><img :src="picture" width="100%" /></router-link></dt>
						<dd><router-link :to="{path: 'listpage/xqy', query: {id: id}}">{{title}}</router-link></dd>
					</dl>
					<ul >
						<li v-for="(item ,index) in NoticeData" :key="index"><router-link :to="{path: 'listpage/xqy', query: {id: item.id}}">{{item.title}}</router-link> 
								<img v-if="item.new==true" src="../images/new.png" />
								<img v-if="item.hot==true" src="../images/hot.png" />
								<span>{{item.publishTime}}</span>
						</li>
					</ul>
					
				</div> 
				<div class="page" id="test1">
					<el-pagination 
					background 
					
      				@current-change="handleCurrentChange"
					layout="total,prev, pager, next"
					prev-text="上一页"
					next-text="下一页"
					:total="total" 
					:page-size="2">
					</el-pagination>
				</div>
			</div>
		</div>
		
</template>
<script>
  export default {
     data() {
      return {
		  host:'http://47.92.84.126',
			NoticeData:[],
			
			total:1,
			page:'1',
			size:'20',
			title:'',
			id:'',
			picture:'',

      };
	},
	created(){
		this.Notice();
		
	},
 
    methods: {
		
     Notice(){
				let list={
					"currentPage":this.page,
					"pageSize":this.size,
					"type":'articleEnrollPlaning'
				} 
				this.$http.post("/app/article/list",list).then((response) => {
					let arr = response.data.page.records; 
					for(var i =0;i<arr.length;i++){
						let datatime = arr[i].publishTime;
						arr[i].publishTime = datatime.substring(0, datatime.length - 8);
					}
					this.NoticeData =  arr; 

					this.total =  response.data.page.total ;
					this.picture = this.host + response.data.page.records[0].picture;
					console.log(this.picture)
					this.title = response.data.page.records[0].title ;
					this.id = response.data.page.records[0].id;
					
				}) 

			},
 
			handleCurrentChange(val) {
				this.page= val;
				this.Notice() 
			}


    },
 };
   
</script>
 

 