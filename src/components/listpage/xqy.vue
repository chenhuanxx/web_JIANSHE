<template>
    <div class="center mar-t-2">
					<app-Left class="pc"></app-Left>

			<div class="fl list" style="position:relative;">
				<div class="list-page">
					<dl>
						<dt>{{title}}</dt>
						<dd>发布时间：{{updateDate}}</dd>
					</dl>
					<div class="list-page-nr" v-html="content">
						{{content}}
					</div>
					 <ul style="position:absolute;bottom:10px">
						<li v-for="(item , index) in fileList" :key="index"  >附件：<a :href="item.url" style="color:#0893b0" >{{item.name}}</a> </li>
					</ul>
         
				</div>
				

			</div>

		</div>
</template>
<script>
import Left from '../left/Left.vue';
 
  export default {
	  components:{
			"app-Left":Left,
		},
	data(){
		return{
			id:'',
			updateDate:'',
			content:'',
			title:'',
			host:'http://47.92.84.126',
			fileList:[],
		}
	},
	created(){
		this.id=this.$route.query.id;
		this.getdata(); 

	},
	methods:{
		getdata(){
				this.$http.post("/app/article/info/"+this.id).then((response) => {
					this.updateDate=response.data.article.updateDate;
					this.content=response.data.article.content;
					this.title=response.data.article.title;
					// this.clickTimes=response.data.clickTimes;
					this.fileList =response.data.article.fileList;
					for(var i =0;i<this.fileList.length;i++){
						this.fileList[i].url=this.host + this.fileList[i].url;
					}  
				})

			},
			// dom(index){
			// 	console.log(index)
			// 	window.location.href = "http://47.92.84.126/filedata/\doc\8f53cc6e-36f7-4aa1-9a87-946de73524d5.xlsx"
			// }

	},
}
</script> 