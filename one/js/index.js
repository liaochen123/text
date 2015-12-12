
//获取高度的自适应------------------------------------------------------------------------------------------↓
$(function(){
    var $main = $('#main');
    var $list = $('#list');
    var $li = $list.find('>li');
    var desW = 640;
    var desH = 1008;
    var viewHeight = $(window).height();

    $main.css('height',viewHeight);

    function nowWidth(){
        var w = desW/desH * viewHeight;
        return w;
    }

    $li.css('backgroundPosition',( (desW - nowWidth())/96 )+'px 0');


//获取高度的自适应----------------------------------------------------------------------------------------↑

//固定页面在微信窗口禁止上下滑动----------------------------------------------------------------------------------------↑
$('body').on('touchmove', function (event) {
    event.preventDefault();
});
//固定页面在微信窗口禁止上下滑动----------------------------------------------------------------------------------------↑
/*写在触发外面的手势淡进来的效果*/
setTimeout(function(){
    $('#shoushi').fadeIn(1000);
},2000);
/*写在触发外面的手势淡进来的效果*/

$('#cube').on("touchstart",function(){//向左拨动触发（事件）方块的旋转
    $('#cube').addClass('wrap2');
    $("#shoushi").fadeOut(1000);/*触发的时候手势提醒消失*/
    setTimeout(function() {/*曝光动画定时器*/
        $("#baoguang").css("display","block");/*曝光图片显示*/
    },6000)/*调整时间*/
    setTimeout(function() {/*定时器*/
        $("#baoguang").addClass("tu14Active");
    },1100)/*调整时间*/
    $("#baoguang").on('animationend webkitAnimationEnd', function(){
        $("#baoguang").animate({'opacity': 0}, 1000,function(){
            $("#baoguang").hide(0);
        });/*曝光动画的渐渐淡出去*/
        $('#lo').fadeIn(1000, function(){/*中间文字的淡进来*/
            setTimeout(function(){/*定时器*/
                $('#lo').fadeOut(2000);/*中间文字的淡出去*/
                $('#mfx').fadeIn(1900, function(){/*中间小方块淡进来*/
                    $('#ad').animate({bottom:'600px'}, 1000);/*彗星入场*/
                    $('#ab').animate({top:'600px'}, 1000, function(){/*火星入场之后#zhishi淡入而后淡出去*/
                        $('#zhishi').fadeIn(1000,function(){/*指示闪动淡进来*/
                            $('#zhishi').fadeOut(1000);/*指示闪动之后淡出去*/
                        });
                        $('#guanyu').fadeIn(1000);/*关于我们淡入进来*/
                        $('#jingcai').fadeIn(1000);/*精彩动效淡入进来*/
                    });
                });
            }, 1000)
        });
    });
});
/*------------------拖动火球和彗星球-----------------------------------------------------*/
/*上-彗星*/
//$('#ad').on("touchstart",function(){//手指刚接触屏幕时触发
//    $('#ad').css('margin-bottom','0');
//});
//$('#ad').on("touchmove",function(){//手指在屏幕上移动时触发
//    var t = window.event.touches[0].pageY;
//    //console.log($("#ad").height());
//    //console.log(t);
//    $('#ad').css('margin-bottom',- t + 300 + "px");
//});
//$('#ad').on("touchend",function(event1){//手指从屏幕上移开时触发
//    $('#ad').css('margin-bottom','0');
//});
//

/*下-火球*/
//$('#ab').on("touchstart",function(){
//    $('#ab').css('margin-top','0');
//});
//$('#ab').on("touchmove",function(event2){
//    var t = window.event.touches[0].pageY;
//    //console.log(#ab);
//    $('#ab').css('margin-top', + t -  780 + "px");
//});
//$('#ab').on("touchend",function(event3){
//    $('#ab').css('margin-top','0');
//});
/*----------------------拖动火球和彗星球-------------------------------------------------*/


/*----------------------拖动碰撞火球和彗星球页面跳转-------------------------------------------------*/
/*上-彗星*/
$('#ad').on({
    touchstart:function(){//手指刚接触屏幕时触发
        $('#ad').css('margin-bottom','0px');
    },
    touchmove:function(){//手指在屏幕上移动时触发
        var $obj = $('#ad');
        var t = window.event.touches[0].pageY;
        $obj.css('margin-bottom',- t + 300 + "px");
        if(parseInt($obj.css('margin-bottom'))<-190){/*触碰元素的距离也可以说是高度*/
            $obj.css('margin-bottom', "0px");
            window.location.href="dchangjing/index.html";//这里跳转
        }
    },
    touchend:function(){//手指离开屏幕上触发
        $('#ad').css('margin-bottom', "0px");
    }
});
/*下-火球*/
$('#ab').on({
    touchstart:function(){//手指刚接触屏幕时触发
        $('#ab').css('margin-top','0px');
    },
    touchmove:function(){//手指在屏幕上移动时触发
        var $obj = $('#ab');
        var t = window.event.touches[0].pageY;
        $obj.css('margin-top',+ t -780 + "px");
        if(parseInt($obj.css('margin-top'))<-190){/*触碰元素的距离也可以说是高度*/
            $obj.css('margin-top', "0px");
            window.location.href="http://www.sina.com.cn/";//这里跳转
        }
    },
    touchend:function(){//手指离开屏幕上触发
        $('#ab').css('margin-top', "0px");
    }
});
/*----------------------拖动碰撞火球和彗星球页面跳转-------------------------------------------------*/


//<!--点击我们弹出来的页面---------------------------------------------------------------------------->


//<!--点击我们弹出来的页面---------------------------------------------------------------------------->
$('#guanyu').on('touchstart', function(){
    $('#main1').show(0);
    $('#main1').css('z-index', '20');
    var aSwiperSlide = $('.swiper-slide');
    $('.swiper-wrapper').css({
        'width' : $(window).width()*aSwiperSlide.length + 'px',
        'height' : $(window).height() + 'px',
    });
    
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        //pagination : '#swiper-pagination1',
    })

})
$('.guanbi').on('touchstart', function(){
    $('#main1').hide();
    
})


});