<template>
  		<div class=" mar-t-2 ">
              <div class="pc footer">
                  <div class="center">
                        <p>© 2019-2030 苏州工业园区服务外包职业学院 All Rights Reserved. - 苏ICP备10020871号</p>
                        <p>地址 : 苏州市工业园区科教创新区若水路99号</p>
                    </div>
              </div>

              <div class="mobile footer">
                  <div class="center">
                        <p>© 2019-2030 苏州工业园区服务外包职业学院 All Rights Reserved. - 苏ICP备10020871号</p>
                        <p>地址 : 苏州市工业园区科教创新区若水路99号</p>
                    </div>
              </div>
              <div class="mobile" style="height:40px"></div>


             <div class="mobile bot-dh">  
                  <el-row :gutter="1" class="dh-m"> 
                            <el-col :xs="8"  > 
                                 <li  > <router-link to="/">首页</router-link></li>
                            </el-col> 
                            <el-col :xs="8"  >  
                                <li ><a :href='"tel://"+consultTel'>在线咨询</a> </li>
                            </el-col> 
                             <el-col :xs="8"  >  
                                <li > <a href="https://j.map.baidu.com/c5/CYr">导航</a></li>
                            </el-col>  
                  </el-row> 
             </div> 
        </div>
        
</template>

<script>
    export default {
	 
     data() {
      return { 
			"consultTel": '', 
      };
	},
	created(){
		this.getdata();
	},

    methods: {
		getdata(){
			this.$http.get("/app/contactus/list").then((response) => { 
				  this.consultTel=response.data.contactusdata.consultTel; 
				}) 
		},
 
    },
 };

 </script>
  <style >
 .bot-dh{width: 100%;position: fixed;z-index: 999999;bottom: 0px;border-top:1px solid white ;background: #fff;}
 .bot-dh .dh-m li{height: 40px;line-height: 40px}
 </style>