<template>
  <div class="center mar-t-2">
				 
					
				<app-Left></app-Left>
	        	
        			
			<div class="fl list">
				
                <div class="list-tp">
					<dl v-for ="(item,i) in imglist" :key="i">
	        				<dt  @click="selectGood($event,item)" v-if="item.type==0"><img :src='item.url'/></dt>
							<dt  @click="selectGood($event,item)" v-if="item.type==1">
								<video style="width:100%; height:100%; object-fit: fill"  poster="../images/about2.png"  controls="controls" muted autoplay="autoplay">
									<source :src='item.url' type="video/mp4" >
								</video></dt>
	        				<dd>{{item.name}}</dd>
	        			</dl> 
				</div>

				
			<!--遮罩层-->
			<div class="mask" v-if="mask"></div>
			
			<!--弹出层-->
			<div class="show_d"  v-if="show_d">
				 <div class="qxan" @click="qxan"><img src="../images/quan.png" alt=""> </div>
				<div class="xqtp">
					<img :src="imgurl"  v-if=" typedata==0"/>  
				</div>
				 
					<video   poster="../images/about2.png"  controls="controls" muted autoplay="autoplay" v-if="typedata==1">
						 <source :src='imgurl' type="video/mp4" >
					</video>
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
		imgurl:'',	
		typedata:'',
		mask:false,
		show_d:false,

      };
	},
	created(){
		this.gettp();

	},
 
    methods: {
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
.qxan {position: fixed;top: 10px;right: 10px;z-index: 999}
.qxan img{height: 20px;width: 20px;border-radius:5px }
.mask { width: 100%; position: fixed; top: 0px; left: 0px; z-index: 200;  height: 100%; background: black ; opacity: 0.8; }
 .show_d { 
			width: 1000px; 
			top: 5%;
			left: 50%;
			transform: translateX(-500px); 
			position: fixed;
			z-index: 300; 
			border-radius:20px ;
			}
.xqtp{text-align: center; object-fit: fill}
.show_d img{max-height:600px;max-width: 1000px;}
 .show_d video{width: 550px; margin: 0 auto;display:block}

</style>