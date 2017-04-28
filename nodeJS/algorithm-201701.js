/**
 * Created by Administrator on 2017/4/19.
 */
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
var data = [];

rl.on('line',function(a){
    // 这里所说的重复字符串是指对所给的字符串根据第一个数字参数重复次数。
    // 简单点说，就是创建一个repeat()函数，并且给这个函数传递两个参数，第一个参数是一个字符串str，而第二个参数是一个数字num。
    // 执行函数repeat(str, num)之后，字符串str就会重复，而且重复的次数由num来确定。
    function f1(str,num){
        var s="";
        while (num--){
            s+=str;
        }
        return s;
    }
    // 字尾确认指的是对所给的字符串（第一个参数）确认是否是以第二个参数结尾，如果是则返回true，否则返回false。
    function f2(str,s){
        if(str.indexOf(s)==str.length-1){
            return true;
        }else{
            return false;
        }
    }
    //es6方法
    function end(str, target) {
        return str.endsWith(target) ? true : false;
    }
    // 有一个长度未知的数组a，如果它的长度为0就把数字1添加到数组里面，否则按照先进先出的队列规则让第一个元素出队。
    // 分析：这道题主要是考核了数组的队列方法和栈方法。另外，原题还有字数限制的，只有在字数小于30并且结果正确时才可以满分。
    // f3(a);
    function f3(a){
        // a.length==0?a.push(1):a.shift();
        if(a.length==0){
            a.push(1);
            console.log(a);
        }else{
            console.log(a.reverse());
        }
    };
    function f4(){
        //高阶函数
        // test被定义为匿名函数function (a)的执行返回值function(b)，
        // 匿名函数function (a)的参数为匿名函数function(a,b)的执行结果，
        // 匿名函数function(a,b)参数已给出a=1,b=2,执行返回值为1，将其代入匿名函数function (a)将使其得到属性a, 其值为1;
        // test函数将返回传入参数与匿名函数function (a)的属性a的和值，传入4返回4+1等于5。
        var test = (function(a) {
            console.log(arguments,1);
            this.a = a;
            return function(b) {
                console.log(arguments,2);
                return this.a + b;
            }
        }(function(a, b) {//自行执行的函数
            console.log(arguments,3);
            return a;
        }(1, 2)));
        console.log(test(4));
    };
    // 不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标。
    function f5(){
        var arr = new Array(101).join(",").split(""),ar=[];
        arr.map(function(a,b){
            ar.push(b);
        })
        console.log(ar);
    }
    // 有一个长度为100的数组，请以优雅的方式求出该数组的前10个元素之和
    // console.log(f6(a.split(" ")));
    function f6(arr){
        var sum=0;
         arr.slice(0,10).map(function(a){
            sum+=parseInt(a);
        });
         return sum;
    };
    // 求AnB  要求高效????
    function k1(){
        data.push(a);
        if(data.length>1){
            f7(data[0].split(" "),data[1].split(" "));
        }
        function f7(arr1,arr2){
            var re=[];
            arr1.forEach(function(a){
                arr2.indexOf(a)!=-1&&re.push(a);
            });
            console.log(re);
        };
    }
    // 0到9999这1万个数中有多少个数字7（请不要理解为多少个数包含7）
    function k2(){
        var arr1=a.split(" ");
        f8(parseInt(arr1[0]),parseInt(arr1[1]),parseInt(arr1[2]));
        function f8(start,end,num){
            var m=0;
            for(var i=start;i<=end;i++){
                var arr=i.toString().split("");
                arr.forEach(function(a){
                    a==num&&m++;
                })
            }
            console.log(m);
        }
    }
    // 题目：春节期间小明使用微信收到很多个红包，非常开心。在查看领取红包记录时发现，某个红包金额出现的次数超过了红包总数的一半。
    // 请帮小明找到该红包金额。写出具体算法思路和代码实现，要求算法尽可能高效。
    // 给定一个红包的金额数组gifts及它的大小n，请返回所求红包的金额。没找到，返回0。
    k3(a);
    function k3(str){
        var arr = str.split(" "),n=0,mid=[],re=[];
        var len = arr.length/2;
        arr.forEach(function(a){
            mid.indexOf(a)==-1&&mid.push(a);
        });
        mid.forEach(function(b){
            var i=0;
            arr.forEach(function(c){
                c==b&&i++;
            });
            i>len&&re.push(b);
        });
        if(re.length>0){
            console.log(re)
        }else{
            console.log(0);
        }
    }
});