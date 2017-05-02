/**
 * Created by Administrator on 2017/5/2.
 */


$(document).ready(function(){
    //原生方法----动态创建<script> JSONP script标签不受同源策略的限制。

    var scriptElement = document.createElement("script");
    scriptElement.language = "javascript";
    scriptElement.type = "text/javascript";

    // src:url(跨域地址)?参数列表n=值n&callback=callbackMethod
    scriptElement.src = "http://ts.ebdaowei.com/ebapi/show.do?cmd=queryEBUHomeData&callback=abc";//回调方法必须在HTML页面任意参数是后台返回数据
    document.head.appendChild(scriptElement);
    //console.log(document.body);//document.tagment只对html必须的标签有用

    //web sockets
    // web sockets原理：在JS创建了web socket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为web sockt协议。
    // 只有在支持web socket协议的服务器上才能正常工作。

    //判断浏览器是否支持webSocket
    if (window.WebSocket){
        console.log("This browser supports WebSocket!");
        var socket = new WebSocket("http://ts.ebdaowei.com/ebapi/show.do?cmd=queryEBUHomeData");//http->ws; https->wss
        //链接服务器进行前后台交互以及事件处理：

　　　　　socket.onopen = function(event) {

            //想要验证是否连接成功可以给后台发一个消息
            socket.send('我已经连接成功了么?');

            // 这个事件监听，可以监听后台返回来给你的消息，即str就是
            socket.onmessage = function(str) {
                console.log(str);
            };

            //jquery 中
            socket.onerror = function(str) {
                console.log(str);
            };
            // 监听Socket的关闭
            socket.onclose = function(str) {
                console.log(str);
            };

         // 关闭Socket.... （需要的时候把注释去掉）
         socket.close();//非必要
        };
    } else {
        console.log("This browser does not support WebSocket.");
    };




});
function k1(re){
    console.log("JSONP方法",re);
};