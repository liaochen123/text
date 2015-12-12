/**
 * Created by Dell on 2015/11/25.
 */

window.onload = function(){
    mv.app.toTip();/*����ͷ��������*/
    mv.app.toBanner();/*����banner�ֲ�*/
};

var mv = {};  //�����ռ�

mv.tools = {};
/*banner�ֲ��������ȥ��ͷ������Ч��*/

mv.tools.getByClass = function(oParent,sClass){
    var aEle = oParent.getElementsByTagName('*');/*��ȡ����*/
    var arr = [];/*var arr = [];�ҵ�һ�����飬�浽һ�����鵱�з���*/

    for(var i=0;i<aEle.length;i++){/*forѭ�����е�Ԫ��*/
    if(aEle[i].className == sClass){
        arr.push(aEle[i]);

    }

    }

    return arr;/*return����*/


};


/*banner�ֲ��������ȥ��ͷ������Ч��*/

mv.ui = {};

mv.ui.textChange = function(obj,str){

    obj.onfocus = function(){/*onfocus�õ�����*/
        if(this.value == str){
            this.value = '';
        }
    };
    obj.onblur = function(){/*onblurԪ��ʧȥ����*/
        if(this.value == ''){
            this.value = str;
        }
    };

};

mv.ui.fadeIn = function(obj){  /*�ֲ�ͼƬ����-����*/

        var value = 0;
        clearInterval(obj.timer);/*�����ֹ����*/
        obj.timer = setInterval(function(){
            var iSpeed = 5; /*�ٶȵ���*/
            if(value == 100){/*�����value��һ��͸���ĵ�һ����͸����*/
                clearInterval(obj.timer);/*�������ʱ��ͣ����*/
            }
            else{
                    value += iSpeed;/*��value�����ڼ�*/
                    obj.style.opacity = value/100;/*�������͸����0-100*/
                    obj.style.filter = 'alpha(opacity='+value+')';/*��ʽ����*/
            }

        },30);/*��ʱ��*/
};

mv.ui.fadeOut = function(obj){/*�ֲ�ͼƬ����-����*/

    var value = 100;
    clearInterval(obj.timer);/*�����ֹ����*/
    obj.timer = setInterval(function(){
        var iSpeed = -5; /*�ٶȵ���*/
        if(value == 0){/*�����value��һ��͸���ĵ�һ����͸����*/
            clearInterval(obj.timer);/*�������ʱ��ͣ����*/
        }
        else{
            value += iSpeed;/*��value�����ڼ�*/
            obj.style.opacity = value/100;/*�������͸����0-100*/
            obj.style.filter = 'alpha(opacity='+value+')';/*��ʽ����*/
        }

    },30);/*��ʱ��*/


};

mv.app = {};

mv.app.toTip = function(){/*ͷ��������*/
    var t1 = document.getElementById("text1");
    var t2 = document.getElementById("text2");

    mv.ui.textChange(t1,'Search website');
    mv.ui.textChange(t2,'Search website');
};/*ͷ��������*/


/*banner�ֲ�*/
mv.app.toBanner = function(){
      var oDd = document.getElementById('ad');
      var aLi = oDd.getElementsByTagName('li');

      var oPrevBg = mv.tools.getByClass(oDd,'prev_bg')[0];/*��ȡ��ͷ��*/
      var oNextBg = mv.tools.getByClass(oDd,'next_bg')[0];/*��ȡ��ͷ��*/

      var oPrev = mv.tools.getByClass(oDd,'prev')[0];
      var oNext = mv.tools.getByClass(oDd,'next')[0];

    var iNow = 0;

    var timer = setInterval(auto,3000);/*3����ִ��һ��*/

    function auto(){

            if(iNow == aLi.length-1){
                iNow = 0;

            }
            else{
                iNow++;
            }

        /*ѭ���������е�li������*/
        for(var i=0;i<aLi.length;i++){

            mv.ui.fadeOut(aLi[i]);

        }

            mv.ui.fadeIn(aLi[iNow]);

    }

    /*-------------------------------------------*/
    function autoPrev(){/*Ӧ�õ����Ҽ�ͷ�ĵ���¼�oPrev. onclick = function(){}*/

        if(iNow == 0){
            iNow = aLi.length-1;

        }
        else{
            iNow--;
        }

        /*ѭ���������е�li������*/
        for(var i=0;i<aLi.length;i++){

            mv.ui.fadeOut(aLi[i]);

        }

        mv.ui.fadeIn(aLi[iNow]);

    }

     oPrevBg.onmouseover = oPrev.onmouseover = function(){/*�����������ͷ����*/
/*oPrev.onmouseover = �����ͷ������ʱ�򶶶�*/
         oPrev.style.display = 'block';
         clearInterval(timer);/*���һ�������Զ�������*/

     };
     oNextBg.onmouseover = oNext.onmouseover =  function(){/*��������Ҳ��ͷ����*/
/*oNext.onmouseover = �����ͷ������ʱ�򶶶�*/
         oNext.style.display = 'block';
         clearInterval(timer);/*���һ�������Զ�������*/
    };

    oPrevBg.onmouseout = oPrev.onmouseout = function(){/*����Ƴ�����ͷ����*/
/*oPrev.onmouseout = �����ͷ������ʱ�򶶶�*/
        oPrev.style.display = 'none';
        timer = setInterval(auto,3000);/*3����ִ��һ���ƿ���ʱ���Զ�����*/

    };
    oNextBg.onmouseout = oNext.onmouseout = function(){/*����Ƴ��Ҳ��ͷ����*/
/*oNext.onmouseout = �����ͷ������ʱ�򶶶�*/
        oNext.style.display = 'none';
        timer = setInterval(auto,3000);/*3����ִ��һ���ƿ���ʱ���Զ�����*/


    };

    /*���Ҽ�ͷ�ĵ���¼�*/
    oPrev. onclick = function(){
        autoPrev();
    };

    oNext. onclick = function(){
        auto();
    };

};
/*banner�ֲ�*/







