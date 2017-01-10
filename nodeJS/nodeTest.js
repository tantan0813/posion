/**
 * Created by Administrator on 2017/1/10.
 */

//http://127.0.0.1:3000
var http = require("http");//引入required模块
http.createServer(function(req, res) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain,text/html....
    res.writeHead( 200 , {"Content-Type":"text/html"});
    // 发送响应数据 "Hello World"
    res.write("<h1>Node.js</h1>");
    res.write("<p>Hello World</p>");
    res.end("<p>你个大傻逼！</p>");
}).listen(3000);//绑定端口号：3000
//命令行打印
console.log("HTTP server is listening at port 3000.");

var fs = require("fs");
//node.js事件回调
var data = fs.readFileSync('input.txt');//阻塞代码，会先执行input.txt,在执行js代码
console.log(data.toString());
console.log("程序执行结束!");
fs.readFile('input.txt', function (err, data) {//非阻塞代码，先执行全部js代码，再执行input.txt
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");

//事件循环
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});
// 触发 connection 事件
eventEmitter.emit('connection');
console.log("程序执行完毕。");






















































































































