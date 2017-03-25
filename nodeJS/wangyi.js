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

    // 考拉有n个字符串字符串，任意两个字符串长度都是不同的。考拉最近学习到有两种字符串的排序方法：
    // 1.根据字符串的字典序排序。例如：
    // "car" < "carriage" < "cats" < "doggies < "koala"
    // 2.根据字符串的长度排序。例如：
    // "car" < "cats" < "koala" < "doggies" < "carriage"
    // 考拉想知道自己的这些字符串排列顺序是否满足这两种排序方法，考拉要忙着吃树叶，所以需要你来帮忙验证。
    // 输入描述:
    // 输入第一行为字符串个数n(n ≤ 100)
    // 接下来的n行,每行一个字符串,字符串长度均小于100，均由小写字母组成
    // 输出描述:
    //     如果这些字符串是根据字典序排列而不是根据长度排列输出"lexicographically",
    //     如果根据长度排列而不是字典序排列输出"lengths",
    //     如果两种方式都符合输出"both"，否则输出"none"
    // 输入例子:
    //     3
    // a
    // aa
    // bbb
    // 输出例子:
    //     both
    k10(a);
    function k10(a){
        data.push(a);
        var n=parseInt(data[0]);
        if(data.length>n){
            var arr = data.slice(1);
            var arr1 = data.slice(1);
            var arr2 = arr.sort();
            var n=0,m=0;
            if(arr1==arr2){
                n=1;
            }
           for(var i=0,len=arr.length;i<len;i++){
               console.log(arr[i],arr[i+1].split(""),typeof arr[i]);
                var s1=arr[i].split("");
                var s2=arr[i+1].split("");
                if(s1.length>s2.length){
                    m=0;
                    break;
                }
                m=1;
           }
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
});