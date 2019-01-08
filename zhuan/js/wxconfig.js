$(function(){
    function weconfig(){
        $.ajax({
            type: 'GET',
            url: 'https://wzcx.chetuobang.com/wz_api/?service=default.jsapi&url=' + encodeURIComponent(window.location.href.split("#")[0]),
            success: function(data){
                if(data.ret == 200){
                    //console.log(data);
                    wxshare(data.data);
                }else{

                }
            }
        });
    }
    weconfig();
    function wxshare(data){
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp,
            nonceStr: data.nonceStr, // 同上
            signature: data.signature,// 同上
            jsApiList: [
                'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
                'onMenuShareTimeline', //分享到朋友圈
                'onMenuShareAppMessage', //分享给好友
                'onMenuShareQQ',  //分享到QQ
                'onMenuShareWeibo', //分享到微博
                'onMenuShareQZone',
                'chooseImage',
                'uploadImage'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready(function(){
            var qudao = [
                { id: 1, text: '朋友圈' },
                { id: 2, text: '朋友' },
                { id: 3, text: 'QQ' },
                { id: 4, text: '空间' },
                { id: 5, text: '微博' }
            ];
            var shareTemp = [];
            for (var i = 0; i < 5; i++) {
                (function(i){
                    shareTemp[i] = {
                        title: '车托帮查违章-全国最准确最实时的车辆违章查询服务。',
                        desc: '车托帮查违章-全国最准确最实时的车辆违章查询服务。',
                        link: 'https://wzcx.chetuobang.com/wz_api/?service=qtv.index',
                        imgUrl: 'http://cms-imgs.chetuobang.com/wechat/images/logo.jpg',
                        trigger: function (res) {
                            console.log(res + 'trigger');
                        },
                        success: function (res) {
                            // 分享出去的渠道， 传给后端 Todo
                            var data = qudao[i];
                            console.log(JSON.stringify(data));
                        },
                        cancel: function (res) {
                            console.log(res + 'cancel');
                        },
                        fail: function (res) {
                            console.log(res + 'fail');
                        }
                    }
                })(i)
            }
            wx.onMenuShareTimeline(shareTemp[0]);
            wx.onMenuShareAppMessage(shareTemp[1]);
            wx.onMenuShareQQ(shareTemp[2]);
            wx.onMenuShareQZone(shareTemp[3]);
            wx.onMenuShareWeibo(shareTemp[4]);
        });
    }
  })