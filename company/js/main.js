/**
 * Created by Administrator on 2015/4/30.
 */
var lianjie = document.getElementById("animation-effect");
//    lianjie.on("click",function(){
//        locat ion.href="http://www.ei-marketing.cn:8080/goOver/starbucks/index.html";
//    });
//    window.onload=function(){
//        lianjie();
//    }
//        背景音乐
function volchange()
{
    var au = document.getElementById("bgmusic");
    var vb = document.getElementById("volbtn");
    if(au.paused==true)
    {
        au.play();
        vb.style.cssText = "position:fixed; z-index:99; left:88%; top:5%; background-image:url(images/voicechange.png); background-position:70px;  width:80px; height:50px;"
    }
    else
    {
        au.pause();
        vb.style.cssText = "position:fixed; z-index:99; left:88%; top:5%; background-image:url(images/voicechange.png); background-position:106px;  width:80px; height:50px;";
    }
}
window.onload=function(){
    setTimeout(function() {
        $.getScript('js/zhongjian.js');
    }, 3000);
}
//        关于我们的点击事件
$(".aboutUS").on("tap",function(){
    $(".show2").css("background-image","url(./images/mohubg.jpg)");
    $("#hide").fadeIn("slow");
    var click = document.getElementById("clickmusic");
    click.play();
})
$("#hide").on("tap",function(){
    $(".show2").css("background-image","url(./images/3.jpg)");
    $("#hide").fadeOut("slow");
})
//        关于我们的点击事件
$(".aboutUS1").on("tap",function(){
    $(".show4").css("background-image","url(./images/mohubg.jpg)");
    $("#hide1").fadeIn("slow");
    var click = document.getElementById("clickmusic");
    click.play();
})
$("#hide1").on("tap",function(){
    $(".show4").css("background-image","url(./images/3.jpg)");
    $("#hide1").fadeOut("slow");
})
//往昔点击
$("#jiyi").on("tap",function(){
    $(".head").css("z-index","2");
    $(".headhui").css("z-index","3");
    $(".foothui").css("z-index","2");
    $(".foot").css("z-index","3");
    var au = document.getElementById("music");
    au.play();
    //精彩未来点击
})
$("#weilai").on("tap",function(){
    $(".foothui").css("z-index","3");
    $(".foot").css("z-index","2");
    $(".head").css("z-index","3");
    $(".headhui").css("z-index","2");
//            $(".show1").css("background-image","url(./images/bg.jpg)");
    var au = document.getElementById("music");
    au.play();
})
$(function () {

    var $box = $('#box')
        , $indicators = $('.goto-slide')
        , $effects = $('.effect')
//        , $timeIndicator = $('#time-indicator')
        , slideInterval = 5000
        , effectOptions = {
            'blindLeft': {blindCount: 15}
            , 'blindDown': {blindCount: 15}
            , 'tile3d': {tileRows: 6, rowOffset: 80}
            , 'tile': {tileRows: 6, rowOffset: 80}
        };

    // This function runs before the slide transition starts
    var switchIndicator = function ($c, $n, currIndex, nextIndex) {
        // kills the timeline by setting it's width to zero
//        $timeIndicator.stop().css('width', 0);
        // Highlights the next slide pagination control
        $indicators.removeClass('current').eq(nextIndex).addClass('current');
    };

    // This function runs after the slide transition finishes
    var startTimeIndicator = function () {
        // start the timeline animation
//        $timeIndicator.animate({width: '680px'}, slideInterval);
    };

    // initialize the plugin with the desired settings
    $box.boxSlider({
        speed: 1000
        , autoScroll: false
        , timeout: slideInterval
        , next: 'body'
        , prev: 'body'
        , next1: '#jiyi'
        , prev1: '#weilai'
        , pause: '#pause'
        , effect: 'scrollVert3d'
        , onbefore: switchIndicator
        , onafter: startTimeIndicator
    });

    startTimeIndicator(); // start the time line for the first slide

    // Paginate the slides using the indicator controls
//            $('#controls').on('click', '.goto-slide', function (ev) {
//                $box.boxSlider('showSlide', $(this).data('slideindex'));
//                ev.preventDefault();
//            });
//
//            // This is for demo purposes only, kills the plugin and resets it with
//            // the newly selected effect FIXME clean this up!
//            $('#effect-list').on('click', '.effect', function (ev) {
//                var $effect = $(this)
//                        , fx = $effect.data('fx')
//                        , extraOptions = effectOptions[fx];
//
//                $effects.removeClass('current');
//                $effect.addClass('current');
//                switchIndicator(null, null, 0, 0);
//
//                if (extraOptions) {
//                    $.each(extraOptions, function (opt, val) {
//                        $box.boxSlider('option', opt, val);
//                    });
//                }
//
//                $box.boxSlider('option', 'effect', $effect.data('fx'));
//
//                ev.preventDefault();
//            });

});
//横向3D转动1
$(function () {

    var $box = $('#box1')
        , $indicators = $('.goto-slide')
        , $effects = $('.effect')

        , slideInterval = 5000
        , effectOptions = {
            'blindLeft': {blindCount: 15}
            , 'blindDown': {blindCount: 15}
            , 'tile3d': {tileRows: 6, rowOffset: 80}
            , 'tile': {tileRows: 6, rowOffset: 80}
        };

    // This function runs before the slide transition starts
    var switchIndicator = function ($c, $n, currIndex, nextIndex) {
        // kills the timeline by setting it's width to zero
//        $timeIndicator.stop().css('width', 0);
        // Highlights the next slide pagination control
        $indicators.removeClass('current').eq(nextIndex).addClass('current');
    };

    // This function runs after the slide transition finishes
    var startTimeIndicator = function () {
        // start the timeline animation
//        $timeIndicator.animate({width: '680px'}, slideInterval);
    };

    // initialize the plugin with the desired settings
    $box.boxSlider({
        speed: 1000
        , autoScroll: false
        , timeout: slideInterval
        , next2: '#box1'
        , next4: '.swipe1'
        , prev2: '#box1'
        , pause: '#pause'
        , effect: 'scrollHorz3d'
        , onbefore: switchIndicator
        , onafter: startTimeIndicator
    });

    startTimeIndicator(); // start the time line for the first slid

});
//横向3D转动2
$(function () {

    var $box = $('#box2')
        , $indicators = $('.goto-slide')
        , $effects = $('.effect')
//        , $timeIndicator = $('#time-indicator')
        , slideInterval = 5000
        , effectOptions = {
            'blindLeft': {blindCount: 15}
            , 'blindDown': {blindCount: 15}
            , 'tile3d': {tileRows: 6, rowOffset: 80}
            , 'tile': {tileRows: 6, rowOffset: 80}
        };

    // This function runs before the slide transition starts
    var switchIndicator = function ($c, $n, currIndex, nextIndex) {
        // kills the timeline by setting it's width to zero
//        $timeIndicator.stop().css('width', 0);
        // Highlights the next slide pagination control
        $indicators.removeClass('current').eq(nextIndex).addClass('current');
    };

    // This function runs after the slide transition finishes
    var startTimeIndicator = function () {
        // start the timeline animation
//        $timeIndicator.animate({width: '680px'}, slideInterval);
    };

    // initialize the plugin with the desired settings
    $box.boxSlider({
        speed: 1000
        , autoScroll: false
        , timeout: slideInterval
        , next3: '#box2'
        , next5: '.swipe2'
        , prev3: '#box2'
        , pause: '#pause'
        , effect: 'scrollHorz3d'
        , onbefore: switchIndicator
        , onafter: startTimeIndicator
    });

    startTimeIndicator(); // start the time line for the first slid

});

//// 设备宽度
//var windowW = $(window).width();
//// 设备高度
//var windowH = $(window).height();
////        页面数
//var pageNumber = 5;
///**
// * 滑动事件
// * swipeLeft,向左滑
// * swipeRight,右滑
// * swipeUp,上滑
// * swipeDown，下滑
// */
$('#viewport-shadow1').on('swipeLeft',function(){
    $(".swipe1").remove();
});
$('#viewport-shadow2').on('swipeLeft',function(){
    $(".swipe2").remove();
});
//document.addEventListener('touchmove',function(event){
//    event.preventDefault(); },false);
////        向左滑动3个格子
//function _removeClass(){
//    setTimeout(function(){
//        $('.thisDiv').removeClass('thisDiv');
//    },600);
//}
//
////        向左滑动3个格子
//$('.divList').on('swipeLeft',function(){
//
//    //给当前div添加唯一类名
//    $(this).addClass('thisDiv');
//    $(".swipe").remove();
//    setTimeout(function(){
//        //获取当前div的ul的marginLeft值
//        var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));
//
//        if(thisMargin>=0){//ul的marginLeft值小于等于0
//            $('.thisDiv').children().animate({//向左滑动315个像素
//                marginLeft: '-263px'
//            },700);
//            _removeClass();
//        }else if(thisMargin>=-263){
//            $('.thisDiv').children().animate({
//                marginLeft: '-526px'
//            },700);
//            _removeClass();
//        }
//    },10);
//
//});

//        向右滑动3个格子
//$('.divList').on('swipeRight',function(){
//    $(this).addClass('thisDiv');
//    setTimeout(function(){
//        var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));
//
//        if(thisMargin<=-526){
//            $('.thisDiv').children().animate({
//                marginLeft: '-263px'
//            },700);
//            _removeClass();
//        }else if(thisMargin>=-263){
//            $('.thisDiv').children().animate({
//                marginLeft: '0px'
//            },700);
//            _removeClass();
//        }
//    },10);
//});