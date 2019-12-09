<template>
  <div class="center mar-t-2">
				 
					
					<app-Left></app-Left>
	        	 
			<div class="fl list">
				<div class="list-1">
					<dl > 
						<dt><router-link :to="{path: 'listpage/xqy', query: {id: id}}"><img :src="picture" width="100%"/></router-link></dt>
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
					background  	@current-change="handleCurrentChange"
					layout="total,prev, pager, next"
					prev-text="上一页"
					next-text="下一页"
					:total="total" 
					:page-size="2">
					</el-pagination></div>
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
					"type":'articleReporting'
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
 

 