<template>
    <div class="center mar-t-2">
				<div class="zszx-left">
						<ul>
	        				<strong>招生咨询</strong>
	        				<p>招生咨询qq : 
	        					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1276520&site=qq&menu=yes" id="udesk-feedback-tab" title="欢迎您前来咨询">
	        						1276520 <img border="0" src="../../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px">
	        					</a>
	        				</p>
	        				<li>咨询电话1 :   0512-62933888</li>
	        				<li>咨询电话2 :   0512-62932251</li>
	        				<li>咨询电话3 :   0512-62932092</li>
	        				<li>学校地址 : 江苏省苏州独墅湖科教创新区若水路99号</li>
	        				
	        			</ul>
	        			<dl>
							<dt> <img src="../../images/wxewm.png" alt="" width="100px"></dt>
							<dd>关注官方微信公众号</dd>
						</dl>
						<dl>
							<dt><img src="../../images/QQewm.png" alt="" width="100px"></dt>
							<dd>官方咨询QQ群</dd>
						</dl>
						
					</div>
        			 
			<div class="fl list">
				<div class="list-page"> 
					<dl>
						<dt>{{title}}</dt>
						<dd>发布时间：{{updateDate}}</dd>
					</dl>
					<div class="list-page-nr" v-html="content">
						{{content}}
					</div>
				</div>
			</div>

		</div>
</template>
<script>
export default {
	data(){
		return{
			id:'',
			// type:'',
			updateDate:'',
			content:'',
			title:'', 
			// clickTimes:'',
			
		}
	},
	created(){
		// POST /app/article/info/{id}
		this.id=this.$route.query.id;
		// this.typeid=this.$route.query.type;
		// console.log(this.id)
		// console.log(this.type)
		this.getdata();
		
	},
	methods:{
		getdata(){
				// let list={
				// 	// type:'articleEnrollPlaning',
				// 	id:this.id
				// } 
				this.$http.post("/app/article/info/"+this.id).then((response) => {
					this.updateDate=response.data.article.updateDate;
					this.content=response.data.article.content;
					this.title=response.data.article.title;
					// this.clickTimes=response.data.clickTimes;
					 
					
					console.log(response.data.article)
					 
				}) 

			},

	},
}
</script>