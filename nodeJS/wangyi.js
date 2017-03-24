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
    k6(a);
    function k6(a){
        data.push(a);
        if(data.length>1){
            var arr = data[1].split(" ");

        }
        function p(s){
            var arr = s.split(",");
            var sum=0,su=1;
            arr.forEach(function(b){
                sum+=parseInt(b);
                su*=parseInt(b);
            })
            if(sum>su){
                return true;
            }else{
                return false;
            }
        }
    }
});