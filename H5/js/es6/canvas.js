/**
 * Created by Administrator on 2017/1/14.
 */
window.onload=function(){
    const  context = document.getElementById("canvas2d").getContext("2d");
    let paint = {
        //圆(半圆，椭圆)
        Circle(context, fillcolor,bordercolor,x, y, a, b,n,dir=4,lineWidth,str) {//x,y参照为圆心,context画布，color fill色，a x轴、b y轴，dir方向，str边框,n可以决定是？/4圆.
            let step = (a > b) ? 1 / a : 1 / b;
            context.lineWidth=lineWidth;
            context.fillStyle=fillcolor;
            context.beginPath();
            if(n<=1){
                context.moveTo(x, y);
            }else{
                context.moveTo(x + a, y);
            }
            switch(dir){
                case 1: for(let i = 0; i <n*Math.PI; i += step) {
                    context.lineTo(x+a * Math.cos(i), y-b * Math.sin(i));}
                    break;
                case 2:for(let i = 0; i <n*Math.PI; i += step) {
                    context.lineTo(x-a * Math.cos(i), y-b * Math.sin(i));}
                    break;
                case 3: for(let i = 0; i <n*Math.PI; i += step) {
                    context.lineTo(x-a * Math.cos(i), y+b * Math.sin(i));}
                    break;
                case 4: for(let i = 0; i <n*Math.PI; i += step) {
                    context.lineTo(x+a * Math.cos(i), y+b * Math.sin(i));}
                    break;
                default:alert("请传入正确的参数！");
            }
            context.closePath();
            context.fill();
            if(str){ context.strokeStyle=bordercolor;context.stroke();}
        },
        //线
        Line(context,startx,starty,stopx,stopy,linewidth,color){
            context.strokeStyle = color;
            context.lineWidth=linewidth;
            context.beginPath();
            context.moveTo(startx,starty);
            context.lineTo(stopx,stopy);
            context.closePath();
            context.stroke();
        },
        //矩形
        Rect(context,x,y,width,height,color,str,bordercolr,borderwidth){
            context.fillStyle = color;
            context.beginPath();
            context.rect(x,y,width,height);
            context.closePath();
            context.fill();
            context.lineWidth=borderwidth;
            if(str){ context.strokeStyle=bordercolr;context.stroke();}
        }
    };
    paint.Circle(context,"red","black",40,24,24,20,2,4,false);
    paint.Line(context,49,60,40,80,1,"black");
    paint.Line(context,39,80,60,80,1,"black");
    paint.Line(context,59,80,50,60,1,"black");
    paint.Rect(context,80,80,40,40,"black",false,"red",1);
}