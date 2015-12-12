/**
 * iSlider 
 * A simple, efficent mobile slider
 * @Author qbatyqi
 *
 * @param {Object}      opts                参数集
 * @param {Element}     opts.dom            外层元素        Outer wrapper
 * @param {Object}      opts.data           数据列表        Content data
 * Please refer to README                   请参考README
 * @class 
 */
var iSlider = function (opts) {
    if (!opts.dom) {
        throw new Error("dom element can not be empty!");
    }

    if (!opts.data || !opts.data.length) {
        throw new Error("data must be an array and must have more than one element!");
    }

    this._opts = opts;
    this._setting();
    this._renderHTML();
    this._bindHandler();
};
/*------------------------------------------------------------------------------------------------------------------*/
/*滑动的时候切换一个页面*/
var xx,yy,XX,YY,swipeX,swipeY ;
document.addEventListener('touchstart',function(event){
    xx = event.targetTouches[0].screenX ;
    yy = event.targetTouches[0].screenY ;

});
document.addEventListener('touchmove',function(event){
    XX = event.targetTouches[0].screenX ;
    YY = event.targetTouches[0].screenY ;
    if((YY-yy)<0&& (Math.abs(XX-xx)<Math.abs(YY-yy)))
    {
        /*跳转的地址-通过服务器地址传送*/
        window.location.href="../../jiuGongGe.html";/*相对地址*/
    }
});
/*滑动的时候切换一个页面*/

/*------------------------------------------------------------------------------------------------------------------*/











//滑块设置参数
iSlider.prototype._setting = function () {
    var opts = this._opts;

    //DOM元素包装的照片
    this.wrap = opts.dom;

    //图片数据
    this.data = opts.data;
    
    //默认类型
    this.type = opts.type || 'pic';
    //默认的滑动方向
    this.isVertical = opts.isVertical || false;

    //当你的手指移动的回调函数
    this.onslide = opts.onslide;
    //回调函数，当你的手指触摸屏幕
    this.onslidestart = opts.onslidestart;
    //回调函数，当手指离开屏幕
    this.onslideend = opts.onslideend;
    //回调函数，当手指离开屏幕
    this.onslidechange = opts.onslidechange;
    //滑动的时间间隔
    this.duration = opts.duration || 2000;

    //调试模式
    this.log = opts.isDebug ? function (str) { console.log(str) } : function (){};

    this.axis = this.isVertical ? 'Y' : 'X';
    this.width = this.wrap.clientWidth;
    this.height = this.wrap.clientHeight;
    this.ratio = this.height / this.width;
    this.scale = opts.isVertical ? this.height : this.width;

    //从0开始
    this.sliderIndex = this.sliderIndex || 0;

    if (this.data.length < 2) {
        this.isLooping = false;
        this.isAutoPlay = false;
    } else {
        this.isLooping = opts.isLooping || false;
        this.isAutoplay = opts.isAutoplay || false;
    }

    //自动播放模式
    if (this.isAutoplay) {
        this.play();
    }

    //设置阻尼功能
    this._setUpDamping();

    //设置动画功能
    this._animateFunc = (opts.animateType in this._animateFuncs) 
    ? this._animateFuncs[opts.animateType] 
    : this._animateFuncs['default'];

    //停止播放时，窗口模糊
    this._setPlayWhenFocus();
};

//Android设备固定的错误
iSlider.prototype._setPlayWhenFocus = function() {
    var self = this;
    window.addEventListener('focus', function() {
        self.isAutoplay && self.play();
    }, false);
    window.addEventListener('blur', function() {
        self.pause();
    }, false);
}

//动画功能选项
/**
 * animation parmas: 
 *
 * @param {Element}      dom             图片的外层<li>容器       Img wrapper
 * @param {String}       axis            动画方向                animate direction
 * @param {Number}       scale           容器宽度                Outer wrapper
 * @param {Number}       i               <li>容器index           Img wrapper's index
 * @param {Number}       offset          滑动距离                move distance
 */
iSlider.prototype._animateFuncs = {

    'default': function (dom, axis, scale, i, offset) {
        dom.style.webkitTransform = 'translateZ(0) translate' + axis + '(' + (offset + scale * (i - 1)) + 'px)';
    },

    'rotate': function (dom, axis, scale, i, offset) {
        var rotateDirect = (axis == "X") ? "Y" : "X";
        var absoluteOffset = Math.abs(offset);
        var bdColor = window.getComputedStyle(this.wrap.parentNode, null).backgroundColor;
        if (this.isVertical){ offset = -offset; }

        this.wrap.style.webkitPerspective = scale * 4;

        if (i == 1) {
            dom.style.zIndex = scale - absoluteOffset;
        } else {
            dom.style.zIndex = (offset > 0) ? (1 - i) * absoluteOffset : (i - 1) * absoluteOffset;
        }
        
        dom.style.backgroundColor = bdColor || '#333';
        dom.style.position = 'absolute';
        dom.style.webkitBackfaceVisibility = 'hidden';
        dom.style.webkitTransformStyle = 'preserve-3d'; 
        dom.style.webkitTransform = 'rotate' + rotateDirect + '(' + 90 * (offset/scale + i - 1)+ 'deg) translateZ(' + (0.888 * scale/2) + 'px) scale(0.888)';
    },

    'flip': function (dom, axis, scale, i, offset) {
        var rotateDirect = (axis == "X") ? "Y" : "X";
        var bdColor = window.getComputedStyle(this.wrap.parentNode, null).backgroundColor;
        if (this.isVertical){ offset = -offset; }

        this.wrap.style.webkitPerspective = scale * 4;

        if (offset > 0) {
            dom.style.visibility = (i > 1) ? 'hidden' : 'visible';
        } else {
            dom.style.visibility = (i < 1) ? 'hidden' : 'visible';
        }

        dom.style.backgroundColor = bdColor || '#333';
        dom.style.position = 'absolute';
        dom.style.webkitBackfaceVisibility = 'hidden';
        dom.style.webkitTransform = 'translateZ('+ (scale/2) +'px) rotate' + rotateDirect + '(' + 180 * (offset/scale + i - 1)+ 'deg) scale(0.875)';
    },

    'depth': function (dom, axis, scale, i, offset) {
        var rotateDirect = (axis == "X") ? "Y" : "X";
        var zoomScale = (4 - Math.abs(i - 1)) * 0.15;

        this.wrap.style.webkitPerspective = scale * 4;

        if (i == 1) {
            dom.style.zIndex = 100;
        } else {
            dom.style.zIndex = (offset > 0) ? (1 - i) : (i - 1);
        }

        dom.style.webkitTransform = 'scale('+ zoomScale + ', '+ zoomScale + ') translateZ(0) translate' + axis + '(' + (offset + 1.3 * scale * (i - 1)) + 'px)';
    },

    'tear': function (dom, axis, scale, i, offset) {
        var rotateDirect = (axis == "X") ? "Y" : "X";
        var zoomScale = 1 - (Math.abs(i - 1) * 0.2);

        this.wrap.style.webkitPerspective = scale * 4;

        if (i == 1) {
            dom.style.zIndex = 100;
        } else {
            dom.style.zIndex = (offset > 0) ? (1 - i) : (i - 1);
        }

        dom.style.webkitTransform = 'scale('+ zoomScale + ', '+ zoomScale + ') translateZ(0) translate' + axis + '(' + (offset + scale * (i - 1)) + 'px)';
    }
}

//使阻尼时，滑块满足边缘
iSlider.prototype._setUpDamping = function () {
    var oneIn2 = this.scale >> 1;
    var oneIn4 = oneIn2 >> 1;
    var oneIn16 = oneIn4 >> 2;

    this._damping = function (distance) {
        var dis = Math.abs(distance);
        var result;

        if (dis < oneIn2) {
            result = dis >> 1;
        } else if (dis < oneIn2 + oneIn4) {
            result = oneIn4 + ((dis - oneIn2) >> 2);
        } else {
            result = oneIn4 + oneIn16 + ((dis - oneIn2 - oneIn4) >> 3);
        }

        return distance > 0 ? result : -result;
    };
};

//用IDX渲染单个项目的HTML
iSlider.prototype._renderItem = function (i) {
    var item, html;
    var len = this.data.length;

    if (!this.isLooping) {
        item = this.data[i] || { empty : true };
    } else {
        if (i < 0) {
            item = this.data[len + i];
        } else if (i > len - 1) {
            item = this.data[i - len];
        } else {
            item = this.data[i];
        }
    }

    if (item.empty) {
        return '';
    }

    if (this.type === 'pic') {
        html = item.height / item.width > this.ratio 
        ? '<img height="' + this.height + '" src="' + item.content + '">'
        : '<img width="' + this.width + '" src="' + item.content + '">';
    } else if (this.type === 'dom') {
        html = '<div style="height:' + item.height + ';width:' + item.width + ';">' + item.content + '</div>';
    } else if (this.type === 'overspread') {
        html = this.ratio < 1 
        ? '<div style="height: 100%; width:100%; background:url(' + item.content + ') center no-repeat; background-size:' + this.width + 'px auto;"></div>'
        : '<div style="height: 100%; width:100%; background:url(' + item.content + ') center no-repeat; background-size: auto ' + this.height + 'px;"></div>';
    }

    return html;
};

//HTML渲染列表
iSlider.prototype._renderHTML = function () {
    var outer;

    if (this.outer) {
        //用于重置
        this.outer.innerHTML = '';
        outer = this.outer;
    } else {
        //用于初始化
        outer = document.createElement('ul');
    }

    //UL宽度等于div #画布的宽度
    outer.style.width = this.width + 'px';
    outer.style.height = this.height + 'px';

    //储存锂元素，只存储3个元素来减少内存使用
    this.els = [];
    for (var i = 0; i < 3; i++) {
        var li = document.createElement('li');
        li.style.width = this.width + 'px';
        li.style.height = this.height + 'px';

        //准备风格的动画
        this._animateFunc(li, this.axis, this.scale, i, 0);

        this.els.push(li);
        outer.appendChild(li);

        if (this.isVertical && (this._opts.animateType == 'rotate' || this._opts.animateType == 'flip')) {
            li.innerHTML = this._renderItem(1 - i + this.sliderIndex);
        } else {
            li.innerHTML = this._renderItem(i - 1 + this.sliderIndex);
        }
    }

    //附加UL div #画布
    if (!this.outer) {
        this.outer = outer;
        this.wrap.appendChild(outer);
    }
};

//逻辑控制滑块，左或右
iSlider.prototype._slide = function (n) {
    var data = this.data;
    var els = this.els;
    var idx = this.sliderIndex + n;

    if (data[idx]){
        this.sliderIndex = idx;
    } else {
        if (this.isLooping) {
            this.sliderIndex = n > 0 ? 0 : data.length - 1;    
        } else {
            n = 0;
        }
    }

    this.log('pic idx:' + this.sliderIndex);

    var sEle;
    if ( this.isVertical && (this._opts.animateType == 'rotate' || this._opts.animateType == 'flip')) {
        if (n > 0) {
            sEle = els.pop();
            els.unshift(sEle);
        } else if (n < 0) {
            sEle = els.shift();
            els.push(sEle);
        }
    } else {
        if (n > 0) {
            sEle = els.shift();
            els.push(sEle);
        } else if (n < 0) {
            sEle = els.pop();
            els.unshift(sEle);
        }
    }

    if (n !== 0) {
        sEle.innerHTML = this._renderItem(idx + n);
        sEle.style.webkitTransition = 'none';
        sEle.style.visibility = 'hidden';

        setTimeout(function() {
            sEle.style.visibility = 'visible';
        }, 200);

        this.onslidechange && this.onslidechange(this.sliderIndex);
    }

    for (var i = 0; i < 3; i++) {
        if (els[i] !== sEle) {
            els[i].style.webkitTransition = 'all .3s ease';
        }
        this._animateFunc(els[i], this.axis, this.scale, i, 0);
    }

    if (this.isAutoplay) {
        if (this.sliderIndex === data.length - 1 && !this.isLooping) {
            this.pause();
        }
    }
};

//将所有事件处理程序
iSlider.prototype._bindHandler = function () {
    var self = this;
    var scaleW = self.scaleW;
    var outer = self.outer;
    var len = self.data.length;

    var startHandler = function (evt) {
        self.pause();
        self.onslidestart && self.onslidestart();
        self.log('Event: beforeslide');

        self.startTime = new Date().getTime();
        self.startX = evt.targetTouches[0].pageX;
        self.startY = evt.targetTouches[0].pageY;

        var target = evt.target;
        while (target.nodeName != 'LI' && target.nodeName != 'BODY') {
            target = target.parentNode;
        }
        self.target = target;
    };

    var moveHandler = function (evt) {
        evt.preventDefault();
        self.onslide && self.onslide();
        self.log('Event: onslide');

        var axis = self.axis;
        var offset = evt.targetTouches[0]['page' + axis] - self['start' + axis];

        if (!self.isLooping) {
            if (offset > 0 && self.sliderIndex === 0 || offset < 0 && self.sliderIndex === self.data.length - 1) {
                offset = self._damping(offset);
            }
        }

        for (var i = 0; i < 3; i++) {
            var item = self.els[i];
            item.style.webkitTransition = 'all 0s';
            self._animateFunc(item, axis, self.scale, i, offset);
        }

        self.offset = offset;
    };

    var endHandler = function (evt) {
        evt.preventDefault();

        var boundary = self.scale / 2;
        var metric = self.offset;
        var endTime = new Date().getTime();

        //快速滑动时间必须在300ms
        //一个快速下滑也滑至少14像素
        boundary = endTime - self.startTime > 300 ? boundary : 14;

        if (metric >= boundary) {
            self._slide(-1);
        } else if (metric < -boundary) {
            self._slide(1);
        } else {
            self._slide(0);
        }

        self.isAutoplay && self.play();
        self.offset = 0;
        self.onslideend && self.onslideend();
        self.log('Event: afterslide');
    };

    var orientationchangeHandler = function (evt) {
        setTimeout(function() {
            self.reset();
            self.log('Event: orientationchange');
        },100);
    };

    outer.addEventListener('touchstart', startHandler);
    outer.addEventListener('touchmove', moveHandler);
    outer.addEventListener('touchend', endHandler);
    window.addEventListener('orientationchange', orientationchangeHandler);
};

iSlider.prototype.reset = function () {
    this.pause();
    this._setting();
    this._renderHTML();
    this.isAutoplay && this.play();
};

//启用自动播放
iSlider.prototype.play = function () {
    var self = this;
    var duration = this.duration;
    clearInterval(this.autoPlayTimer);
    this.autoPlayTimer = setInterval(function () {
        self._slide(1);
    }, duration);
};

//暂停播放
iSlider.prototype.pause = function () {
    clearInterval(this.autoPlayTimer);
};

//插件扩展
iSlider.prototype.extend = function(plugin){
    var fn = iSlider.prototype;
    Object.keys(plugin).forEach(function(property) {
        Object.defineProperty(fn, property, Object.getOwnPropertyDescriptor( plugin, property ) );
    })
}