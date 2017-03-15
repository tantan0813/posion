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
// rl.on("line",function(a){
//     var s = a.replace(/\s/g, "").split("");
//     console.log(s);
//     var result = [],len=s.length;
//     if(len>=8){
//         if(len = 8 ){return s.toString();};
//         var l = parseFloat(len/8);
//         for(var i=0;i<l;){
//             var m = i;
//             i+=8;
//             result.concat(s.slice(m,i));
//         }
//         var mid = s.slice(8*l-1).split("");
//         result.concat(bu(mid));
//     }else{
//         bu(s);
//     }
//     function bu(mid){
//         var len_01 = mid.length;
//         var num = 8-len_01;
//         for(var j=0;j<num;j++){
//             mid.push("0");
//         }
//         console.log(mid.toString())
//         console.log(typeof mid.toString())
//         return mid.toString();
//     }
//
// })

rl.on("line",function(a){
    data.push(a);
    // console.log(data);
    console.log(findSu());
    //冒泡
    function maopao(arr){
        var len =arr.length-1;
        for(var i=0;i<len;i++){
            for(var j=0;j<len-i;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    // 快排
    function quickSort(arr) {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([pivot], quickSort(right));
    };
    //直接插入  ×
    function insert(arr){
            var i=1,j,step,key,len=arr.length;
            for(;i<len;i++){
                step=j=i;
                key=arr[j];
                while(--j>-1){
                    if(arr[j]>key){
                        arr[j+1] = arr[j];
                    }else{
                        break;
                    }
                }
                arr[j+1] = key;
            }
            return arr;
    }
     // 递归二分查找
    function binarySearch(arr,item,start,end){
        var end = end || arr.length-1;
        var start = start || 0;
        var m = Math.floor((start+end)/2);
        if(item==arr[m]){
            return m;
        }else if(item<arr[m]){
            return binarySearch(arr,item,start,m-1);
        }else{
            return binarySearch(arr,item,m+1,end);
        }
        return false;
    }
    // 非递归二分查找
    function find(arr,item){
        var len = arr.length-1,l=0;
        while(l<=len){
            var m = Math.floor((len+l));
            if(arr[m] == item){
                return m;
            }
            if(item>arr[m]){
                l = m+1;
            }else{
                len = m-1;
            }
        }
        return false;
    }
    // 素数
    function findSu(start, end) {
        var str = "", n = 0;
        for (var i = start; i <= end; i++) {
            var m = true; //质数
            for (var j = start + 1; j < i; j++) {
                if (i % j == 0) {
                    m = false; //非质数
                    break;
                }
            }
            if (m  && i != 2) {
                str = str + i + "，";
                n++; //质数个数+1
            }
        }
        return str;
    }
    //阶乘的和
    // console.log(sum(1,10));
    function sum(start, end) {
        var i=start;
        var n = end;
        var total = 0;
        while (i <= n) {
            var tmp = 1;
            var j = i;
            while (j >= 1) {
                tmp *= j;
                j--;
            }
            total += tmp;
            i++;
        }
        return total;
    }

    // zichuan(data[0]);截取子串
    function zichuan(str) {
        var len = str.length;
        var start = 0;
        var end = start+2;
        var mid = [];
        for(;end<=len;){
            var zi = str.slice(start,end);
            mid.push(zi);
            start++;
        }
        console.log(mid);
    }
})