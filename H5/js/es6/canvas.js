/**
 * Created by Administrator on 2017/1/14.
 */
window.onload=function(){
    const  context = document.getElementById("canvas").getContext("2d");
    let paint = {
        //圆
        Circle(context, color,x, y, a, b,n,dir=4,str=false) {//x,y参照为圆心,context画布，color fill色，a x轴、b y轴，dir方向，str边框,n可以决定是？/4圆.
            let step = (a > b) ? 1 / a : 1 / b;
            context.lineWidth=2;
            context.fillStyle=color;
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
            if(str){ context.strokeStyle="black";context.stroke();}
        },
        //线
        Line(context,startx,starty,stopx,stopy,width,color){
            context.strokeStyle = color;
            context.lineWidth=width;
            context.beginPath();
            context.moveTo(startx,starty);
            context.lineTo(stopx,stopy);
            context.closePath();
            context.stroke();
        },
        //矩形
        Rect(context,x,y,width,height,color,str){
            context.fillStyle = color;
            context.beginPath();
            context.rect(x,y,width,height);
            context.closePath();
            context.fill();
            context.lineWidth=2;
            if(str){ context.strokeStyle="black";context.stroke();}
        }
    };
    paint.Circle(context,"red",10,10,20,20,2,4,"black");
}