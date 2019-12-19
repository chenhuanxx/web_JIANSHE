
<template>
       <div class="top">
           <div class="header1 pc">
                    <div class="gsmc fl">
                    	<i class="fl ">
                        	<a href="/" title="苏州工业园区服务外包职业学院招生信息网">
                        		<img src="../images/logo.png" alt="苏州工业园区服务外包职业学院招生信息网" width="100px">
                        	</a>
                        </i>
	                    <div  class="fl " style="width: 400px;">
	                    	<a href="/" title="苏州工业园区服务外包职业学院招生信息网" class="font-20">苏州工业园区服务外包职业学院 </a>
	                    	<span class="font-14">招生信息网</span>
	                    	<p style="font-size: 12px; color: darkgray;">Suzhou Industrial Park Service Outsourcing Vocational College</p>
	                    </div>
                    </div>
                    <div class="fr font-22 wxerm1  ">
                        <img src="../images/wxewm.png" alt="" width="100px">
                    </div>
                     <div  class="fr font-22 wxerm1  ">
                        <img src="../images/QQewm.png" alt="" width="100px">
                    </div>
            </div>
<!-- 移动端 -->
            <div class="header1 mobile">
                    <div class="gsmc fl" style="margin-bottom:10px ;margin-top:10px">
                    	<div class="fl "  style="margin-left:5px;width:20%;margin-top:3px">
                        	<a href="/" title="苏州工业园区服务外包职业学院招生信息网">
                        		<img src="../images/logo.png" alt="苏州工业园区服务外包职业学院招生信息网" width="100%">
                        	</a>
                        </div>
	                    <div  class="fl  " style="margin-left:5px;width:70%">
	                    	<a href="/" title="苏州工业园区服务外包职业学院招生信息网" class="f-36">苏州服务外包职业学院 </a> 招生网 
	                        <p style="font-size: 12px; color: darkgray;">Outsourcing College Admissions Network</p>	 
	                    </div>
                    </div>
                    
            </div>
            
 
             <div class="dhxtp ">
                	<img src="../images/top.jpg" />
            </div>
                <div class="navigation-bg pc" id="daohang">
                    <ul class="center">
                        <li  > <router-link to="/">{{home}}</router-link></li>
                        <li  > <router-link to="/tzgg">{{tzgg}}</router-link></li>
                        <li  > <router-link to="/zyjs">{{zyjs}}</router-link></li>
                        <li  > <router-link to="/zsjz">{{zsjz}}</router-link></li>
                        <li  > <router-link to="/zsjh">{{zsjh}}</router-link></li>
                        <li  > <router-link to="/lqcx">{{lqcx}}</router-link></li>
                        <li  > <router-link to="/xyfc">{{xyfc}}</router-link></li>
                        <li  > <router-link to="/bdzn">{{bdzn}}</router-link></li>
                        <li  > <router-link to="/lxwm">{{lxwm}}</router-link></li> 
                        <li  > <router-link to="/rmwd">{{rmwd}}</router-link></li>
                        <!-- <li  > <a target="_blank" href="http://www.siso.edu.cn/">热门问答</a></li> -->
                    </ul>
                </div>


                <div class="mobile" id="daohang">
                        <el-row :gutter="1" class="dh-m"> 
                            <el-col :xs="8"  > <li  > <router-link to="/tzgg">{{tzgg}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/zyjs">{{zyjs}}</router-link></li></el-col>
                            <el-col :xs="8"  ><li  > <router-link to="/zsjz">{{zsjz}}</router-link></li> </el-col>  
                            <el-col :xs="8"  > <li  > <router-link to="/zsjh">{{zsjh}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/lqcx">{{lqcx}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/xyfc">{{xyfc}}</router-link></li></el-col>
                            <el-col :xs="8"  ><li  > <router-link to="/bdzn">{{bdzn}}</router-link></li></el-col>
                            <el-col :xs="8"  ><li  > <router-link to="/lxwm">{{lxwm}}</router-link></li> </el-col>
                            <el-col :xs="8"  ><li  > <router-link to="/rmwd">{{rmwd}}</router-link></li></el-col> 
                        </el-row>
                </div>

                <!-- <div class="ddtp" id=" " v-if="lxwmshow">
                    <div class="lxwmtp">
                        <div class="qxlxwm" @click="qxan"><img src="../images/quan.png" alt="" style="width:20px;height:20px;float:right "> </div>
                        <div  > </div>
                    </div> 
                </div> -->
                <!-- <div id="img">
                 <router-link to="/lxwm" ><img src="../images/tel.png" width="200px" /></router-link>
                    <div class="reset">关闭&times;</div>
                </div> -->


                
       </div> 
</template>
<script>  
     export default{
         data(){
             return{
                 lxwmshow:true, 
                 home:'',
                 tzgg:'',
                 zyjs:'',
                 zsjz:'',
                 zsjh:'',
                 lqcx:'',
                 xyfc:'',
                 bdzn:'',
                 lxwm:'',
                 rmwd:'',
             }
         },
            
         created(){ 
             this.getdata();
         },
         methods:{ 
              qxan(){
                  this.lxwmshow=false; 
              },
			
			getdata(){ 
				this.$http.post("/app/article/getLabel" ).then((response) => { 
                    var data = response.data.list ;
                    for(var i =0 ; i<data.length;i++){
                        if(data[i].code == 'sys_label_index'){
                            this.home = data[i].name
                        }
                         if(data[i].code == 'sys_label_notice'){
                            this.tzgg = data[i].name
                        }
                         if(data[i].code == 'sys_label_introduce'){
                            this.zyjs = data[i].name
                        }
                         if(data[i].code == 'sys_label_regulation'){
                            this.zsjz = data[i].name
                        }
                         if(data[i].code == 'sys_label_plan'){
                            this.zsjh = data[i].name
                        }
                        if(data[i].code == 'sys_label_enroll'){
                            this.lqcx = data[i].name
                        }
                         if(data[i].code == 'sys_label_elegant'){
                            this.xyfc = data[i].name
                        }
                         if(data[i].code == 'sys_label_report'){
                            this.bdzn = data[i].name
                        }
                         if(data[i].code == 'sys_label_contact'){
                            this.lxwm = data[i].name
                        }
                         if(data[i].code == 'sys_label_school_idx'){
                            this.rmwd = data[i].name
                        } 
                    } 
 
				})  
			},

         },
         mounted(){}
     }
 </script>
  <style >
   #img{
    position: absolute;  
      }
 #img a{
    text-decoration: none;
    color:green;
    display:block; 
    text-align: center; 
    line-height: 20px; 
     padding:55px 5px; 
     }
 #img .reset{
    position: absolute;
    top:5px;
    right:5px;
    font-size: 11px;}
</style>