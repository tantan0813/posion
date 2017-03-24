'use strict';

/**
 * Created by Administrator on 2017/3/6.
 */
//cvte机测
// $("*").hover(function(e){
//     e.stopPropagation();
//     var now = this;
//     this.title = this.className;
// });


(function () {
    // window.addEventListener("load", function(){
    //     // 2.获取canvas duix
    //     var canvas = document.getElementById('pao');
    //     // 3.由canvas获取 绘图的上下文
    //     var ctx =canvas.getContext('2d');
    //
    //     // context.quadraticCurveTo(cpx,cpy,x,y)  二元抛物线
    //     // 参数
    //     // cpx 	贝塞尔控制点的 x 坐标
    //     // cpy 	贝塞尔控制点的 y 坐标
    //     // x 	结束点的 x 坐标
    //     // y 	结束点的 y 坐标
    //
    //     // context.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)  三元抛物线
    //     // 参数：
    //     // cp1x 第一个贝塞尔控制点的 x 坐标
    //     // cp1y 第一个贝塞尔控制点的 y 坐标
    //     // cp2x 第二个贝塞尔控制点的 x 坐标
    //     // cp2y 第二个贝塞尔控制点的 y 坐标
    //     ctx.beginPath();//路径开始
    //     ctx.moveTo(0,0);//开始点
    //     ctx.quadraticCurveTo(100,200,200,0);
    //     ctx.strokeStyle = "#0000ff";//线条颜色
    //     ctx.lineWidth =2;//指定线条宽度
    //     ctx.stroke();
    //     // setInterval(play,800);
    //     // play();
    //     var x=0,y=0;
    //     function play(){
    //         var moving = document.getElementById("toll");
    //         if(x<20&&y<200){
    //             x+=1;y=12*x-0.1*x*x;
    //             moving.style.top = 0.96*y-4+"px";
    //             moving.style.left = x*10-4+"px";
    //         }else{
    //             x=0;
    //             y=0;
    //         }
    //     }
    // },false);

    window.addEventListener("load", function () {
        // 2.获取canvas duix
        var canvas = document.getElementById('pao');
        // 3.由canvas获取 绘图的上下文
        var ctx = canvas.getContext('2d');

        paowu(ctx);
        function paowu(context) {
            context.strokeStyle = "#0000ff";
            context.lineWidth = 2;
            for (var i = 0; i < 240; i++) {
                context.lineTo(i, -i * i / 46 + 3.4 * i);
            }
            context.stroke();
        };
        setInterval(play, 800);
        var x = 0,
            y = 0;
        function play() {
            var moving = document.getElementById("toll");
            if (x < 240 && y < 200) {
                x += 1;y = -x * x / 46 + 3.4 * x;
                moving.style.top = y + "px";
                moving.style.left = x + "px";
            } else {
                x = 0;
                y = 0;
            }
        }
    });
})();