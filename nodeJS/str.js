


// findNum();
// function findNum(){
//     var re = /^[0-9]+$/ ;
//     var arr = 0;
//     var i =2;
//    while(i>0){
//         i++;
//         var n = Math.sqrt(i);
//         if(re.test(n)){
//             var m = Math.sqrt(i+100);
//             if(re.test(m)){
//                 var d = Math.sqrt(i+168);
//                 if(re.test(d)){
//                     arr=i;
//                 }
//             }
//         }
//         while(arr != 0 ){
//             return arr;
//         }
//     }
//     return false;
// }
// console.log(findNum());

var line = require("readline");
var rl = line.createInterface({input:process.stdin,output:process.stdout})
var data = [];
rl.on("line",function(a){
    // 字符串反转

    // var arr = a.split("");
    // if(a.length>1){
    //     console.log(arr.reverse().toString().replace(/,/gi,""))
    //     return arr.reverse();
    // }else{
    //     return false;
    // }

    // 华为机测坐标

   // var arr = a.split(";");
   //  var res = [];
   //  arr.forEach(function(a){
   //      if(a != ""){
   //          res.push(a);
   //      }
   //  })
   //  var x = 0,y = 0;
   //  res.forEach(function(a){
   //      a.toString();
        // if(a.indexOf("A")==0||a.indexOf("W")==0||a.indexOf("S")==0||a.indexOf("D")==0){
        //     var n = a.slice(0,1);
        //     var num = a.slice(1);
        //     if(/^\d+$/ig.test(num)){
        //         play(n,num);
        //     }
        // }
    // })
    // function play(n,num){
    //     switch (n){
    //         case "A": x-=parseInt(num); break;
    //         case "S": y-=parseInt(num); break;
    //         case "W": y+=parseInt(num); break;
    //         case "D": x+=parseInt(num); break;
    //     }
    // }
    // console.log(x,y);

    // 华为机测验证密码

    // data.push(a);
    // var result = [];
    // data.forEach(function(a){
    //     var len = a.length;
    //     if(len>8){
    //         var n = 0;
    //         if(/[0-9]/ig.test(a)){
    //             n++;
    //         }
    //         if(/[a-z]/g.test(a)){
    //             n++;
    //         }
    //         if(/[A-Z]/g.test(a)){
    //             n++;
    //         }
    //         if(a.replace(/[A-Z0-9]/ig,"").length >0){
    //             n++;
    //         }
    //         // console.log(n);
    //         if(n>2){
    //             // var s = parseInt(len/3);
    //             var mid = [];
    //             var start = 0;
    //             var end = start+2;
    //             while(end<=len){
    //                 mid.push(a.slice(start,end));
    //                 start++;
    //                 // console.log(a.slice(start,end));
    //             }
    //             console.log(mid);
    //             var r = 1
    //             mid.forEach(function(m){
    //                 var str = mid.toString();
    //                 if(str.indexOf(m) != -1&& str.indexOf(m) != str.lastIndexOf(m)){
    //                     r = 0;
    //                 }
    //                 r = 1;
    //             })
    //             if(r==0){
    //                 result.push(["NG"]);
    //             }
    //             if(r==1){
    //                 result.push(["OK"]);
    //             }
    //         }
    //     }else{
    //         result.push(["NG"]);
    //     }
    //     console.log(result.toString());
    // })

    //华为机测 字典顺序排序

    // data.push(a);
    // var result = [];
    // var reg = /^[a-z]$/ig;
    // if(data.length>1){
    //     data.forEach(function(a){
    //         if(reg.test(a)){
    //             a.toLowerCase();
    //             result.push(a);
    //         }
    //         console.log(result.sort());
    //         return result.sort();
    //     })
    // }else{
    //     if(reg.test(data[0])){
    //         return data[0];
    //     }else{
    //         return false;
    //     }
    // }

    //华为机测密码加密

    // var arr = a.split("");
    // var mid = [];
    // arr.forEach(function(m){
    //     if(/[A-Z]/.test(m)){
    //         if(/Z/.test(m)){
    //            mid.push(["a"]);
    //         }else{
    //             var n = m.toLowerCase();
    //             var num = n.charCodeAt(0)+1;
    //             mid.push(String.fromCharCode(num));
    //         }
    //     }else if(/[a-z]/.test(m)){
    //         mid.push(play1(m));
    //     }else{
    //         mid.push(m);
    //     }
    // })
    // console.log(mid.toString().replace(/,/g,""));
    // function play1(n){
    //     var num ;
    //     switch(n){
    //         case "1": num=0 ;break;
    //         case "a": num=2 ;break;
    //         case "b": num=2 ;break;
    //         case "c": num=2 ;break;
    //         case "d": num=3 ;break;
    //         case "e": num=3 ;break;
    //         case "f": num=3 ;break;
    //         case "g": num=4 ;break;
    //         case "h": num=4 ;break;
    //         case "i": num=4 ;break;
    //         case "j": num=5 ;break;
    //         case "k": num=5 ;break;
    //         case "l": num=5 ;break;
    //         case "m": num=6 ;break;
    //         case "n": num=6 ;break;
    //         case "o": num=6 ;break;
    //         case "p": num=7 ;break;
    //         case "q": num=7 ;break;
    //         case "r": num=7 ;break;
    //         case "s": num=7 ;break;
    //         case "t": num=8 ;break;
    //         case "u": num=8 ;break;
    //         case "v": num=8 ;break;
    //         case "w": num=9 ;break;
    //         case "x": num=9 ;break;
    //         case "y": num=9 ;break;
    //         case "z": num=9 ;break;
    //         case "0": num=0 ;break;
    //     }
    //     return num;
    // }

    //华为机测喝饮料三换一

    // function calculate(args) {
// 	var result=[];
// 	for(var i=0,l=args.length;i<l;i++){
// 		var count=parseInt(args[i]),
// 			drink=0;
// 		while(count>1){
// 			if(count===2){
// 				drink+=1;
// 				count=0;
// 			}else{
// 				drink+=Math.floor(count/3);
// 				count=Math.floor(count/3)+count%3;
// 			}
// 		}
// 	result.push(drink);
// 	}
// 	console.log(result.join(' '));
// }

    //华为机测放苹果×

    // var arr = a.split(" ");
    // play2(data[0],data[1]);
    // function play2(m,n){
    //     var k = 0;
    //
    // }

    //完全数计算 ×

    // play3(a);
    // function play3(m){
    //
    // }

    // 输出一个数二进制1的个数

    // function play4(num){
    //     var count = 0;
    //     var  n = parseInt(num).toString(2).split("");
    //     console.log(n);
    //     n.forEach(function(b){
    //         if(b == "1"){
    //            count++
    //         }
    //     })
    //     return count;
    // }

    // 等差求和

    // function play5(n){
    //     var a1=2,d=3;
    //     var sum1 = a1*n;
    //     var sum2 = d*((n*(n-1))/2);
    //     var sum = sum1 +sum2;
    //     return sum;
    // }

    //密码等级

    // function play6(str) {
    //     var count = 0;
    //     var _length = str.length;
    //     len(_length);
    //     zimu(str);
    //     shu(str);
    //     fu(str);
    //     function len(l) {
    //         if (l <= 4) {
    //             count += 4;
    //         } else if (l > 4 && l <= 7) {
    //             count += 10;
    //         } else if (l >= 8) {
    //             count += 25;
    //         }
    //     }
    //
    //     function zimu(b) {
    //         if (/[a-z]/ig.test(b)) {
    //             if (/^[A-Z]$/.test(b)) {
    //                 count += 10;
    //             } else if (/^[a-z]$/.test(b)) {
    //                 count += 10;
    //             } else if (/[a-z][A-Z]/.test(b)) {
    //                 count += 20;
    //             }
    //         } else {
    //             count += 0;
    //         }
    //     }
    //
    //     function shu(n) {
    //         if (/[0-9]/ig.test(n)) {
    //             if (/[0-9]{2,}/ig.test(n)) {
    //                 count += 20;
    //             } else {
    //                 count += 10;
    //             }
    //         } else {
    //             count += 0;
    //         }
    //     }
    //
    //     function fu(m) {
    //         var str1 = m.replace(/[a-z][0-9]/, "");
    //         var j = str1.length;
    //         if (j == 0) {
    //             count += 0;
    //         } else if (j > 0 && j < 2) {
    //             count += 10;
    //         } else if (j >= 2) {
    //             count += 25;
    //         }
    //     }
    //
    //     function jiang(str) {
    //     }
    // }

    //字符翻转

    // function play8(str){
    //     return str.split("").reverse().toString().replace(/,/ig,"");
    // }

    //只能右下走的棋盘 ×

    // function play9(m,n){
    //     var x=0;
    //     for(var i=0;i<m;i++){
    //         for(var j=0;j<n;j++){
    //            return J(i, j);
    //         }
    //     }
    //     function J(m,n){
    //         if (m <= 0 || n <= 0)
    //             return 0;
    //         if (m == 1 || n == 1)
    //             return 1;
    //         return J(m, n - 1) + J(m - 1, n);
    //     }
    // }

    //参数解析×

    // function play10(str){
    //     var result = [];
    //     var count = 0,len;
    //     if(/""/ig.test(str)){
    //        var arr = str.split("");
    //         var ar = [],a= [];
    //         for(var i=0,l=arr.length;i<l;i++){
    //             if(arr[i] == '" '){
    //                 ar.push(i);
    //             }
    //         }
    //         for(var j=0,l=ar.length;j<l;j++){
    //             a.push(str.slice(ar[j],ar[j+1]));
    //             j++;
    //         }
    //     }else{
    //         var arr1 = str.split(" ");
    //         len = arr1.length;
    //     }
    //
    //     function p(){
    //
    //     }
    // }

    // 尼科彻斯定理

    // function play11(m){
    //     var a = parseInt(m);
    //     var num = a*a*a;
    //     var i=1;
    //     for(;i<1000;i++){
    //         var sum = a*i + (a*(a-1)/2)*2;
    //         // console.log(sum)
    //         if(sum == num){
    //             console.log(1111);
    //             break;
    //         }
    //     }
    //     var arr = [];
    //     for(var j=0;j<a;j++){
    //         arr.push(i)
    //         i +=1;
    //     }
    //     return arr.toString().replace(/,/ig,"+");
    // }

    //第m个月兔子数×

    // function play12(m){
    //     var num = parseInt(a);
    //     var count = 0;
    //     if(num<4){
    //         if(num<=2){
    //           count = 1;
    //         }else{
    //             count = num-1;
    //         }
    //     }else{
    //         var d = 2;
    //         count =3
    //         for(var i=4;i<num;i++){
    //             d++;
    //            count +=d;
    //         }
    //     }
    //     return count;
    // }

    // 统计大写字母个数

    // function play13(str){
    //     var arr = str.split("");
    //     var count = 0;
    //     arr.forEach(function(c){
    //         if(/[A-Z]/g.test(c)){
    //             count++;
    //         }
    //     })
    //     return count;
    // }

    //百钱买百鸡

    // function play14(str){
    //    var g=0,m=0,z=0;
    //     var money = 0,arr = [];
    //     for(var i=0;i<100;i++){
    //         g=i;
    //         for(var j=0;j<100;j++){
    //             m=j;
    //             z =100-g-m;
    //             if(z%3==0){
    //                 money = i*5+m*3+(z/3);
    //                 if(money ==100){
    //                    arr.push([g]);
    //                    arr.push([m]);
    //                    arr.push([z]);
    //                    arr.push(["\n"]);
    //                 }
    //             }
    //         }
    //     }
    //     return arr.toString().replace(/,/ig," ");
    // }

    // 求最大连续bit数×

    // function play16(m){
    //     var num=parseInt(m).toString(2).split("");
    //     var arr = [];
    //     for(var i=0;i<num.length;i++){
    //         if(num[i]=="1"){
    //
    //         }
    //     }
    // }

    // ASCII码排序问题

    // function play16(str){
    //     return str.split("").sort().toString().replace(/,/ig,"");
    // }

    // 最大公共子串

    // var ar = a.split(" ");
    // function fun(s1,s2){
    //     var i,j,k,l=0;
    //     for(i=0;i<s1.length;i++){
    //         j=1;
    //         while(i+j<s1.length&&s2.indexOf(s1.substr(i,j))!=-1){
    //             j++;
    //         }
    //         if(j!=1&&j>l){
    //             l=j;
    //             k=i;
    //         }
    //     }
    //     if(l!=0)
    //         return s1.substr(k,l-1).length;
    //     else
    //         return false;
    // }

    // 挑7

    // function play20(m){
    //     var num = parseInt(m);
    //     var count=0;
    //     for(var i=0;i<num;i++){
    //         if(i.toString().indexOf("7") != -1 ||i%7==0 ){
    //             if(i!=0){
    //                 count++;
    //             }
    //         }
    //     }
    //     console.log(count);
    //     return count;
    // }

    // n以内自守数个数

    // function play21(m){
    //     var n = parseInt(m);
    //     var count=0;
    //     for(var i=0;i<n;i++){
    //         var sum = (i*i).toString().split("").reverse().toString();
    //         if(sum.indexOf(i.toString().split("").reverse().toString())==0){
    //             count++;
    //         }
    //     }
    //     console.log(count);
    //     return count;
    // }

    // 求偶数的素数

    // function play22(m){
    //     var n = parseInt(m);
    //     if(n%2==0 && n>2){
    //
    //     }else{
    //         return false;
    //     }
    // }

    // 多线程输出问题

    // function play23(n) {
    //     var num = parseInt(n);
    //     var arr = [];
    //     var a = "A", b = "AB", c = "ABC", d = "ABCD";
    //     var i = Math.floor(num / 4);
    //     for (var j = 0; j < i; j++) {
    //         arr.push(d);
    //         console.log(arr);
    //     }
    //     if (num % 4 == 1) {
    //         arr.push(a);
    //     }else if (num % 4 == 2) {
    //         arr.push(b);
    //     }else if (num % 4 == 3) {
    //         arr.push(c);
    //     }
    //     return arr.toString().replace(/,/ig, "");
    // }

    //合法IP

    // function play24(str){
    //     var arr = str.split(".");
    //     if(arr.length==4){
    //         var count = 0;
    //         for(var i=0;i<4;i++){
    //             if(arr[i]<=255&&arr[i]>=0){
    //                 count++;
    //             }
    //         }
    //         if(count==4){
    //             return "YES";
    //         }else{
    //             return "NO";
    //         }
    //     }else{
    //         return "NO";
    //     }
    // }

    // 字符个数统计

    // function play26(str){
    //     var arr = str.split("");
    //     var count = 0;
    //     arr.forEach(function(n){
    //         var num = parseInt(n.charCodeAt(0));
    //         if(num>0&&num<127){
    //             count++;
    //         }
    //     })
    //     return count;
    // }

    // 提取不重复的整数

    // function play27(str){
    //     var arr = str.split("").reverse().toString().split(",");
    //     var result = [];
    //     arr.forEach(function(n){
    //         if(result.indexOf(n)==-1){
    //             result.push(n)
    //         }
    //     })
    //     return result.toString().replace(/,/ig,"");
    // }

    // 按字节截取字符串

    // if(data.length>1){
    //     console.log(play27(data));
    // }
    // function play27(arr){
    //   var s = arr[0];
    //   var num = parseInt(arr[1]);
    //   var mid = s.split("");
    //   var re =[],sum=0,result=[];
    //   mid.forEach(function(n){
    //         if(/^[\u4e00-\u9fa5]$/.test(n)){
    //             re.push("1.5");
    //         }else{
    //             re.push("1");
    //         }
    //   })
    //     var i=0,len=re.length;
    //   for(;i<len;i++){
    //           sum += parseFloat(re[i]);
    //           if(num==Math.floor(sum)){
    //               console.log(i);
    //               break
    //           }
    //   }
    //   result = mid.slice(0,i);
    //   return result.toString().replace(/,/ig,"");
    // }

    // 高精度整数相加×

    // function play27(n,m) {
    //     var arr1= n.split("");
    //     var arr2= m.split("");
    //     var result = [];
    //     if(n.indexOf("-")!=-1&&m.indexOf("-")!=-1){
    //         result.push("-");
    //         for(var i=1,len=arr1.length;i<len;i++){
    //             var n = parseInt(arr1[i]);
    //         }
    //     }else if(n.indexOf("-")==-1&&m.indexOf("-")==-1){
    //
    //     }
    // }

    // 5次回弹的高度

    // function play28(n){
    //     var h = parseInt(n);
    //     var m = parseInt(n);
    //     for(var i=0;i<5;i++){
    //         m=m/2;
    //     }
    //     return m;
    // }

    // 称砝码×

    // function play29(data){
    //
    // }

    // 字符串加密×

    // function play30(str){
    //     var arr = str.split("");
    //     var result = [];
    //     arr.forEach(function(b){
    //         if(result.indexOf(b)!=-1){
    //             result.push(b);
    //         }
    //     })
    //
    // }

    // 字典顺序排序

    // var n = parseInt(data[0])+1;
    // if(data.length==n){
    //     console.log(play31(data));
    // };
    // function play31(arr){
    //     return arr.slice(1).sort().toString().replace(/,/ig,"\n");
    // }

    // 计算字符串的距离

    // function play32(arr){
    //     var str1 = arr[0].split("");
    //     var str2 = arr[1].split("");
    //     var count = 0;
    //     var la=str1.length,ls=str2.length;
    //     if(la>ls){
    //         count += la-ls;
    //         count +=parseInt(p(str2,str1));
    //     }else if(la<ls){
    //         count += ls-la;
    //         count +=parseInt( p(str1,str2));
    //     }else{
    //         count +=parseInt(p(str2,str1));
    //     }
    //     function p(s1,s2){
    //         var n = 0;
    //         for(var i=0,len=s1.length;i<len;i++){
    //             if(s1[i]!=s2[i]){
    //                 n++;
    //             }
    //         }
    //         return n;
    //     }
    //     return count;
    // }

    //字符统计

    // function play33(str){
    //     var arr = str.split("");
    //     var z=0,k=0,shu=0,other=0;
    //     var result = [];
    //     arr.forEach(function(a){
    //         if(/^[0-9]$/.test(a)){
    //             shu++;
    //         }else if(/^[a-z]/ig.test(a)){
    //             z++;
    //         }else if(a==" "){
    //             k++;
    //         }else{
    //             other++;
    //         }
    //     })
    //     result.push(z);
    //     result.push(k);
    //     result.push(shu);
    //     result.push(other);
    //     return result.toString().replace(/,/ig,"\n");
    // }

    //24点游戏×

    // 梅花桩

    // if(data.length==2){
    //     console.log(play34(data));
    // }
    // function play34(arr){
    //     var n = parseInt(arr[0]);
    //     var ar = arr[1].split(" ");
    //     var result = [];
    //     for(var i=0,len=ar.length;i<len;i++){
    //         var n=1;
    //         var mid = ar.slice(i);
    //         var s =[];
    //         mid.forEach(function(a){
    //             if(s.indexOf(a)==-1){
    //                 s.push(a);
    //             }
    //         });
    //         for(var j=0,l=s.length;j<l;j++){
    //             if(s[j]>ar[i]){
    //                 n++;
    //             }
    //         }
    //         result.push(n);
    //     }
    //     result.sort(function(a,b){
    //         return b-a;
    //     });
    //     return result[0];
    // }

    // 矩形乘法×

    // 题目描述
    // 数据表记录包含表索引和数值，请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。

// 输入描述:
//     先输入键值对的个数
//     然后输入成对的index和value值，以空格隔开

//     输出描述:
        // 输出合并后的键值对（多行）

// 输入例子:
//     4
//     0 1
//     0 2
//     1 2
//     3 4

    // 输出例子:
    //     0 3
    //     1 2
    //     3 4


    function play35(arr){
        var n = parseInt(arr[0]);
        var arr1 = arr.slice(1);
        for(var i=0,len=arr1.length;i<len;i++){
            var mid = arr1[i].split(" ");

        }
    }

    // 计算字符串的相似度
    
    // if(data.length==2){
    //     console.log(play36(data));
    // }
    // function play36(arr){
    //     var s1 = arr[0].split("");
    //     var s2 = arr[1].split("");
    //     var n=0;
    //     var le=s1.length,len=s2.length;
    //     if(le>len){
    //         n+=parseInt(le-len);
    //         n+=parseInt(p(s2,s1));
    //     }else if(len>le){
    //         n+=parseInt(len-le);
    //         n+=parseInt(p(s1,s2));
    //     }else{
    //         n+=parseInt(p(s2,s1));
    //     }
    //     function p(str1,str2){
    //         var m=0;
    //         for(var i=0,l=str1.length;i<l;i++){
    //             if(str1[i]!=str2[i]){
    //                 m++;
    //             }
    //         }
    //         return m;
    //     }
    //     return 1/(n+1);
    // }









})




























