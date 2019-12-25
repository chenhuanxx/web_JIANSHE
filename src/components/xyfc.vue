<template>
  <div class="center mar-t-2">
				 
					
				<app-Left class="pc"></app-Left>
	        	
        			
			<div class="fl list">
				<div class="school-xyfc  mobile" > 
					<el-row :gutter="10" > 
						<dl v-for ="(item,i) in imglist" :key="i">
							<el-col :xs="12"  >
							<dt  @click="selectGood($event,item)" v-if="item.type==0"><img :src='item.url' width="100%" /></dt>
							<dt  @click="selectGood($event,item)" v-if="item.type==1">
								<video height="100%" 
								poster="../images/vio.png"  
								playsinline    
								preload="auto" 
								ref="videoPlay"
								:src="item.url" type="video/mp4" width="100%" x5-video-player-type="h5" x5-video-player-fullscreen="true"   style="object-fit:fill;height:100%;"></video>
							</dt>
						<dd >{{item.name}}</dd>
								</el-col>
							</dl> 
					</el-row>
						
				</div>
                <div class="list-tp pc">
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
				 <div class="qxan" @click="qxan"><img src="../images/quan.png" alt="" style="width:20px;height:20px"> </div>
				<div class="xqtp">
					<img :src="imgurl"  v-if=" typedata==0" />  
				</div> 
				<video class="pc" ref="videoPlay" :src="imgurl"  controls   autoplay="autoplay" poster="../images/about2.png"  
				style=" object-fit: fill" v-if=" typedata==1" ></video> 
				<video class="mobile" ref="videoPlay" :src="imgurl"  controls   autoplay="autoplay" poster="../images/about2.png"  
				style="width:90%; object-fit: fill" v-if=" typedata==1" ></video> 
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
					 this.$nextTick(() => { 
                        this.$refs.videoPlay.load() 
                   })
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

</style>