
var lottery={

	index:0,	//当前转动到哪个位置，起点位置

	count:0,	//总共有多少个位置

	timer:0,	//setTimeout的ID，用clearTimeout清除

	speed:20,	//初始转动速度

	times:0,	//转动次数

	cycle:50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节

	prize:-1,	//中奖位置
	// 奖品列表
	user:null,
	goodsid:2,
	ok:null,
	isFirst:null,
	isShared:null,
	llNums:30,
	list:["特斯拉,使用一年",'iPhoneXs',"苹果MAC","小米电视","免费洗车卡20次","商城代金券5元","再接再厉","现金红包99元","加油卡300元","流量1M","手机话费50元","行车记录仪"],
	init:function(id){

		if ($("#"+id).find(".lottery-unit").length>0) {

			$lottery = $("#"+id);

			$units = $lottery.find(".lottery-unit");

			this.obj = $lottery;

			this.count = $units.length;

			$lottery.find(".lottery-unit-"+this.index).addClass("active");

		};

	},

	roll:function(){

		var index = this.index;

		var count = this.count;

		var lottery = this.obj;

		$(lottery).find(".lottery-unit-"+index).removeClass("active");

		index += 1;

		if (index>count-1) {

			index = 0;

		};

		$(lottery).find(".lottery-unit-"+index).addClass("active");

		this.index=index;
		return false;

	},

	stop:function(index){
		console.log(index)

		this.prize=index;

		return false;

	}

};



function roll(){

	lottery.times += 1;

	lottery.roll();
	if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {

		clearTimeout(lottery.timer);	 
 // 弹框提示奖品
 					if(lottery.prize==6){
 						if(lottery.isShared==true){
 							setTimeout(()=>{
 				 			$(".fixed").css("display","block")
 				 			$(".has div").css("display","none")
 				 			$(".has>.over").css("display","block")
 				 			$(".has>.img").css("display","block")
 				 			$(".has>.img div").css("display","block")
 			           },500)		
 						}else{
 							setTimeout(()=>{
 				 			$(".fixed").css("display","block")
 				 			$(".has div").css("display","none")
 				 			$(".has>.one").css("display","block")
 				 			$(".has>.img").css("display","block")
 				 			$(".has>.img div").css("display","block")
 			           },500)		
 					}
 						
 					}else{
 						if(lottery.llNum>=30){
								setTimeout(()=>{
 							$(".fixed").css("display","block")
 							$(".has div").css("display","none")
 							$(".lNum").html(lottery.llNums+'M')
 				 			$(".has>.threeM").css("display","block")
 				 			$(".has>.img").css("display","block")
 				 			$(".has>.img div").css("display","block")
 			           },500)
 						}else{
 								setTimeout(()=>{
 							$(".fixed").css("display","block")
 							$(".has div").css("display","none")
 							$(".lNum").html(lottery.llNums+'M')
 				 			$(".has>.oneM").css("display","block")
 				 			$(".has>.img").css("display","block")
 				 			$(".has>.img div").css("display","block")
 			           },500)
 						}
 						
 					}
 			
		  
		// lottery.prize=-1;

		lottery.times=0;

		click=false;

	}else{

		if (lottery.times<lottery.cycle) {

			lottery.speed -= 10;

		}else if(lottery.times==lottery.cycle) {
				getgoodsId()	

		}else{

			if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {

				lottery.speed += 110;

			}else{

				lottery.speed += 20;

			}

		}

		if (lottery.speed<40) {
			lottery.speed=40;

		};

		//console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);

		lottery.timer = setTimeout(roll,lottery.speed);


	}
	return false;

}
 
function list(){
	$.ajax({
        type: "post",
        url: 'https://testservice.chetuobang.com/api/promotion/dial/lotteryList',
        async: false,
        success: function (res) {
        	let list =res.data.lotteryList
        	var node
        	for(var a=0;a<list.length;a++){
        		node=$("<li></li>")
        		node.html(list[a])
        		$('ul').append(node)
        	}
        },
        error: function (res) {
          console.log(res)
        }
      });
}
list()
// 中奖记录
 var scrollSpace = 2500;//滚动间隙
      setInterval(function () {
        noticeScrollUp($('#noticeBox>div'));
      }, scrollSpace);
       function noticeScrollUp(obj) {
        var liHeight = .44;//每个li的高度
        var scrollSpeed = 500;//滚动速度
        var $noticeContext = obj.find("ul:first");
        $noticeContext.animate({ "margin-top": -liHeight + "rem" }, scrollSpeed, function () {
          $noticeContext.css({ "margin-top": "0px" }).find("li:first").appendTo($noticeContext);
        });

      } 

      $(".fixed").click(function(){
      	$(this).css("display","none")
      })


    var click=false;
	lottery.init('lottery');
	$("#lottery a").click(function(){
		
		if(lottery.user==null||lottery.ok==null){
			alert("请稍后再试...")
			return 
		}
		console.log('zhuan')
		if(lottery.ok==1){
			roll()
             if (click) { 
			return false;
		}else{
			lottery.speed=100;
			click=true;
			return false;
		     }
		}
		if(lottery.ok==2){
				alert("分享获取抽奖机会")
		}
		if(lottery.ok==3){
				$(".fixed").css("display","block")
 				$(".has").css("display","none")
 				$(".none").css("display","block")
		}
		

	});
	// 抽奖获取id
	 function getgoodsId(){	
	   // 抽奖接口
			$.ajax({
				type:"post",
				url:"https://testservice.chetuobang.com/api/promotion/dial/lottery",
				data:JSON.stringify({
					userOpenId:lottery.user.openid,
					nickName:lottery.user.nickName,
					isFirst:lottery.isFirst,
					isShared:lottery.isShared
				}),
				 contentType: 'application/json; charset=UTF-8',
				 dataType:'json',
				success:res=>{
					if(res.code==0){	
						// alert(JSON.stringify(res))	
						// alert(res.data.llNum)
						if(res.data.llNum){
						lottery.llNums=res.data.llNum
						}
						let id=res.data.goodsId
						lottery.stop(id)	
						getNum()				
					}else{
						alert("系统错误")
					}	
				},
				fail:()=>{
					alert("系统错误")
				}
			})
	}

	// 判断是否可以抽奖
	function getNum(){
		$.ajax({
			url:"https://testservice.chetuobang.com/api/promotion/dial/getUserLotteryNum",
			method:"post",
			contentType: 'application/json; charset=UTF-8',
		    dataType:'json',
			data:JSON.stringify({
				userOpenId:lottery.user.openid
			}),
			success:res=>{
				if(res.code==0){
					// 抽奖
					// alert(JSON.stringify(res))
					lottery.isFirst=res.data.isFirst
					lottery.isShared=res.data.isShared
				if(res.data.isFirst===true){
						lottery.ok=1
				}
				if(res.data.dialNum==1&&res.data.isShared==true){
					lottery.ok=1
				}
				// 分享
				if(res.data.dialNum==1&&res.data.isShared==false){
					lottery.ok=2
				}
				// 没有次数
				if(res.data.dialNum>=2){
					lottery.ok=3
				}
				}else{
					alert("系统错误")
				}
				
			},
			complete:()=>{
				// alert("getNUm")
			}
		})
	}



// 获取微信code和用户名
GetRequest()
function GetRequest() {
					var url = location.search;
					var theRequest = new Object();
					if (url.indexOf("?") != -1) {
						var str = url.substr(1);
						strs = str.split("&");
						for(var i = 0; i < strs.length; i ++) {
							theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
						}
					}
					console.log(theRequest);
					return theRequest;
				}
				GetRequest()
				var getRequest = GetRequest();
				console.log(getRequest)
				if (!getRequest.code) {
					var pageUrl = window.location.href
					.replace(/[/]/g, "%2f")
					.replace(/[:]/g, "%3a")
					.replace(/[#]/g, "%23")
					.replace(/[&]/g, "%26")
					.replace(/[=]/g, "%3d");
					var url =
					"https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
					"wx8673c3466f721c36" +
					"&redirect_uri=" +
					pageUrl + 
					"&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
					window.location.href = url;
				}
				if(getRequest.code){
					// alert(getRequest.code)
						$.ajax({   
					type:'POST',
					dataType:'json',
					url:'https://testservice.chetuobang.com/api/wx/info/detail',
					contentType: 'application/json', 
					data:JSON.stringify({
						productType:'LOTTERY',
						userCode:getRequest.code
					}),
					success:function(res){
						// alert(JSON.stringify(res.data))
						lottery.user=res.data.userdetailinfo
							getNum()	
					},
					error:function(err){
						alert("获取用户信息错误")
					}
				})
				}

// // 分享

 getWX();
    function getWX() {
      var ur = window.location.href.split("#")[0];
      $.ajax({
        type: "post",
        contentType: 'application/json; charset=UTF-8',
		dataType:'json',
		data:JSON.stringify({productType:'LOTTERY',requestUrlWx:ur}),
        // url: 'https://wzcx.chetuobang.com/wz_api/?testservice=default.jsapi&url=' + ur,
        url:"https://testservice.chetuobang.com/api/wx/info/share",
        success: function (res) {
          console.log(res)
          //微信配置
          wx.config({
            debug: false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.signatureMap.appId, // 必填，公众号的唯一标识
            timestamp: res.data.signatureMap.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.signatureMap.noncestr, // 必填，生成签名的随机串
            signature: res.data.signatureMap.signature,// 必填，签名，见附录1
            jsApiList: [
            'onMenuShareTimeline',
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareQZone"

            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        },
        error: function (res) {
          console.log(res)
        }
      });
    }
  function getShareNum(){
	$.ajax({
		url:"https://testservice.chetuobang.com/api/promotion/dial/shared",
		method:"post",
		contentType: 'application/json; charset=UTF-8',
		dataType:'json',
	    data:JSON.stringify({userOpenId:lottery.user.openid}),
	    success:res=>{
	    	// alert(JSON.stringify(res)+"分享返回")
	    	if(res.code==0){
	    		getNum()
	    	}
	    }
	})
}

wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
     wx.onMenuShareTimeline({
    title: '今日运气之王就是你！天天幸运大抽奖！', // 分享标题
desc: '优选车友社区，提供路况、违章、油价、限行信息查询，还有福利活动。', // 分享描述
    link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'https://cms-img.oss-cn-hangzhou.aliyuncs.com/wechat/planet/v2/zhuanz.png', // 分享图标
    success: function () {
},
complete:()=>{
		// alert("成功")
	getShareNum()
	$(".fixed").css("display","none")
}
})
   wx.onMenuShareAppMessage({
title: '今日运气之王就是你！天天幸运大抽奖！', // 分享标题
desc: '优选车友社区，提供路况、违章、油价、限行信息查询，还有福利活动。', // 分享描述
link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
imgUrl: 'https://cms-img.oss-cn-hangzhou.aliyuncs.com/wechat/planet/v2/zhuanz.png', // 分享图标
success: function () {
},
complete:()=>{
		// alert("成功")
	getShareNum()
	$(".fixed").css("display","none")
}
});
   wx.onMenuShareQQ({
title: '今日运气之王就是你！天天幸运大抽奖！', // 分享标题
desc: '优选车友社区，提供路况、违章、油价、限行信息查询，还有福利活动。', // 分享描述
imgUrl: 'https://cms-img.oss-cn-hangzhou.aliyuncs.com/wechat/planet/v2/zhuanz.png', // 分享图标
success: function () {
},
complete:()=>{
		// alert("成功")
	getShareNum()
	$(".fixed").css("display","none")
}
});
   wx.onMenuShareQZone({
title: '今日运气之王就是你！天天幸运大抽奖！', // 分享标题
desc: '优选车友社区，提供路况、违章、油价、限行信息查询，还有福利活动。', // 分享描述
imgUrl: 'https://cms-img.oss-cn-hangzhou.aliyuncs.com/wechat/planet/v2/zhuanz.png', // 分享图标
success: function () {
},
complete:()=>{
	// alert("成功")
	getShareNum()
	$(".fixed").css("display","none")
}
});
    });