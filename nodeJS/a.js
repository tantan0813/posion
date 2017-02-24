// 多行输入data存储数据
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
var data = [];

    // rl.on('line',function(ans){
    //         data.push(ans);
    //     console.log(data);
    //         // var n = data[0]-0;
    //         // console.log(n);
    //         var filterarr = [];
    //         var arr = [];
    //             // if(data.length>1){
    //             //     console.log(data);
    //             //     // arr = data.slice(1);
    //             //     // for(var k = 0;k<arr.length;k++){
    //             //     //     var ele = arr[k];
    //             //     //         if(filterarr.indexOf(ele)==-1){
    //             //     //             filterarr.push(ele);
    //             //     //         }
    //             //     // }
    //             //     // console.log(data);
    //             //     // filterarr.sort(function(a,b){return a-b}).map(function(i){console.log(i)});
    //             //     // data = data.slice(0,0);//清空data
    //             // }
    // })
// rl.on('line',function(a){
//     data.push(a);
//     var n = data[0]-0;
//     if(data.length == n+1){
//         var counter = 0;
//         var str = data[0].toString();
//         var index = data[1].toString();
//         if(isNaN(index)){
//             index.toLowerCase();
//             str.toLowerCase().split("");
//             un(str,index);
//         }else{
//             str.split("");
//             un(str,index);
//         }
//         function un(str,index){
//             for(var i=0,len = str.length;i<len;i++){
//                 if(str[i] == index){
//                     counter++;
//                 }
//             }
//         }
//         console.log(1111);
//         return counter;
//     }
//     return false;
// })
// var line = require("readline")
// const rl = line.createInterFace({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on("line",function(str){
//     var a = str.split(" ");
//     console.log(a[a.length-1].length);
// })
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', function(line){
//     var tokens = line.split('');
//     console.log(tokens[tokens.length-1].length);
// });
// rl.on("line",function(a){
//     data.push(a);
//     var h = data[0];//组数
//     if(data.length>=3){
//         var nk =[],pai=[];
//         for(var i=0;i<h;i++){
//             nk.push(data[(2*i+1)]);
//             pai.push(data[(2*i+1)]);
//         }
//         for(var j=0;j<h;j++){
//             var min = nk[j].split(" ");// n,k值
//             var n = min[0],k = min[1];
//             var pais = pai[j].split(" ");//单组牌
//             var a =pais.slice(0,n-1);
//             var b =pais.slice(n);
//             var result = [];
//             for(var q=0;q<n;q++){
//                 var a =result.slice(0,n-1);
//                 var b =result.slice(n);
//                 for(var s=0;s<n;s++){
//                     result.push(a[s]);
//                     for(var k=0;k<n;k++){
//                         result.push(a[s]);
//                     }
//                 }
//             }
//         }
//     }
// })
rl.on("line",function(a){
    var s = a.replace(/\s/g, "").split("");
    console.log(s);
    var result = [],len=s.length;
    if(len>=8){
        if(len = 8 ){return s.toString();};
        var l = parseFloat(len/8);
        for(var i=0;i<l;){
            var m = i;
            i+=8;
            result.concat(s.slice(m,i));
        }
        var mid = s.slice(8*l-1).split("");
        result.concat(bu(mid));
    }else{
        bu(s);
    }
    function bu(mid){
        var len_01 = mid.length;
        var num = 8-len_01;
        for(var j=0;j<num;j++){
            mid.push("0");
        }
        console.log(mid.toString())
        console.log(typeof mid.toString())
        return mid.toString();
    }

})