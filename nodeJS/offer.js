var line = require("readline");
var rl = line.createInterface({input:process.stdin,output:process.stdout})
var data = [];
rl.on("line",function(a){

    // 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
    // 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
    function Find(target, array) {
        var n = parseInt(target);
        var l = array.length //行数
        var len = array[0].length //列数
        var flag = 0;
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < len; j++) {
                var c = parseInt(array[i][j]);
                if (n == c) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                break;
            }
        }
        if (flag == 1) {
            console.log("yes");
        } else {
            console.log("no")
        }

    }

    // 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy
    function replace(str){
        return str.replace(/\s/g,"%20");
    }

    // 输入一个链表，从尾到头打印链表每个节点的值。
    function printListFromTailToHead(head) {
            var currNode = this.head;
            while (!(currNode.next == null)){
                // document.write(currNode.next.element + '&nbsp;');
                console.log(currNode.next.element+" ");
                currNode = currNode.next;
            }
    }

    // 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
    // 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
    function reConstructBinaryTree(pre, vin){
        if (!pre || pre.length === 0) {
            return;
        }
        var treeNode = {
            val: pre[0],//先序遍历第一个位置是根节点treeNode;
        }
        for(var i = 0; i < pre.length; i++) {
            if (vin[i] === pre[0]) {
                // 中序遍历的根节点位置在中间p，在p左边的肯定是treeNode的左子树的中序数组，p右边的肯定是treeNode的右子树的中序数组；
                treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
                // 另一方面，先序遍历的第二个位置到p，也是treeNode左子树的先序子数组，剩下p右边的就是treeeNode的右子树的先序子数组，
                // 把四个数组找出来，分左右递归调用即可。
                treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
            }
        }
        return treeNode;
        console.log(treeNode)
    }

    // 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示

    function NumberOf1(n){
        var m = 0;
        if(n>=0){
            var a = parseInt(n).toString(2).split("");
            a.forEach(function(b){
                if(b=="1"){
                    m++;
                }
            })
            console.log(m);
            return m;
        }else{
            m++;
            var num = parseInt(n).toString(2).split("");
            console.log(num);
            var arr2 = [];
            num.forEach(function(c){
                if(c=="0"){
                    arr2.push("1");
                }else if(c=="1"){
                    arr2.push("0");
                }
            })
            var arr = (parseInt(arr2.toString().replace(/,/g,""))+1).toString(2).split("");
            arr.forEach(function(d){
                if(d=="1"){
                    m++;
                }
            })
            console.log(m);
            return m;
        }
    }

    //一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
    //每个台阶都有跳与不跳两种情况（除了最后一个台阶），最后一个台阶必须跳。所以共用2^(n-1)中情况
    function jumpFloorII(number){
        if(number === 0 ){
            return -1;
        }else{
            return Math.pow(2,number-1);
        }
    }

    //我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
    function jumpFloor(number){
        if (number < 0) {
            return -1;
        } else if (number <= 2) {
            return number
        }
        var arr = [];
        arr[0] = 1;
        arr[1] = 2;
        for (var i = 2; i < number; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[number - 1];
    }


    // JavaScript回文(网易回文)
    function k1(){
        if(data.length>1){
            var arr = data[1].split(" ");
            var result = 0;
            function fn(arr){
                var revArr = arr.slice(0).reverse();//反转数组
                if(revArr.join("")==arr.join("")){
                    return result;
                }else if (revArr[0]==arr[0]) {//如果首尾相等，删除首尾
                    arr.shift();
                    arr.pop();
                    return fn(arr);//递归
                }else {
                    revArr.splice(0,2,parseInt(revArr[0])+parseInt(revArr[1]))//合并处理
                    arr.splice(0,2,parseInt(arr[0])+parseInt(arr[1]))
                    arr[0]>revArr[0]?fn(revArr):fn(arr);
                    return ++result
                }
            }
            console.log(fn(arr))
        }
    }


    //网易优雅的点

    function k2(a){
        function fn(Powr){
            var sum = [];
            var less = 0;
            if(typeof Powr == "number"){
                for(var i=0;i<=Math.sqrt(Powr);i++){
                    var coordinate = Math.sqrt(Powr-Math.pow(i,2))//勾股定理
                    if(coordinate.toString().split(".")[1]==undefined){ //验证开方后是否为整数
                        if(i==0){
                            less=4; //验证是否存在有圆点的情况
                        }
                        sum.push({i,coordinate})
                    }
                }
                return sum.length*4-less
            }else{
                return "请输入数字好吗";
            }
        }
        var Powr = parseInt(a);
        console.log(fn(Powr))
    }

    // 小易来到了一条石板路前，每块石板上从1挨着编号为：1、2、3.......
    // 这条石板路要根据特殊的规则才能前进：对于小易当前所在的编号为K的 石板，小易单次只能往前跳K的一个约数(不含1和K)步，即跳到K+X(X为K的一个非1和本身的约数)的位置。
    // 小易当前处在编号为N的石板，他想跳到编号恰好为M的石板去，小易想知道最少需要跳跃几次可以到达。
    // 例如：
    // N = 4，M = 24：
    // 4->6->8->12->18->24
    // 于是小易最少需要跳跃5次，就可以从4号石板跳到24号石板
    // 输入描述:
    // 输入为一行，有两个整数N，M，以空格隔开。
    // (4 ≤ N ≤ 100000)
    // (N ≤ M ≤ 100000)
    // 输出描述:
    //     输出小易最少需要跳跃的步数,如果不能到达输出-1
    // 输入例子:
    //     4 24
    // 输出例子:
    //     5

    function k3(str){
        var arr = str.split(" ");
        var n = parseInt(arr[0]);
        var m = parseInt(arr[1]);
    }

    // 网易黑暗数字☆
    function k4(a){
        var n = parseInt(a);
        function fn(num){
            if(num==1){
                return 3
            }else if(num==2){
                return 9
            }else{
                return 2*fn(num-1)+fn(num-2)
            }
        }
        console.log(fn(n));
    }

    // rev操作
    function k5(str){
        var arr = str.split(" ");
        var x = arr[0].split("").reverse().toString().replace(/,/g,"");
        var y = arr[1].split("").reverse().toString().replace(/,/g,"");
        var x1 = parseInt(x);
        var y1 = parseInt(y);
        var re = (x1 + y1).toString().split("").reverse().toString().replace(/,/g,"");
        console.log(parseInt(re))
    }

    // 最大公约数
    function k6(a){
        var n = parseInt(a);
        var re = [];
        for(var i=1;i<=n;i++){
            var arr = []
            for(var j=1;j<=i;j++){
                if(i%j==0&&j%2!=0){
                   arr.push(j);
                }
            }
            var max = Math.max.apply(null,arr);
            re.push(max);
        }
        var sum = 0;
        re.forEach(function(d){
            sum += parseInt(d);
        })
        console.log(sum);
    }

    // 买苹果
    function k7(a){
        var freq = 0;
        function fn(num){
            if(!(num%2)&&num>=12){
                if(num==12||num==14||num==16){
                    return freq+=2;
                }else if(num==18){
                    return freq+=3;
                }else{
                    ++freq
                    return fn(num-8)
                }
            }else if(num==6||num==8){
                return 1;
            }else{
                return -1;
            }
        }
        console.log(fn(parseInt(a)));
    }

    // 糖果数
    function k8(str){
        var arr = str.split(" ");
        var a = (parseInt(arr[0])+parseInt(arr[2]))/2;
        var b = (parseInt(arr[1])+parseInt(arr[3]))/2;
        var c = parseInt(arr[3])-b;
        if(a.toString().replace(/,/g,"").indexOf(".")==-1&&b.toString().replace(/,/g,"").indexOf(".")==-1&&c.toString().replace(/,/g,"").indexOf(".")==-1){
            if(a>=0&&b>=0&&c>=0){
                console.log(a,b,c);
            }else{
                console.log("No");
            }
        }else{
            console.log("No");
        }

    }

    function k9(str){
            var arr = str.split(" ");
            var arr1 = arr.slice(0,arr.length);
            var k = parseInt(arr[arr.length]);
            arr1.sort(function(b,c){return b-c;});
            console.log(arr1.slice(0,k).toString().replace(/,/g," "))
            return arr1.slice(0,k).toString().replace(/,/g," ");
        }


    // k(a);
    // function k(str){
    //     var arr  =str.split(" ");
    //     var len = parseInt(arr.length/2);
    //     var re = [];
    //     var n = [];
    //     arr.forEach(function(b){
    //         if(re.indexOf(b)==-1){
    //             re.push(b);
    //         }
    //     });
    //     re.forEach(function(c){
    //         var m = 0;
    //         arr.forEach(function(d){
    //             if(c==d){
    //                 m++;
    //             }
    //         })
    //         n.push(m);
    //     })
    //     var arr2 = [];
    //     n.forEach(function(e,f){
    //         if(e>=len){
    //             arr2.push(f);
    //         }
    //     })
    //     var result = [];
    //     arr2.forEach(function(j){
    //         var i = parseInt(j);
    //         result.push(re[i]);
    //     })
    //     console.log(result.toString().replace(/,/g," "))
    // }


    // 给定一个字符串，请你将字符串重新编码，将连续的字符替换成“连续出现的个数+字符”。比如字符串AAAABCCDAA会被编码成4A1B2C1D2A。

    // function k1(str){
    //     var arr = str.split("");
    //     var re = [];
    //     for(var i=0,len=arr.length;i<len;i++){
    //             var n = 1;
    //             var first = arr[i];
    //             var next=arr[++i];
    //             while(next==first&&i!=len){
    //                 next=arr[++i];
    //                 ++n;
    //             }
    //             re.push(n);
    //             re.push(first);
    //             console.log(re);
    //         }
    //     console.log(re.toString().replace(/,/g,""));
    //
    // }

    // 在一个N*N的数组中寻找所有横，竖，左上到右下，右上到左下，四种方向的直线连续D个数字的和里面最大的值
    function k10(str){
        var arr  = str[0].split(" ");
        var l = parseInt(arr[0]);
        if(str.length>l){
            var arr1 = [];
            for(var i=1;i<=l;i++){
                arr1[i] = str[i].split(" ");
            }
            var sum = [];
           //每一行
            for(var j=1;j<=l;j++){
                var cou = 0;
                var c = 0;
                while(c<l){
                    cou += parseInt(arr1[j][c]);
                    c++;
                }
                sum.push(cou);
            }
            //每一列
            for(var k=1;k<=l;k++){
                var cou1 = 0;
                var c1 = 0;
                while(c1<l){
                    cou1 += parseInt(arr1[k][c1]);
                    c1++;
                }
                sum.push(cou1);
            }
            // 左上到右下
            var s = 0;
            for(var n=1;n<=l;n++){
                s += parseInt(arr1[n][n]);
                console.log(s)
            }
            sum.push(s);
            console.log(sum,sum.length);
            //左上到右下
            var ss = 0;
            for(var w=l;w>0;w--){
                ss += parseInt(arr1[w][w]);
                console.log(parseInt(arr1[w][w]))
                sum.push(ss);
            }
            sum.push(ss);
            console.log(Math.max.apply(sum))
        }
    }

    // 输入两个字符串，从第一字符串中删除第二个字符串中所有的字符。
    // 例如，输入”They are students.”和”aeiou”，则删除之后的第一个字符串变成”Thy r stdnts.”
    function k11(arr){
        var arr1 = data[0].split("");
        var arr2 = data[1].split("");
        arr2.forEach(function(b){
            arr1.forEach(function(d,e){
                if(b==d){
                    arr1.splice(e,1);
                }
            })
        })
        console.log(arr1.toString().replace(/,/g,""));
    }

    //输入两个整数 n 和 m，从数列1，2，3.......n 中随意取几个数,使其和等于 m ,要求将其中所有的可能组合列出来×
    function k12(str){
        var arr = str.split(" ");
        var n = parseInt(arr[0]);
        var m = parseInt(arr[1]);
        var num = [];
        for(var i=0,len=n;i<=len;i++){
            num.push(i);
        }

    }

    //一年哪几个月有31天？
    function k13(){
        var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
        var re = [];
        arr.forEach(function(b){
           var m = parseInt(b);
           var day = DayNumOfMonth(m);
           if(day==31){
               re.push(m);
           }
        })
        console.log(re.toString().replace(/,/g," "));

        function DayNumOfMonth(Month){
            var  day = new Date(2014,Month,0);
            return day.getDate();
        }
    }

    //洗牌
    function k14(){
        data.push(a);
        var n = parseInt(data[0]);
        if(data.length>n*2){
            pai(data);
        }
        function pai(arr){
            for(var i=0,l=parseInt(arr[0]);i<l;i++){
                me(arr[2*i+1].split(' '),arr[2*i+2].split(' '));
            }
            function me(args,arr) {
                var first=[],
                    result=[],
                    n=parseInt(args[0]),
                    k=parseInt(args[1]);
                for(var x=0;x<k;x++){
                    for(var i=0;i<n;i++){
                        first.push(arr.shift());
                    }
                    for(var j=0;j<n;j++){
                        result.push(arr.pop());
                        result.push(first.pop())
                    }
                    arr=result.reverse();
                    first=[];
                    result=[];
                }
                console.log(arr.join(' '))
            }
        }
    }

    //偶数反转
    function k15(){
        data.push(a);
        if(data.length>1){
            for(var i=0;i<data.length;i++){
                console.log(k(data[2*i+1].split(" ")).toString().replace(/,/g," "));
            }
        }
        function k(arr){
            arr.forEach(function(b,c){
                var e = 0;
                if(b%2==0&&b!=0){
                 e = parseInt(parseInt(b).toString(2).split("").reverse().toString().replace(/,/g,""));
                 arr.splice(c,1,e);
                }
            })
            return arr;
        }
    }

    //按要求处理字符串；
    function k16(){
        data.push(a);
        if(data.length>1){
            var str = data[0];
            console.log(str)
            var n = parseInt(data[1]);
           if(data.length>=n+2){
               var arr = data.slice(2);
               var s = [];
                for(var i=0;i<n;i++){
                   if(s.length<str.length){
                       s = str.split("");
                   }
                    var arr1 = arr[i].split(" ");
                    var ar = s.slice(parseInt(arr1[0]),parseInt(arr[1])+parseInt(arr1[0])+1).reverse();
                    s = s.concat(ar);
                }
                console.log(s.toString().replace(/,/g,""));
           }
        }
    }

    //出专辑  ☆
    function k17(a){
        var arr = a.split(" ");
        var n = parseInt(arr[0]);//歌曲数
        var s = parseInt(arr[1]);//每首歌的时间
        var l = parseInt(arr[2]);//cd时长
        do_something(n,s,l);
        function do_something(n,s,l){
            var songNum = Math.floor((l+1)/(s+1)) > n ? n : Math.floor((l+1)/(s+1)) ;//每张CD可以存放的歌曲数
            if(songNum % 13 == 0){
                songNum -= 1 ;
            }
            var CDnum = Math.ceil(n/songNum) ;
            if( n % songNum != 0 && (n % songNum)%13 == 0 && (n % songNum) == songNum -1){
                CDnum += 1
            }
            console.log(CDnum);
        }

    }



    // 给定一个字符串s，你可以从中删除一些字符，使得剩下的串是一个回文串。如何删除才能使得回文串最长呢？
    // 输出需要删除的字符个数。
    // 输入描述:
    // 输入数据有多组，每组包含一个字符串s，且保证:1<=s.length<=1000.
    // 输出描述:
    //     对于每组数据，输出一个整数，代表最少需要删除的字符个数。
    // 输入例子:
    // abcda
    // google
    // 输出例子:
    //     2
    // 2
    k18();
    function k18(){
        data.push(a);
        data.forEach(function(b){
            var arr = b.split("");
            for(var i=0,l=arr.length;i<l;i++){

            }
        })
    }
});




