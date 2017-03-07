var line = require("readline");
var rl = line.createInterface({input:process.stdin,output:process.stdout})
var data = [];
rl.on("line",function(a){

    // n个随机数生成

    // function fun1(n){
    //     if(/^[0-9]+$/.test(n)){
    //         var num = parseInt(n);
    //         var result = [];
    //         if(num>2&&num<32){
    //             for(var i=0;i<num;i++){
    //                 var a = get(2,32);
    //                 if(result.indexOf(a)==-1){
    //                     result.push(a)
    //                 }else{
    //                     i--;
    //                 }
    //             }
    //         }else{
    //             console.log("请输入正确范围内的数字");
    //             return false;
    //         }
    //     }else{
    //         console.log("请输入数字");
    //         return false;
    //     }
    //     function get(start,end){
    //         return Math.floor(Math.random()*(end-start))+start;
    //     }
    //     return result;
    // }

    //驼峰命名

    // function fun2(str){
    //     var result =[],index=[];
    //     if(/^[a-z]+$/ig.test(str)){
    //         var arr = str.split("");
    //         arr.forEach(function(a,c){
    //             if(/[A-Z]/.test(a)){
    //                 var d = a.toLowerCase();
    //                 result.push(d);
    //                 index.push(c);
    //             }else{
    //                 result.push(a);
    //             }
    //         })
    //         console.log(result)
    //         index.forEach(function(e,f){
    //             result.splice(e+f,0,"-");
    //         })
    //         return result.toString().replace(/,/g,"").slice(1);
    //     }else{
    //         return false;
    //     }
    // }

    //数据分类处理
    function fun3(str){

    }
})