/**
 * Created by Administrator on 2015/3/26.
 */
var can;
var ctx;
var girlPic = new Image();
var startPic = new Image();
var num =100;
var starts = [];
var lastTime;
var deltaTime;
function init(){
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    w=can.width;
    h=can.height;
    girlPic.src="images/starbreak.png";
    startPic.src="images/star.png";
    for(var i=0;i<num;i++){
        var obj = new startObj();
        starts.push(obj);
        starts[i].init();
    }
    lastTime = Date.now();
    gameloop();
}
document.body.onload =init;
function gameloop(){
    window.requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    drawBackground();
    drawGirl();
    drawStarts();
}
function drawBackground(){
    ctx.fillStyle="rgba(255,255,255,0)";
    ctx.fillRect(0,0,w,h);
}
function drawGirl(){
    ctx.drawImage(girlPic,0,0,w,h)
}