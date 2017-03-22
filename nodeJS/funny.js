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

    //（2017IT模拟考试）
    //放入鱼缸种类数问题

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

<<<<<<< HEAD
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
        }
    // }
=======
    num(data);
    function num(arr){
        var n = parseInt(arr[0]);
        var m = 0;
        if(arr.length>n){
            var arr1 = arr.slice(1);
            var re1 = [];
            var m=0;
            arr1.forEach(function(b){
                var s = b.split("");
                for(var i=0;i<s.length;i++){
                    var ss1 = s.slice(0,i);
                    var ss2 = s.slice(i).concat(ss1);
                    var re = ss2.toString().replace(/,/g,"");
                    if(b==re){
                        m++;
                    }
                }
            })
            if(m==n){
                arr1.forEach(function(c){
                    var s1 = c.split("").sort().toString().replace(/,/g,"");
                    if(re1.indexOf(s1)==-1){
                        re1.push(s1);
                    }
                })
                console.log(re1.length);
            }
        }
    }
>>>>>>> b4eff9f52e77dfa82d3fbc1eff872e766cf51bea

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

    //求抹去的数×

    // qu(data);
    // function qu(data){
    //    var n = parseInt(data[0]);
    //    var re = [];
    //    if(data.length>1){
    //        var arr1 = data[1].split(" ");
    //        arr1.sort(function(b,c){return b-c;});
    //        for(var i=0;i<arr1.length;i++){
    //            var s = parseInt(arr1[i])+1;
    //            var ss = parseInt(arr1[i+1]);
    //            if(s!=ss){
    //              re.push(i)
    //            }
    //        }
    //        if(re.length!=0){
    //            var er = [];
    //            if(re.length==arr1.length){
    //                console.log("mistake");
    //            }else{
    //                re.forEach(function(d){
    //                    er.push(parseInt(arr1[d])+1);
    //                })
    //                console.log(re.toString().replace(/,/g," "));
    //            }
    //        }else{
    //            console.log("mistake")
    //        }
    //    }
    // }

    //超级素数

    // function su(str){
    //     var n = parseInt(str);
    //     var arr = [2,3,5,7,11,13,17,19,23,31,37,41,43];
    //     var s = [];
    //     for(var p=1;p<n; p++){
    //         for(var q=1;q<100;q++){
    //             var sum = Math.pow(p,q);
    //             if(n==sum){
    //                 if(arr.indexOf(p)!=-1){
    //                     s.push(p);
    //                     s.push(q);
    //                     break;
    //                 }
    //             }
    //             if(s.length!=0){
    //                 break;
    //             }
    //         }
    //     }
    //     if(s.length==0){
    //         console.log("No");
    //     }else{
    //         console.log(s.toString().replace(/,/g," "));
    //     }
    // }

    // function su(str){
    //     var n = parseInt(str);
    //     var arr = [2,3,5,7,11,13,17,19,23,31,37,41,43];
    //     var p=0,q=1;
    //     var s = [];
    //     for(var i=0,len=arr.length;i<len;i++){
    //          p = parseInt(arr[i]);
    //         console.log(p);
    //         for(;q<100;q++){
    //             var sum = Math.pow(p,q);
    //             console.log(sum);
    //             if(n==sum){
    //                 s.concat([p],[q]);
    //                 break;
    //             }
    //         }
    //     }
    //     console.log(s.toString().replace(/,/g," "));
    // }


    //N正整数L长度

    // f1(a);
    // function f1(str){
    //     var arr = str.split(" ");
    //     var n = parseInt(arr[0]);
    //     var l = parseInt(arr[1]);
    //     var sum =
    // }

    //页码

    // function ye(str){
    //     var n = parseInt(str);
    //     var arr = [];
    //     var a = 0;
    //     var b = 0;
    //     var c = 0;
    //     var d = 0;
    //     var e = 0;
    //     var f = 0;
    //     var g = 0;
    //     var h = 0;
    //     var i = 0;
    //     var j = 0;
    //     for(var o=1;o<=n;o++){
    //         var arr1 = o.toString().replace(/,/g,"").split("");
    //        arr1.forEach(function (m) {
    //             switch (parseInt(m)){
    //                 case 0:a++;break;
    //                 case 1:b++;break;
    //                 case 2:c++;break;
    //                 case 3:d++;break;
    //                 case 4:e++;break;
    //                 case 5:f++;break;
    //                 case 6:g++;break;
    //                 case 7:h++;break;
    //                 case 8:i++;break;
    //                 case 9:j++;break;
    //             }
    //        })
    //     }
    //     arr.push(a);
    //     arr.push(b);
    //     arr.push(c);
    //     arr.push(d);
    //     arr.push(e);
    //     arr.push(f);
    //     arr.push(g);
    //     arr.push(h);
    //     arr.push(i);
    //     arr.push(j);
    //     console.log(arr.toString().replace(/,/g," "));
    // }




});