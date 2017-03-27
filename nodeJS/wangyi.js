var line = require("readline");
var rl = line.createInterface({input:process.stdin,output:process.stdout})
var data = [];
rl.on("line",function(a) {

//网易编程题

//AAAABCCDAA输出例子:4A1B2C1D2A
    function k1(a) {
        var key = a;
        var result = "";
        var lastKey = "", lastKeyCount = 0, currentKey;
        for (var i = 0; i < key.length; i++) {
            currentKey = key.substr(i, 1);//截取第i个字符串
            if (currentKey == lastKey) {
                lastKeyCount++;
            } else {
                if (lastKey != "") {
                    result += lastKeyCount + lastKey;
                }
                lastKey = currentKey;
                lastKeyCount = 1;
            }
        }
        result += lastKeyCount + lastKey;
        console.log(result);
    }
    function k2(a) {
        var key = a;
        var result = "";
        var currentKey, keyCount, tempArr;
        for (var i = 0; i < key.length; i++) {
            currentKey = key.substr(i, 1);
            tempArr = (new RegExp('^' + currentKey + '+')).exec(key.substr(i));
            result += tempArr[0].length + currentKey;
            i += tempArr[0].length - 1;
        }
        console.log(result);
    }
    // 打怪升级
    function k3(a){
        data.push(a);
        if(data.length%2==0){
            var re = [];
            for(var i=0,len=data.length;i<len;i++){
                var first = [],b=[];
                first.push(data[i]);
                var ar1 = first[i].split(" ");
                var b1 = parseInt(ar1[1]);
                i++;
                b = data[i].split(" ");
                b.forEach(function(b){
                    var c=parseInt(b);
                    if(b1>=c){
                        b1+=c;
                    }else{
                       b1+=parseInt(p(b1,c));
                    }
                })
                re.push(b1);
                console.log(re.toString().replace(/,/g,"\n"));
            }
        }
        function p(n,m){
            var re = 0;
            for(var i=0;i<=m;i++){
                if(m%i==0&&n%i==0){
                    re=i;
                }
            }
            return re;
        }
    }
    // 炮台
    function k4(a){
       var arr = a.split(" ");
       var r = parseInt(arr[0]);r=r*r;
       var ar = arr.slice(1);
       var x0 = parseInt(ar[ar.length-2]);
       var y0 = parseInt(ar[ar.length-1]);
       var count=0;
       for(var i=0,len=ar.length-2;i<len;i++){
           var re1 = (x0-parseInt(ar[i]))*(x0-parseInt(ar[i]));
           i++;
           var re2 = (y0-parseInt(ar[i]))*(y0-parseInt(ar[i]));
           if(re1+re2<=r){
               count++;
           }
       }
       console.log(count+"x");
    }
    // 买颜料
    function k5(a){
        data.push(a);
        if(data.length>1){
            var arr = data[1].split(" ");
           for(var i=0;i<arr.length;i++){
               for(var j=i;j<arr.length;j++){
                   var n =parseInt(arr[i]);
                   var m =parseInt(arr[j]);
                   var c = n^m;
                   var index = arr.indexOf(c.toString());
                   if(index!=-1){
                       arr.splice(index,1);
                   }
               }
           }
           console.log(arr.length);
        }
    }
    // 一个袋子里面有n个球，每个球上面都有一个号码(拥有相同号码的球是无区别的)。
    // 如果一个袋子是幸运的当且仅当所有球的号码的和大于所有球的号码的积。
    // 例如：如果袋子里面的球的号码是{1, 1, 2, 3}，
    // 这个袋子就是幸运的，因为1 + 1 + 2 + 3 > 1 * 1 * 2 * 3
    // 你可以适当从袋子里移除一些球(可以移除0个,但是别移除完)，要使移除后的袋子是幸运的。
    // 现在让你编程计算一下你可以获得的多少种不同的幸运的袋子。
    // 输入描述:
    // 第一行输入一个正整数n(n ≤ 1000)
    // 第二行为n个数正整数xi(xi ≤ 1000)
    // 输出描述:
    //     输出可以产生的幸运的袋子数
    // 输入例子:
    //     3
    // 1 1 1
    // 输出例子:
    //     2

    function k6(a) {
        data.push(a);
        if (data.length > 1) {
            var arr = data[1].split(" ");

        }
        function p(s) {
            var arr = s.split(",");
            var sum = 0, su = 1;
            arr.forEach(function (b) {
                sum += parseInt(b);
                su *= parseInt(b);
            })
            if (sum > su) {
                return true;
            } else {
                return false;
            }
        }
    }

    // 二货小易有一个W*H的网格盒子，网格的行编号为0~H-1，网格的列编号为0~W-1。每个格子至多可以放一块蛋糕，任意两块蛋糕的欧几里得距离不能等于2。
    // 对于两个格子坐标(x1,y1),(x2,y2)的欧几里得距离为:
    //     ( (x1-x2) * (x1-x2) + (y1-y2) * (y1-y2) ) 的算术平方根
    // 小易想知道最多可以放多少块蛋糕在网格盒子里。
    // 输入描述:
    // 每组数组包含网格长宽W,H，用空格分割.(1 ≤ W、H ≤ 1000)
    // 输出描述:
    //     输出一个最多可以放的蛋糕数
    // 输入例子:
    //     3 2
    // 输出例子:
    //     4

    // 1）每4×4个格子可放8个；
    // 2）剩余的1~3行×(W/4*4)列+剩余的1~3列×(H/4*4)行；
    // 3）最后1~9个格子，又可分2小类：如果是3*3，则可以放2*2个+最下角的一个;否则1*1，1*2(2*1)，2*2。
    function k7(a){
    // #include <stdio.h>int main(){    
    //     int W,H,n;    
    //     while(scanf("%d %d",&W,&H)!=EOF){        
    //         n=(W/4)*(H/4)*8;        
    //         n+=(H%4)*(W/4)*2+(W%4)*(H/4)*2;        
    //         n+=(W%4>1?2:W%4)*(H%4>1?2:H%4);        
    //         n+=(W%4==H%4 && W%4==3);        
    //         printf("%d\n",n);    }    
    //         return 0;}
    }

    // “回文串”
    function k8(a){
        data.push(a);
        if(data.length>1){
            var s1 = data[0],s2=data[1];
            var re=[];
            for(var i=0,len=s1.length;i<=len;i++){
                var ss1 ="",ss2="";
                if(i==0){
                    ss1 ="";
                }else{
                    ss1 = s1.slice(0,i);
                }
                ss2 = s1.slice(i);
                var s = ss1+s2+ss2;
                re.push(s);
            }
            var count=0;
            re.forEach(function(b){
                var s = b.split("").reverse().toString().replace(/,/g,"");
                if(s==b){
                   count++;
                }
            })
                console.log(count);
        }
    }

    // 小易总是感觉饥饿，所以作为章鱼的小易经常出去寻找贝壳吃。最开始小易在一个初始位置x_0。
    // 对于小易所处的当前位置x，他只能通过神秘的力量移动到 4 * x + 3或者8 * x + 7。
    // 因为使用神秘力量要耗费太多体力，所以它只能使用神秘力量最多100,000次。
    // 贝壳总生长在能被1,000,000,007整除的位置(比如：位置0，位置1,000,000,007，位置2,000,000,014等)。
    // 小易需要你帮忙计算最少需要使用多少次神秘力量就能吃到贝壳。
    // 输入描述:
    // 输入一个初始位置x_0,范围在1到1,000,000,006
    // 输出描述:
    //     输出小易最少需要使用神秘力量的次数，如果使用次数使用完还没找到贝壳，则输出-1
    // 输入例子:
    //     125000000
    // 输出例子:
    //     1
    function k9(a){
        var x=parseInt(a),n=0;
        var l1=4*x+3,l2=8*x+7;

    }

    // 字符排序
    function k10(a){
        data.push(a);
        var n=parseInt(data[0]);
        if(data.length>n){
            var arr = data.slice(1);
            var arr1 = data.slice(1);
            var arr2 = arr.sort();
            var n=0,m=0;
            for(var j=0,len=arr.length;j<len;j++){
                if(arr1[j]!=arr2[j]){
                    n=0;
                    break;
                }
                n=1;
            }
           for(var i=0;i<len;i++){
                var s1=arr1[i];
                var s2=arr1[i+1]?arr1[i+1]:arr1[len-1];
               console.log(s1,s2);
                if(s1.length>s2.length){
                    m=0;
                    break;
                }
                m=1;
           }
           console.log(m,n);
           if(n==1&&m==1){
               console.log("both")
           }else if(n==1){
               console.log("lexicographically")
           }else if(m==1){
               console.log("lengths")
           }else {
               console.log("none");
           }
        }
    }

    // 小易喜欢的单词具有以下特性：
    // 1.单词每个字母都是大写字母
    // 2.单词没有连续相等的字母
    // 3.单词没有形如“xyxy”(这里的x，y指的都是字母，并且可以相同)这样的子序列，子序列可能不连续。
    // 例如：
    // 小易不喜欢"ABBA"，因为这里有两个连续的'B'
    // 小易不喜欢"THETXH"，因为这里包含子序列"THTH"
    // 小易不喜欢"ABACADA"，因为这里包含子序列"AAAA"
    // 小易喜欢"A","ABA"和"ABCBA"这些单词
    // 给你一个单词，你要回答小易是否会喜欢这个单词。
    // 输入描述:
    // 输入为一个字符串，都由大写字母组成，长度小于100
    // 输出描述:
    //     如果小易喜欢输出"Likes",不喜欢输出"Dislikes"
    // 输入例子:
    //     AAA
    // 输出例子:
    //     Dislikes
    function k11(a){
        var s=a;
        var flag=1;
        if(/^[A-Z]$/g.test(s)){
            var arr = s.split(""), n=0;
            for(var i=0,len=arr.length;i<len;i++){
                if(arr[i]==arr[i+1]){
                    n=0
                    break;
                }
                n=1;
            }
            if(n==1){

            }else{
                flag=0;
            }
        }else{
            flag=0;
        }
    }
    function k12(a){
        var n = parseInt(a);
        if (n < 0) throw new Error('输入的数字不能小于0');
        var dataMinusTwo= 0,
            dataMinusOne = 1,
            data;
        if (n == 0) return dataMinusTwo;
        if (n == 1) return dataMinusOne;
        for (var i=2;i<=n;i++) {
            data = dataMinusOne + dataMinusTwo;

            dataMinusTwo = dataMinusOne;
            dataMinusOne = data;
        }
        console.log(data)
        return data;

        function fib(n){
            if(n==1||n==2){
                return 1;
            }
            return fbnq(n-1)+fbnq(n-2);
        }
    }

    function k13(a){
        var arr = a.split(" ");
        var w=parseInt(arr[0]);
        var x=parseInt(arr[1]);
        var y=parseInt(arr[2]);
        var z=parseInt(arr[3]);
        var arr1=[],arr2=[];
        for(var p=w;p<=x;p++){
            arr1.push(p);
        }
        for(var q=y;q<=z;q++){
            arr2.push(q);
        }
        arr2.forEach(function(b){
            if(arr1.indexOf(b)==-1){
                arr1.push(b);
            }
        })
        console.log(arr1.length);
    }


    function k14(a){
        data.push(a);
        var n=parseInt(data[0]);
        if(data.length>1){
            var arr = data[1].split(" ").reverse();
            var re=[];
            arr.forEach(function(b){
                if(re.indexOf(b)==-1){
                    re.push(b);
                }
            })
            console.log(re.reverse().toString().replace(/,/g," "))
        }
    }

    k15(a);
    function k15(a){
        var s1 = a.slice(0,3);
        var arr = a.slice(3).split("");
        var n = p(s1);
        for(var i=0;i<arr.length;i++){
            var s = arr.slice(i,i+2).toString().replace(/,/g,"");
            s1=n+s;
            i++;
            n=p(s1);

        }
        console.log(n);
        function p(s){
            var arr = s.split("");
            var n = parseInt(arr[0]),m=parseInt(arr[2]),f=arr[1];
            if(f=="*"){
                return n*m;
            }else if(f=="-"){
                return n-m;
            }else if(f=="+"){
                return n+m;
            }
        }
    }


});






