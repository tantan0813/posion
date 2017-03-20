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
        window.addEventListener("load", function () {
                // 2.获取canvas duix
                var canvas = document.getElementById('pao');
                // 3.由canvas获取 绘图的上下文
                var ctx = canvas.getContext('2d');

                // context.quadraticCurveTo(cpx,cpy,x,y)  二元抛物线
                // 参数
                // cpx 	贝塞尔控制点的 x 坐标
                // cpy 	贝塞尔控制点的 y 坐标
                // x 	结束点的 x 坐标
                // y 	结束点的 y 坐标

                // context.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)  三元抛物线
                // 参数：
                // cp1x 第一个贝塞尔控制点的 x 坐标
                // cp1y 第一个贝塞尔控制点的 y 坐标
                // cp2x 第二个贝塞尔控制点的 x 坐标
                // cp2y 第二个贝塞尔控制点的 y 坐标
                ctx.beginPath(); //路径开始
                ctx.moveTo(20, 20); //开始点
                ctx.quadraticCurveTo(140, 240, 280, 20);
                ctx.strokeStyle = "#0000ff"; //线条颜色
                ctx.lineWidth = 2; //指定线条宽度
                ctx.stroke();
                var moving = document.getElementById("toll");
                for (var i = 0; i < length; i++) {}
        }, false);
})();