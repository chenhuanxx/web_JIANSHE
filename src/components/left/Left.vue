<template>
    <div class="zszx-left">
		<div  >
						<div class="zszxzx">
							<p class="tzggsx" >招生咨询</p>

						</div>
						
				
						<ul  > 
	        				<div class="qqlx"><span class="iconfont icon-qq1"></span>  
	        					<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=e92d28e96279b179f666a92da7a90434bef92a0eaf817b6ab5112e24fedc15ea"   title="欢迎您前来咨询" style="padding-left: 10px;">
	        						招生咨询qq : {{enrollQq}} <img border="0" src="../../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px" style="padding-left: 30px;" >
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
							<div class="wxlist-lef">
								<div class="fr wxtp1 ">
									<img src="../../images/wxewm.png" alt="" width="100px">
								</div>
								<div  class="fr  wxtp1">
									<img src="../../images/QQewm.png" alt="" width="100px">
								</div>

							</div>
					</div>
						<!-- <ul  >
	        				<strong>招生咨询</strong>
	        				<div class="qqlx"><span class="iconfont icon-qq1"></span> :
	        					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1276520&site=qq&menu=yes" id="udesk-feedback-tab" title="欢迎您前来咨询">
	        						{{enrollQq}} <img border="0" src="../../images/group.png" alt="加入QQ群" title="加入QQ群" width="65px">
	        					</a>
	        				</div>
							<dl class="phone">
								<dt style="float:left">
									<span class="iconfont icon-dianhua"></span> :
								</dt>
								<dd style="float:left">
									<ul>
										<li>{{enrollTel1}} 	</li>
										<li>{{enrollTel2}} 	</li>
										<li>{{enrollTel3}} 	</li>
										 
									</ul>
								</dd>
							</dl>

	        				 <div class="adds">
								 <p class="fl dzl1"><span class="iconfont icon-dizhi1"></span> :</p>  <p class="fl dzl">{{schoolAddress}}</p> 

							 </div> 
	        			</ul>
						<div class="wxtp">
							<dl>
								<dt> <img src="../../images/wxewm.png" alt="" width="120px"></dt>
								<dd>关注官方微信公众号</dd>
							</dl>
							<dl>
								<dt><img src="../../images/QQewm.png" alt="" width="120px"></dt>
								<dd>官方咨询QQ群</dd>
							</dl>

						</div>
							 -->

	 </div>

</template>
<script>
export default {
	data(){
		return{
			enrollQq:'',
			enrollTel1:'',
			enrollTel2:'',
			enrollTel3:'', 
			schoolAddress:'',
			qqhm:'',

		}
	},
	created(){
		this.getdata();

	},
	methods:{
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
		}
	}
}
</script>