<template>
  <div class="center mar-t-2">
				 
					
				<app-Left></app-Left>
	        	
        			
			<div class="fl list">
				
                <div class="list-tp">
					<dl v-for ="(item,i) in imglist" :key="i">
	        				<dt><img :src='item.url'/></dt>
	        				<dd>{{item.name}}</dd>
	        		</dl> 
				</div>
				<div class="page" id="test1"> 
					<el-pagination 
					background 
					
      				@current-change="handleCurrentChange"
					layout="total,prev, pager, next"
					prev-text="上一页"
					next-text="下一页"
					:total="total" 
					:page-size="6">
					</el-pagination> 
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
     data() {
      return {
	   host:'http://47.92.84.126',
	   imglist:[],
       total:1,
		page:'1',
		size:'6',

      };
	},
	created(){
		this.gettp();

	},
 
    methods: {
		 //校园风采图片
            gettp(){
				let list={
					"currentPage":this.page,
					"pageSize":this.size, 
				} 
                 this.$http.post("/app/schoolelegant/list" , list).then((response) => {
					 this.imglist = response.data.page.records ;
					 let arr = response.data.page.records  ;
					 for(var i =0 ;i<arr.length;i++){
						 arr[i].url = this.host + arr[i].url;  
					 }
					 this.imglist = arr;
					 this.total =  response.data.page.total ;
				}) 

			} ,
			handleCurrentChange(val) {
				this.page= val;
				 this.gettp()
			}
     
    },
 };
   
</script>
 

<style>

</style>