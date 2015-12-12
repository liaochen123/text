/**
 * Created by Administrator on 2015/5/6.
 */
/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-12-12
 * Time: 下午6:10
 * 图片的预加载
 * To change this template use File | Settings | File Templates.
 */
/**************
 * 预加载
 **************/
function _PreLoadImg(b, e) {
    var c = 0,
        a = {},
        d = 0;
    for (src in b) {
        d++;
    }
    for (src in b) {
        a[src] = new Image();
        a[src].onload = function() {
            if (++c >= d) {
                e(a)
            }
        };
        a[src].src = b[src];
    }
}

_PreLoadImg(['images/2_01(2).jpg','images/2_01.jpg','images/2_1.jpg','images/2_02(2).jpg','images/2_02.jpg','images/3.jpg','images/3-1.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/bg.jpg','images/dell.jpg','images/erweima.png','images/hezi1.png','images/jiu1.jpg','images/jiu2.jpg','images/jiu3.jpg','images/jiu4.jpg','images/jiu5.jpg','images/jiu6.jpg','images/jiu7.jpg','images/jiu8.jpg','images/jiu9.jpg','images/mohubg.jpg'],function(){
    setTimeout(function(){
        var main = document.getElementsByTagName('body')[0],
            loader = document.getElementById('loading'),
            container = document.getElementById('page');

        main.removeChild(loader);
        container.style.display = 'block';
    },0);
});
