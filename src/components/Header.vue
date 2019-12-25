
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
                            <el-col :xs="8"  > <li  > <router-link to="/zsjz">{{zsjz}}</router-link></li> </el-col>  
                            <el-col :xs="8"  > <li  > <router-link to="/zsjh">{{zsjh}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/lqcx">{{lqcx}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/xyfc">{{xyfc}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/bdzn">{{bdzn}}</router-link></li></el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/lxwm">{{lxwm}}</router-link></li> </el-col>
                            <el-col :xs="8"  > <li  > <router-link to="/rmwd">{{rmwd}}</router-link></li></el-col> 
                        </el-row>
                </div> 


                <div  class="pc  ball"   v-if="lxwmshow">
                    <div class="tp-pc"  >
                         <img src="../images/quan.png" alt="" style="width:15px;height:15px;position:absolute;right:2px;top:2px "  @click="qxan" @mouseover="enter" @mouseout ="out">
                         <router-link to="/lxwm" ><img src="../images/tel.png" width="150px" @mouseover="enter" @mouseout ="out"/></router-link> 
                    </div> 
                </div> 
       </div> 
</template>
<script>  
import $ from 'jquery' 
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
                 timeinl:'',
             }
         },
            
         created(){   
             this.getdata();
             this.$nextTick(function () {
                this.imgFloat( );
                }) 
            },
         methods:{  
             imgFloat ( ) { 
                  var oBall = document.querySelector('.ball');
                    var leftNum =2;             //设置小球每次向左运动的像素值
                    var topNum = 2;              //设置小球每次向下运动的像素值
                    var leftMax = window.innerWidth-oBall.clientWidth;             //浏览器窗口宽度减去小球的宽度等于小球能运动到的最大左边位置，下一行代码同理。
                    var topMax = window.innerHeight-oBall.clientHeight;
                    window.onresize = function(){     //当浏览器窗口发生变化时，实时获取浏览器窗口的宽高
                        var leftMax =  window.innerWidth.clientWidth-oBall.clientWidth;
                        var topMax = window.innerHeight-oBall.clientHeight;
                    } 
                  this.timeinl =  setInterval(function(){              //为小球的运动新建一个计时器
                        var Left = oBall.offsetLeft+leftNum,    //小球每次运动完之后，距离浏览器左边边框的距离：上一次距离边框的距离加上这次运动的距离，下一行代码同理
                            Top = oBall.offsetTop+topNum;
                        //判断当小球向左移动的位置大于之前限定的最大距离或者小于0时，也就是超出浏览器窗口的左右边框时，
                        //使他运动的方向取反leftNum = -leftNum，下面Top的判断同理。
                        if(Left>=leftMax){               
                            Left = leftMax;
                            leftNum = -leftNum;     //传参数到下面的获取随机颜色的function
                        }else if(Left<=0){
                            Left = 0;
                            leftNum = -leftNum;  
                        };
                        if(Top>=topMax){
                            Top = topMax;
                            topNum = -topNum; 
                        }else if(Top<=0){
                            Top = 0;
                            topNum = -topNum;  
                        };
                        oBall.style.left = Left+'px';      
                        oBall.style.top = Top+'px';

                    },50)                      //小球每次执行运动的时间

                   
            },
  
            enter(){  
                clearTimeout(this.timeinl); 
            }, 
            out(){
                this.imgFloat();
            },
 
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
 .ball{
            width:150px; 
            border-radius: 50%;
            height: 110px;
            position:absolute;
            z-index:120;
            top:0;
            left:0;
        }  
    .tp-pc{width: 150px;    position: absolute;}
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