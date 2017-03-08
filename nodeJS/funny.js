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

    //放入鱼缸种类数问题（2017IT模拟考试）

    // if(data.length>2){
    //     console.log(yu(data));
    // }
    // function yu(arr){
    //     var size = arr[0].split(" ");
    //     var min = parseInt(size[0]);
    //     var max = parseInt(size[1]);
    //     var n = parseInt(data[1]);
    //     var mi=0,ma=0;
    //     var m=0;
    //     if(n>1){
    //         var arr1 = data[2].split(" ");
    //         mi = parseInt(Math.min.apply(null,arr1));
    //         ma = parseInt(Math.max.apply(null,arr1));
    //         for(var i=min;i<=max;i++){
    //             if(i<(ma/10)||(i>(ma/2)&&i<(ma*2))||i>(ma*10)){
    //                 if(i<(mi/10)||(i>(mi/2))&&i<(mi*2)||i>(mi*10)){
    //                     m++;
    //                 }
    //             }
    //         }
    //         return m;
    //     }else{
    //         mi = parseInt(data[2]);
    //         for(var i=min;i<=max;i++){
    //             if(i<(mi/10)||(i>(mi/2))&&i<(mi*2)||i>(mi*10)){
    //                 m++;
    //             }
    //         }
    //         return m;
    //     }
    // }

    //输出循环单词的种数

    // num(data);
    // function num(arr){
    //     var n = parseInt(arr[0]);
    //     var m = 0;
    //     if(arr.length>n){
    //         var arr1 = arr.slice(1);
    //         var re1 = [];
    //         var m=0;
    //         arr1.forEach(function(b){
    //             var s = b.split("");
    //             for(var i=0;i<s.length;i++){
    //                 var ss1 = s.slice(0,i);
    //                 var ss2 = s.slice(i).concat(ss1);
    //                 var re = ss2.toString().replace(/,/g,"");
    //                 if(b==re){
    //                     m++;
    //                 }
    //             }
    //         })
    //         if(m==n){
    //             arr1.forEach(function(c){
    //                 var s1 = c.split("").sort().toString().replace(/,/g,"");
    //                 if(re1.indexOf(s1)==-1){
    //                     re1.push(s1);
    //                 }
    //             })
    //             console.log(re1.length);
    //         }
    //     }
    // }

    //DNA合成

    // dna(a);
    // function dna(str){
    //     var arr = str.split(" ");
    //     var l = arr[0].length;
    //     var len = arr[1].length;
    //     if(l==len){
    //         var arr1 = arr[0].split("");
    //         var arr2 = arr[1].split("");
    //         arr1.forEach(function(b,c){
    //             if(b=="A"){
    //               arr1.splice(c,1,"T");
    //             }else if(b=="C"){
    //                 arr1.splice(c,1,"G")
    //             }else if(b=="T"){
    //                 arr1.splice(c,1,"A")
    //             }else if(b=="G"){
    //                 arr1.splice(c,1,"C")
    //             }
    //         })
    //         var n = 0 ;
    //        for(var i=0;i<arr1.length;i++){
    //             if(arr1[i]!=arr2[i]){
    //                 n++;
    //             }
    //        }
    //        console.log(n);
    //     }else{
    //         console.log("请重新输入！");
    //     }
    // }

    //求抹去的数
    data.push(a);
    qu(data);
    function qu(data){
       var n = parseInt(data[0]);
       var re = [];
       if(data.length>1){
           var arr1 = data[1].split(" ");
           arr1.sort(function(b,c){return b-c;});
           for(var i=0;i<arr1.length;i++){
               var s = parseInt(arr1[i])+1;
               var ss = parseInt(arr1[i+1]);
               if(s!=ss){
                   re.push(s+1);
               }
           }
           if(re.length!=0){
               console.log(re.toString().replace(/,/g," "));
               console.log(re);
           }else{
               console.log("mistake")
           }
       }
    }






































})