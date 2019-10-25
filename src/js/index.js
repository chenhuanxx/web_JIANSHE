
//轮播
layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#lunbo'
    ,width: '100%' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
  });
});


layui.use('laypage', function(){
		  var laypage = layui.laypage;
		  
		  	//执行一个laypage实例
		  	laypage.render({
	    	elem: 'test1', //注意，这里的 test1 是 ID，不用加 # 号
	    	count: 50 //数据总数，从服务端得到
	  });
	});
	
	//注意：折叠面板 依赖 element 模块，否则无法进行功能性操作
	layui.use('element', function(){
	  var element = layui.element;
	  
	  //…
	});
