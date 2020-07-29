<template>
  <div class="center mar-t-2">
			<div class="pc">
				<app-Left></app-Left>
				<div class="fl list">
					<div class="list-1">
						<dl >
							
							<dt><router-link :to="{path: 'listpage/xqy', query: {id: id}}"><img :src="picture" width="100%"/></router-link></dt>
							<dd><router-link :to="{path: 'listpage/xqy', query: {id: id}}">{{title}}</router-link></dd>
						</dl>
						<ul >
							<li v-for="(item ,index) in NoticeData" :key="index"><router-link :to="{path: 'listpage/xqy', query: {id: item.id}}">
							{{item.title  | ellipsis}}</router-link> 
									<img v-if="item.new==true" src="../images/new.png" />
									<img v-if="item.hot==true" src="../images/hot.png" />
									<span>{{item.publishTime}}</span>
							</li>
						</ul>
						
					</div>
					<!-- @size-change="handleSizeChange" -->
					<div class="page" id="test1">
						<el-pagination 
						background 
						
						@current-change="handleCurrentChange"
						layout="total,prev, pager, next"
						prev-text="上一页"
						next-text="下一页"
						:total="total" 
						:page-size="20">
						</el-pagination>
					</div>
				</div>
			</div>	 



			<div class="mobile">
				<div class=" list">
					<div class="list-1">
						<dl >
							
							<dt><router-link :to="{path: 'listpage/xqy', query: {id: id}}"><img :src="picture" width="100%"/></router-link></dt>
							<dd><router-link :to="{path: 'listpage/xqy', query: {id: id}}">{{title}}</router-link></dd>
						</dl>
						<ul >
							<li v-for="(item ,index) in NoticeData" :key="index"><router-link :to="{path: 'listpage/xqy', query: {id: item.id}}">
							{{item.title | ellipsis1}}</router-link> 
									<img v-if="item.new==true" src="../images/new.png" />
									<img v-if="item.hot==true" src="../images/hot.png" />
									<span>{{item.publishTime}}</span>
							</li>
						</ul>
						
					</div>
					<!-- @size-change="handleSizeChange" -->
					<div class="page" id="test1">
						<el-pagination 
						background 
						
						@current-change="handleCurrentChange"
						layout="total,prev, pager, next"
						prev-text="上一页"
						next-text="下一页"
						:total="total" 
						:page-size="20">
						</el-pagination>
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
		filters: {
				ellipsis (value) {
					if (!value) return ''
						if (value.length >50) {
							return value.slice(0,50) + '...'
						}
					return value
				} ,
				ellipsis1 (value) {
					if (!value) return ''
						if (value.length > 15) {
							return value.slice(0,15) + '...'
						}
					return value
				} ,
			 
			},
     data() {
      return {
		  	host:'http://zs.siso.edu.cn',
			NoticeData:[],
			
			total:1,
			page:'1',
			size:'20',
			title:'',
			id:'',
			picture:'',
			title:''

      };
	},
	beforeCreate(){
		

	},
	created(){
		this.title=this.$route.query.title;
		this.Notice();
		
	},
 
    methods: {
		
     Notice(){
			 	this.title=this.$route.query.title;
				let list={
					"currentPage":this.page,
					"pageSize":this.size,
					"title":this.title,
				} 
				this.$http.post("/app/article/index/list",list).then((response) => {
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
				// console.log(`当前页: ${val}`);
			}


    },
 };
   
</script>
 

 