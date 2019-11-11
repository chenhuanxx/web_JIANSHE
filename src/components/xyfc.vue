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
					:page-size="16">
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
	   imglist:[],
       total:1,
		page:'1',
		size:'16',

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