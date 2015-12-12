/**
 * Created by Dell on 2015/11/25.
 */

window.onload = function(){
    mv.app.toTip();/*调用头部搜索框*/
    mv.app.toBanner();/*调用banner轮播*/
};

var mv = {};  //命名空间

mv.tools = {};
/*banner轮播鼠标移上去箭头出来的效果*/

mv.tools.getByClass = function(oParent,sClass){
    var aEle = oParent.getElementsByTagName('*');/*获取所有*/
    var arr = [];/*var arr = [];找到一个数组，存到一个数组当中返回*/

    for(var i=0;i<aEle.length;i++){/*for循环所有的元素*/
    if(aEle[i].className == sClass){
        arr.push(aEle[i]);

    }

    }

    return arr;/*return返回*/


};


/*banner轮播鼠标移上去箭头出来的效果*/

mv.ui = {};

mv.ui.textChange = function(obj,str){

    obj.onfocus = function(){/*onfocus得到焦点*/
        if(this.value == str){
            this.value = '';
        }
    };
    obj.onblur = function(){/*onblur元素失去焦点*/
        if(this.value == ''){
            this.value = str;
        }
    };

};

mv.ui.fadeIn = function(obj){  /*轮播图片淡入-方法*/

        var value = 0;
        clearInterval(obj.timer);/*清理防止加速*/
        obj.timer = setInterval(function(){
            var iSpeed = 5; /*速度递增*/
            if(value == 100){/*如果当value从一个透明的到一个不透明的*/
                clearInterval(obj.timer);/*让这个定时器停下来*/
            }
            else{
                    value += iSpeed;/*让value进行磊加*/
                    obj.style.opacity = value/100;/*赋给这个透明度0-100*/
                    obj.style.filter = 'alpha(opacity='+value+')';/*样式兼容*/
            }

        },30);/*定时器*/
};

mv.ui.fadeOut = function(obj){/*轮播图片淡出-方法*/

    var value = 100;
    clearInterval(obj.timer);/*清理防止加速*/
    obj.timer = setInterval(function(){
        var iSpeed = -5; /*速度递增*/
        if(value == 0){/*如果当value从一个透明的到一个不透明的*/
            clearInterval(obj.timer);/*让这个定时器停下来*/
        }
        else{
            value += iSpeed;/*让value进行磊加*/
            obj.style.opacity = value/100;/*赋给这个透明度0-100*/
            obj.style.filter = 'alpha(opacity='+value+')';/*样式兼容*/
        }

    },30);/*定时器*/


};

mv.app = {};

mv.app.toTip = function(){/*头部搜索框*/
    var t1 = document.getElementById("text1");
    var t2 = document.getElementById("text2");

    mv.ui.textChange(t1,'Search website');
    mv.ui.textChange(t2,'Search website');
};/*头部搜索框*/


/*banner轮播*/
mv.app.toBanner = function(){
      var oDd = document.getElementById('ad');
      var aLi = oDd.getElementsByTagName('li');

      var oPrevBg = mv.tools.getByClass(oDd,'prev_bg')[0];/*获取箭头左*/
      var oNextBg = mv.tools.getByClass(oDd,'next_bg')[0];/*获取箭头右*/

      var oPrev = mv.tools.getByClass(oDd,'prev')[0];
      var oNext = mv.tools.getByClass(oDd,'next')[0];

    var iNow = 0;

    var timer = setInterval(auto,3000);/*3秒钟执行一次*/

    function auto(){

            if(iNow == aLi.length-1){
                iNow = 0;

            }
            else{
                iNow++;
            }

        /*循环，让所有的li都淡出*/
        for(var i=0;i<aLi.length;i++){

            mv.ui.fadeOut(aLi[i]);

        }

            mv.ui.fadeIn(aLi[iNow]);

    }

    /*-------------------------------------------*/
    function autoPrev(){/*应用到左右箭头的点击事件oPrev. onclick = function(){}*/

        if(iNow == 0){
            iNow = aLi.length-1;

        }
        else{
            iNow--;
        }

        /*循环，让所有的li都淡出*/
        for(var i=0;i<aLi.length;i++){

            mv.ui.fadeOut(aLi[i]);

        }

        mv.ui.fadeIn(aLi[iNow]);

    }

     oPrevBg.onmouseover = oPrev.onmouseover = function(){/*鼠标移入左侧箭头出现*/
/*oPrev.onmouseover = 解决箭头出来的时候抖动*/
         oPrev.style.display = 'block';
         clearInterval(timer);/*清除一下以免自动播放了*/

     };
     oNextBg.onmouseover = oNext.onmouseover =  function(){/*鼠标移入右侧箭头出现*/
/*oNext.onmouseover = 解决箭头出来的时候抖动*/
         oNext.style.display = 'block';
         clearInterval(timer);/*清除一下以免自动播放了*/
    };

    oPrevBg.onmouseout = oPrev.onmouseout = function(){/*鼠标移出左侧箭头隐藏*/
/*oPrev.onmouseout = 解决箭头出来的时候抖动*/
        oPrev.style.display = 'none';
        timer = setInterval(auto,3000);/*3秒钟执行一次移开的时候自动播放*/

    };
    oNextBg.onmouseout = oNext.onmouseout = function(){/*鼠标移出右侧箭头隐藏*/
/*oNext.onmouseout = 解决箭头出来的时候抖动*/
        oNext.style.display = 'none';
        timer = setInterval(auto,3000);/*3秒钟执行一次移开的时候自动播放*/


    };

    /*左右箭头的点击事件*/
    oPrev. onclick = function(){
        autoPrev();
    };

    oNext. onclick = function(){
        auto();
    };

};
/*banner轮播*/







