/**
 * Created by Administrator on 2015/4/23.
 */
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
//$('#viewport-shadow1').on('swipeLeft',function(){
//    $(".swipe1").remove();
//});
//$('#viewport-shadow2').on('swipeLeft',function(){
//    $(".swipe2").remove();
//});
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
//
////        向右滑动3个格子
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


/**
 * Created by Administrator on 2015/4/23.
 */
// 设备宽度
var windowW = $(".divList").width();
var Width=$(window).width();
// 设备高度
var windowH = $(window).height();
//        页面数
var pageNumber = 5;
/**
 * 滑动事件
 * swipeLeft,向左滑
 * swipeRight,右滑
 * swipeUp,上滑
 * swipeDown，下滑
 */
$('#viewport-shadow1').on('swipeLeft',function(){
    $(".swipe1").remove();
});
$('#viewport-shadow2').on('swipeLeft',function(){
    $(".swipe2").remove();
});
if(Width<400){
    document.addEventListener('touchmove',function(event){
        event.preventDefault(); },false);
//        向左滑动3个格子
    function _removeClass(){
        setTimeout(function(){
            $('.thisDiv').removeClass('thisDiv');
        },600);
    }

//        向左滑动3个格子
    $('.divList').on('swipeLeft',function(){

        //给当前div添加唯一类名
        $(this).addClass('thisDiv');
        $(".swipe").remove();
        setTimeout(function(){
            //获取当前div的ul的marginLeft值
            var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));

            if(thisMargin>=0){//ul的marginLeft值小于等于0
                $('.thisDiv').children().animate({//向左滑动315个像素
                    marginLeft: '-97%'
                },700);
                _removeClass();
            }else if(thisMargin>=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '-196%'
                },700);
                _removeClass();
            }
        },10);

    });

//        向右滑动3个格子
    $('.divList').on('swipeRight',function(){
        $(this).addClass('thisDiv');
        setTimeout(function(){
            var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));

            if(thisMargin>=-2*windowW&&thisMargin<=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '-97%'
                },700);
                _removeClass();
            }else if(thisMargin>=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '0px'
                },700);
                _removeClass();
            }
        },10);
    });

}
else{
    document.addEventListener('touchmove',function(event){
        event.preventDefault(); },false);
//        向左滑动3个格子
    function _removeClass(){
        setTimeout(function(){
            $('.thisDiv').removeClass('thisDiv');
        },600);
    }

//        向左滑动3个格子
    $('.divList').on('swipeLeft',function(){

        //给当前div添加唯一类名
        $(this).addClass('thisDiv');
        $(".swipe").remove();
        setTimeout(function(){
            //获取当前div的ul的marginLeft值
            var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));

            if(thisMargin>=0){//ul的marginLeft值小于等于0
                $('.thisDiv').children().animate({//向左滑动315个像素
                    marginLeft: '-96%'
                },700);
                _removeClass();
            }else if(thisMargin>=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '-193%'
                },700);
                _removeClass();
            }
        },10);

    });

//        向右滑动3个格子
    $('.divList').on('swipeRight',function(){
        $(this).addClass('thisDiv');
        setTimeout(function(){
            var thisMargin = parseInt($('.thisDiv').children().css('marginLeft'));

            if(thisMargin>=-2*windowW&&thisMargin<=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '-96%'
                },700);
                _removeClass();
            }else if(thisMargin>=-windowW){
                $('.thisDiv').children().animate({
                    marginLeft: '0px'
                },700);
                _removeClass();
            }
        },10);
    });
}

$('body').on("swipeDown",function(){
    location.href="index.html"
})