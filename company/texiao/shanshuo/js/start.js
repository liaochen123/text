/**
 * Created by Administrator on 2015/3/26.
 */
var startObj=function(){
    this.x;
    this.y;
    this.timer;
}
startObj.prototype.init=function(){
    this.x=Math.random()*320;
    this.y=Math.random()*480;
    this.picNo=Math.floor(Math.random()*7);
    this.timer=0;
}
startObj.prototype.update=function(){
    this.timer+=deltaTime;
    if(this.timer>50){
        this.picNo += 1;
        this.picNo %= 7;
        this.timer=0;
    }
}
startObj.prototype.draw=function(){
    ctx.drawImage(startPic,this.picNo*7,0,7,7,this.x,this.y,7,7)
}
function drawStarts(){
    for(var i=0;i<num;i++){
        starts[i].update();
        starts[i].draw();
    }
}