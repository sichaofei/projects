import $ from "jquery";
$(function () {
    $(".foot2").addClass("roate");
    var divd = $(".po");
    divd.each(function (index) {
        $(this).on('touchstart', function (evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            //要做的事情
        }).on('touchmove', function (evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            if (e.targetTouches.length == 1) {
                var touch = e.targetTouches[0];  // 把元素放在手指所在的位置
                var X = touch.pageX - parseInt($(this).width()) / 2
                var Y = touch.pageY - $(window).scrollTop() - parseInt($(this).height()) / 2
                if (X >= $(window).width() - $(this).width()) {
                    X = $(window).width() - $(this).width()
                }
                if (X <= 0) {
                    X = 0
                }
                if (Y >= $(window).height() - $(this).height() - 2 * 20) {
                    Y = $(window).height() - $(this).height() - 2 * 20
                }
                if (Y <= 0) {
                    Y = 0
                }

                $(".position").css("left", (X + 'px'));
                $(".position").css("top", (Y + 'px'));
                // $(this).css("background", getcolor());
            }
        }).on('touchend', function (evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            // $(this).css("background",getcolor());
        })
    });
});
var beforeScrollTop = document.body.scrollTop;
$(window).scroll(function () {
    var afterScrollTop = document.body.scrollTop;
    var delta = afterScrollTop - beforeScrollTop;

    //顶部消失
    if (delta > 20) {
        $(".foot1").addClass("roate");
        $(".foot2").removeClass("roate");
    }
    if (delta < -30) {
        $(".foot2").addClass("roate");
        $(".foot1").removeClass("roate");
    }
    beforeScrollTop = afterScrollTop;
});
