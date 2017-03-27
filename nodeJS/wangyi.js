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
    //网易春招编程题前端
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
    function k15(a){
        var s1 = a.slice(0,3);
        var arr = a.slice(3).split("");
        var n = p(s1);
        for(var i=0;i<arr.length;i++){
            var s = arr.slice(i,i+2).toString().replace(/,/g,"");
            if(i==arr.length){
                s=arr[i];
            }
            s1=n+s;
            i++;
            n=p(s1);
        }
        console.log(n);
        function p(s){
            var arr = s.match(/\d+/g);
            var n = parseInt(arr[0]),m=parseInt(arr[1]);
            var f = s.slice(arr[0].length,arr[0].length+1);
            if(f=="*"){
                return n*m;
            }else if(f=="-"){
                return n-m;
            }else if(f=="+"){
                return n+m;
            }else if(f=="/"){
                return n/m;
            }
        }
    }
    // 一种双核CPU的两个核能够同时的处理任务，现在有n个已知数据量的任务需要交给CPU处理，假设已知CPU的每个核1秒可以处理1kb，每个核同时只能处理一项任务。
    // n个任务可以按照任意顺序放入CPU进行处理，现在需要设计一个方案让CPU处理完这批任务所需的时间最少，求这个最小的时间。
    // 输入描述:
    // 输入包括两行：
    // 第一行为整数n(1 ≤ n ≤ 50)
    // 第二行为n个整数length[i](1024 ≤ length[i] ≤ 4194304)，表示每个任务的长度为length[i]kb，每个数均为1024的倍数。
    // 输出描述:
    // 输出一个整数，表示最少需要处理的时间
    // 输入例子:
    //     5
    // 3072 3072 7168 3072 1024
    // 输出例子:
    //     9216
    function k16(a){
        data.push(a);
        if(data.length>1){
            var arr = data[1].split(" ").sort(function(b,c){return c-b;});
            for(var i=1,len=arr.length;i<len;i++){
                var arr1 = arr.slice(0,i);
                var arr2 = arr.slice(i);
                var sum1=0,sum2=0;
                arr1.forEach(function(a){
                    sum1+=parseInt(a);
                })
                arr2.forEach(function(a){
                    sum2+=parseInt(a);
                })
                console.log(arr1,arr2);
                console.log(sum1,sum2);
                // sum1>=sum2,console.log(sum1);
                // return sum1;
            }
        }
    }

    // 终于到周末啦！小易走在市区的街道上准备找朋友聚会，突然服务器发来警报,小易需要立即回公司修复这个紧急bug。
    // 假设市区是一个无限大的区域，每条街道假设坐标是(X，Y)，小易当前在(0，0)街道，办公室在(gx,gy)街道上。
    // 小易周围有多个出租车打车点，小易赶去办公室有两种选择，一种就是走路去公司，另外一种就是走到一个出租车打车点，然后从打车点的位置坐出租车去公司。
    // 每次移动到相邻的街道(横向或者纵向)走路将会花费walkTime时间，打车将花费taxiTime时间。小易需要尽快赶到公司去，现在小易想知道他最快需要花费多少时间去公司。
    // 输入描述:
    // 输入数据包括五行:
    //     第一行为周围出租车打车点的个数n(1 ≤ n ≤ 50)
    // 第二行为每个出租车打车点的横坐标tX[i] (-10000 ≤ tX[i] ≤ 10000)
    // 第三行为每个出租车打车点的纵坐标tY[i] (-10000 ≤ tY[i] ≤ 10000)
    // 第四行为办公室坐标gx,gy(-10000 ≤ gx,gy ≤ 10000),以空格分隔
    // 第五行为走路时间walkTime(1 ≤ walkTime ≤ 1000)和taxiTime(1 ≤ taxiTime ≤ 1000),以空格分隔
    // 输出描述:
    //     输出一个整数表示，小易最快能赶到办公室的时间
    // 输入例子:
    //     2
    //     -2 -2
    // 0 -2
    // -4 -2
    // 15 3
    // 输出例子:
    //     42
    function k17(a){
        data.push(a);
        if(data.length>4){

            }
        }
    // 在幼儿园有n个小朋友排列为一个队伍，从左到右一个挨着一个编号为(0~n-1)。
    // 其中有一些是男生，有一些是女生，男生用'B'表示，女生用'G'表示。小朋友们都很顽皮，当一个男生挨着的是女生的时候就会发生矛盾。
    // 作为幼儿园的老师，你需要让男生挨着女生或者女生挨着男生的情况最少。
    // 你只能在原队形上进行调整，每次调整只能让相邻的两个小朋友交换位置，现在需要尽快完成队伍调整，你需要计算出最少需要调整多少次可以让上述情况最少。例如：
    // GGBBG -> GGBGB -> GGGBB
    // 这样就使之前的两处男女相邻变为一处相邻，需要调整队形2次
    // 输入描述:
    //     输入数据包括一个长度为n且只包含G和B的字符串.n不超过50.
    //         输出描述:
    // 输出一个整数，表示最少需要的调整队伍的次数
    // 输入例子:
    //     GGBBG
    // 输出例子:
    //     2
    function k18(a){
        var arr=a.split("");
        var n=0;

    }
    // 小易拥有一个拥有魔力的手环上面有n个数字(构成一个环),当这个魔力手环每次使用魔力的时候就会发生一种奇特的变化：
    // 每个数字会变成自己跟后面一个数字的和(最后一个数字的后面一个数字是第一个),一旦某个位置的数字大于等于100就马上对100取模(比如某个位置变为103,就会自动变为3).
    //     现在给出这个魔力手环的构成，请你计算出使用k次魔力之后魔力手环的状态。
    // 输入描述:
    // 输入数据包括两行：
    // 第一行为两个整数n(2 ≤ n ≤ 50)和k(1 ≤ k ≤ 2000000000),以空格分隔
    // 第二行为魔力手环初始的n个数，以空格分隔。范围都在0至99.
    //     输出描述:
    // 输出魔力手环使用k次之后的状态，以空格分隔，行末无空格。
    // 输入例子:
    // 3 2
    // 1 2 3
    // 输出例子:
    //     8 9 7
    function k19(a){
        data.push(a);
        if(data.length>1){
            var arr1 = data[0].split(" "),arr2=data[1].split(" ");
            var n=parseInt(arr1[0]),k=parseInt(arr1[1]);
            for(var i=0;i<k;i++){
                var ar=[];
                for(var j=0,len=arr2.length;j<len;j++){
                    var n=0;
                    if(j==len-1){
                        n=parseInt(arr2[j])+parseInt(arr2[0]);
                    }else{
                        n=parseInt(arr2[j])+parseInt(arr2[j+1]);
                    }
                    if(n>=100){
                        n=n%100;
                    }
                    ar.push(n);
                }
                arr2=ar;
            }
            console.log(arr2.toString().replace(/,/g," "));
        }
    }

    // 现在有n位工程师和6项工作(编号为0至5)，现在给出每个人能够胜任的工作序号表(用一个字符串表示，比如：045，表示某位工程师能够胜任0号，4号，5号工作)。
    // 现在需要进行工作安排，每位工程师只能被安排到自己能够胜任的工作当中去，两位工程师不能安排到同一项工作当中去。
    // 如果两种工作安排中有一个人被安排在的工作序号不一样就被视为不同的工作安排，现在需要计算出有多少种不同工作安排计划。
    // 输入描述:
    // 输入数据有n+1行：
    // 第一行为工程师人数n(1 ≤ n ≤ 6)
    // 接下来的n行，每行一个字符串表示第i(1 ≤ i ≤ n)个人能够胜任的工作(字符串不一定等长的)
    // 输出描述:
    //     输出一个整数，表示有多少种不同的工作安排方案
    // 输入例子:
    //     6
    // 012345
    // 012345
    // 012345
    // 012345
    // 012345
    // 012345
    // 输出例子:
    //     720

    function k20(a){
        data.push(a);
        var n=parseInt(data[0]);
        if(data.length>n){
            var arr=data.slice(1);
            var z=0,f=0,tw=0,th=0,fu=0,w=0;
            arr.forEach(function(a){
                var arr1 = a.split("");
                arr1.forEach(function(b){
                    switch (b){
                        case "0":z++; break;
                        case "1":f++; break;
                        case "2":tw++; break;
                        case "3":th++; break;
                        case "4":fu++; break;
                        case "5":w++; break;
                    }
                })
            })
            console.log(z*tw*th*fu*w);
        }
    }

    // 小易有一块n*n的棋盘，棋盘的每一个格子都为黑色或者白色，小易现在要用他喜欢的红色去涂画棋盘。
    // 小易会找出棋盘中某一列中拥有相同颜色的最大的区域去涂画，帮助小易算算他会涂画多少个棋格。
    // 输入描述:
    // 输入数据包括n+1行：
    // 第一行为一个整数n(1 ≤ n ≤ 50),即棋盘的大小
    // 接下来的n行每行一个字符串表示第i行棋盘的颜色，'W'表示白色，'B'表示黑色
    // 输出描述:
    //     输出小易会涂画的区域大小
    // 输入例子:
    //     3
    // BWW
    // BBB
    // BWB
    // 输出例子:
    //     3
    function k21(a){
        data.push(a);
        var n = parseInt(data[0]);
        if(data.length>n){
            var arr = data.slice(1);
            var arr1=[];
            for(var i=0;i<n;i++){
                arr1.push(arr[i]);
            }
        }
    }

    // 小易参与了一个记单词的小游戏。游戏开始系统提供了m个不同的单词，小易记忆一段时间之后需要在纸上写出他记住的单词。
    // 小易一共写出了n个他能记住的单词，如果小易写出的单词是在系统提供的，将获得这个单词长度的平方的分数。
    // 注意小易写出的单词可能重复，但是对于每个正确的单词只能计分一次。
    // 输入描述:
    // 输入数据包括三行：
    // 第一行为两个整数n(1 ≤ n ≤ 50)和m(1 ≤ m ≤ 50)。以空格分隔
    // 第二行为n个字符串，表示小易能记住的单词，以空格分隔，每个单词的长度小于等于50。
    // 第三行为m个字符串，系统提供的单词，以空格分隔，每个单词的长度小于等于50。
    // 输出描述:
    // 输出一个整数表示小易能获得的分数
    // 输入例子:
    //     3 4
    // apple orange strawberry
    // strawberry orange grapefruit watermelon
    // 输出例子:
    //     136
    function k22(a){
        data.push(a);
        if(data.length>2){
            var arr1=data[0].split(" ");
            var n=parseInt(arr1[0]),m=parseInt(arr1[1]);
            var sore=0,re=[];
            var arr2=data[1].split(" ");
            var arr3=data[2].split(" ");
            arr2.forEach(function(c){
                arr3.forEach(function(d){
                    if(d==c){
                        if(re.indexOf(d)==-1){re.push(d)}
                    }
                })
            })
            re.forEach(function(e){
                var c=Math.pow(e.length,2);
                sore+=c;
            })
            console.log(sore);
        }
    }

    // 小易有n块砖块，每一块砖块有一个高度。小易希望利用这些砖块堆砌两座相同高度的塔。
    // 为了让问题简单，砖块堆砌就是简单的高度相加，某一块砖只能使用在一座塔中一次。
    // 小易现在让能够堆砌出来的两座塔的高度尽量高，小易能否完成呢。
    // 输入描述:
    // 输入包括两行：
    // 第一行为整数n(1 ≤ n ≤ 50)，即一共有n块砖块
    // 第二行为n个整数，表示每一块砖块的高度height[i] (1 ≤ height[i] ≤ 500000)
    // 输出描述:
    //     如果小易能堆砌出两座高度相同的塔，输出最高能拼凑的高度，如果不能则输出-1.
    // 保证答案不大于500000。
    // 输入例子:
    // 3
    // 2 3 5
    // 输出例子:
    //     5
    function k23(a){
        data.push(a);
        if(data.length>1){
            var arr = data[1].split(" ");
        }
    }

    // 易老师购买了一盒饼干，盒子中一共有k块饼干，但是数字k有些数位变得模糊了，看不清楚数字具体是多少了。
    // 易老师需要你帮忙把这k块饼干平分给n个小朋友，易老师保证这盒饼干能平分给n个小朋友。现在你需要计算出k有多少种可能的数值
    // 输入描述:
    //     输入包括两行：
    // 第一行为盒子上的数值k，模糊的数位用X表示，长度小于18(可能有多个模糊的数位)
    // 第二行为小朋友的人数n
    // 输出描述:
    //     输出k可能的数值种数，保证至少为1
    // 输入例子:
    //     9999999999999X
    // 3
    // 输出例子:
    //     4
    k24(a);
    function k24(a){
        data.push(a);
        if(data.length>1){
            var index=data[0].indexOf("X");
            var num = data[0].slice(0,index);
            var a = data[0].slice(index).length;
            var n=Math.pow(10,a+1)-1;
            console.log(num,a);
            var n=parseInt(data[1]);
            var count=0;
            for(var i=0;i<=n;i++){
                var s =  i.toString().split("");
                while (s.length<n){
                    s.pop("0");
                }
                if(c%n==0){
                    count++;
                }
            }
        }
            console.log(count);
    }
});






