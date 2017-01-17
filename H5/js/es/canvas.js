"use strict";

/**
 * Created by Administrator on 2017/1/14.
 */
window.onload = function () {
    var context = document.getElementById("canvas2d").getContext("2d");
    var paint = {
        //圆(半圆，椭圆)
        Circle: function Circle(context, fillcolor, bordercolor, x, y, a, b, n) {
            var dir = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 4;
            var lineWidth = arguments[9];
            var str = arguments[10];
            //x,y参照为圆心,context画布，color fill色，a x轴、b y轴，dir方向，str边框,n可以决定是？/4圆.
            var step = a > b ? 1 / a : 1 / b;
            context.lineWidth = lineWidth;
            context.fillStyle = fillcolor;
            context.beginPath();
            if (n <= 1) {
                context.moveTo(x, y);
            } else {
                context.moveTo(x + a, y);
            }
            switch (dir) {
                case 1:
                    for (var i = 0; i < n * Math.PI; i += step) {
                        context.lineTo(x + a * Math.cos(i), y - b * Math.sin(i));
                    }
                    break;
                case 2:
                    for (var _i = 0; _i < n * Math.PI; _i += step) {
                        context.lineTo(x - a * Math.cos(_i), y - b * Math.sin(_i));
                    }
                    break;
                case 3:
                    for (var _i2 = 0; _i2 < n * Math.PI; _i2 += step) {
                        context.lineTo(x - a * Math.cos(_i2), y + b * Math.sin(_i2));
                    }
                    break;
                case 4:
                    for (var _i3 = 0; _i3 < n * Math.PI; _i3 += step) {
                        context.lineTo(x + a * Math.cos(_i3), y + b * Math.sin(_i3));
                    }
                    break;
                default:
                    alert("请传入正确的参数！");
            }
            context.closePath();
            context.fill();
            if (str) {
                context.strokeStyle = bordercolor;context.stroke();
            }
        },

        //线
        Line: function Line(context, startx, starty, stopx, stopy, linewidth, color) {
            context.strokeStyle = color;
            context.lineWidth = linewidth;
            context.beginPath();
            context.moveTo(startx, starty);
            context.lineTo(stopx, stopy);
            context.closePath();
            context.stroke();
        },

        //矩形
        Rect: function Rect(context, x, y, width, height, color, str, bordercolr, borderwidth) {
            context.fillStyle = color;
            context.beginPath();
            context.rect(x, y, width, height);
            context.closePath();
            context.fill();
            context.lineWidth = borderwidth;
            if (str) {
                context.strokeStyle = bordercolr;context.stroke();
            }
        }
    };
    paint.Circle(context, "red", "black", 40, 24, 24, 20, 2, 4, false);
    paint.Line(context, 49, 60, 40, 80, 1, "black");
    paint.Line(context, 39, 80, 60, 80, 1, "black");
    paint.Line(context, 59, 80, 50, 60, 1, "black");
    paint.Rect(context, 80, 80, 40, 40, "black", false, "red", 1);
};