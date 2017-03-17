var line = require("readline");
var rl = line.createInterface({input:process.stdin,output:process.stdout})
var data = [];
rl.on("line",function(a){

    // var line = require("readline");
    // var rl =line.createInterface({input:process.stdin,output:process.stdout});
    // rl.on("line",function(a){

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
    function k18(){
        data.push(a);
        data.forEach(function(b){
            var arr = b.split("");
            for(var i=0,l=arr.length;i<l;i++){

            }
        })
    }

    // 小Q最近遇到了一个难题：把一个字符串的大写字母放到字符串的后面，各个字符的相对位置不变，且不能申请额外的空间。
    function k19(a){
        var arr = a.split("");
        var arr1 = [];
        var arr2 = [];
        for(var i=0,len=arr.length;i<len;i++){
            if(/[A-Z]/.test(arr[i])){
                arr2.push(arr[i]);
            }else{
                arr1.push(arr[i])
            }
        }
        console.log(arr1.concat(arr2).toString().replace(/,/g,""));
    }

    // 小Q今天在上厕所时想到了这个问题：有n个数，两两组成二元组，差最小的有多少对呢？差最大呢？
    function k20(a){
        data.push(a);
        if(data.length>1){
            var n = parseInt(data[0]);
            var arr  = data[1].split(" ").sort(function(b,c){return b-c;});
            var big=0,lit=0;
            arr.forEach(function(c){
                if(c==parseInt(arr[n-1])){
                    big++;
                }
            });
            var cha = [];
            for(var i=0;i<n-1;i++){
                cha.push(parseInt(arr[i+1])-parseInt(arr[i]));
            }
            var small = Math.min.apply(null,cha);
            cha.forEach(function(d){
                if(parseInt(d)==small){
                    lit++;
                }
            });
            console.log(lit+" "+big)
        }
    }

    // 有一楼梯共m级，刚开始时你在第一级，若每次只能跨上一级或者二级，要走上m级，共有多少走法？注：规定从一级到一级有0种走法。
    // 给定一个正整数int n，请返回一个数，代表上楼的方式数。保证n小于等于100。为了防止溢出，请返回结果Mod 1000000007的值。
    // 测试样例：
    // 3
    // 返回：2

    function k21(a){
        var n = parseInt(a);

    }



    // 小东和三个朋友一起在楼上抛小球，他们站在楼房的不同层，假设小东站的楼层距离地面N米，
    // 球从他手里自由落下，每次落地后反跳回上次下落高度的一半，并以此类推知道全部落到地面不跳，求4个小球一共经过了多少米？(数字都为整数)
    function k22(a){
        var arr = a.split(",");
        var arr1 = [];
        var ree = 0;
        arr.forEach(function(b){
            var  h = parseInt(b);
            ree += h;
            var s = h;
            while(h>0.0001){
                h = h/2;
                s = s + h;
            }
            arr1.push(s);
        });
        var re = 0;
        arr1.forEach(function(c){
            re += c;
        })
        console.log(Math.round(re+ree));
    };



    // 给定 x, k ，求满足 x + y = x | y 的第 k 小的正整数 y 。 | 是二进制的或(or)运算，例如 3 | 5 = 7。
    // 比如当 x=5，k=1时返回 2，因为5+1=6 不等于 5|1=5，而 5+2=7 等于 5 | 2 = 7。
    function k23(a){
        var arr = a.split(" ");
        var x=parseInt(arr[0]),k=parseInt(arr[1]);
        for(var y=1;y<2000000000;y++){
            var he = x+y;
            var or = x^y;
            if(he==or){
                console.log(y);
                break;
            }
        }
    }

    // 小易经常沉迷于网络游戏.有一次,他在玩一个打怪升级的游戏,他的角色的初始能力值为 a.
    // 在接下来的一段时间内,他将会依次遇见n个怪物,每个怪物的防御力为b1,b2,b3...bn.
    // 如果遇到的怪物防御力bi小于等于小易的当前能力值c,那么他就能轻松打败怪物,并 且使得自己的能力值增加bi;
    // 如果bi大于c,那他也能打败怪物,但他的能力值只能增加bi 与c的最大公约数.那么问题来了,在一系列的锻炼后,小易的最终能力值为多少?
    function k24(a){
        data.push(a);
        if(data.length%2==0){
            var result = [];
            for(var i=0,len=data.length;i<len;i+2){
                var arr = data[i].split(" ");
                var n = parseInt(arr[0]);
                var a = parseInt(arr[1]);
                var arr1 = data[i+1].split(" ");
                arr1.forEach(function(b){
                    if(a>=parseInt(b)){
                        a+=parseInt(b);
                    }else{
                        a += parseInt(gcd(a,parseInt(b)));
                    }
                })
                result.push(a);
                console.log(result.toString().replace(/,/g,"\n"));
                return true;
            }
            }
        //求最大公约数
        function gcd(m ,n){
            if(n) return gcd(n ,m%n);//只要除不尽就不断递归；
            return m;
        }
        }

    // 兰博教训提莫之后,然后和提莫讨论起约德尔人,谈起约德尔人,自然少不了一个人,那 就是黑默丁格------约德尔人历史上最伟大的科学家.
    // 提莫说,黑默丁格最近在思考一个问题:黑默丁格有三个炮台,炮台能攻击到距离它R的敌人
    // (两点之间的距离为两点连续的距离,例如(3,0),(0,4)之间的距离是5),
    // 如果一个炮台能攻击 到敌人,那么就会对敌人造成1×的伤害.黑默丁格将三个炮台放在N*M方格中的点上,并且给出敌人 的坐标.
    function k25(a){
        var arr = a.split(" ");
        var n=0;
        var r = parseInt(arr[0]);
        var x0 = parseInt(arr[arr.length-2]);
        var y0 = parseInt(arr[arr.length-1]);
        for(var i=1,len=arr.length-2;i<len;i++){
            var x = parseInt(arr[i]);
            i++;
            var y = parseInt(arr[i]);
            var s = Math.sqrt(Math.pow((x0-x),2)+Math.pow((y0-y),2));
            if(s<=r){
                n++;
            }
        }
        console.log(n+"x");
    }



    // 有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是5瓶，
    // 方法如下：先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。
    // 然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换一瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝？

    //好未来秋招
    function k26(a){
       data.push(a);
       var re = [];
       data.forEach(function(b){
            if(b==0){
                // console.log(data.slice(0,data.length-1));
                l(data.slice(0,data.length-1));
            }
       })
        function l(arr){
           arr.forEach(function(c){
               var n = parseInt(c);
               var num = 0;
               while(n>=2){
                   if(n==2){
                       num++;
                   }else{
                       var k = n%3;
                       var d = Math.floor(n/3);
                       num+=d;
                        n=0;
                        n=k+d;
                   };
               }
               console.log(num);
               re.push(num);
           })
            // console.log(re.toString().replace(/,/g,"\n"));
        }
    }
    function k40(a){
        var str = a.replace(/\s+/," ");
        var arr = str.split(" ").reverse();
        var s = "";
        arr.forEach(function(b){
            s+= b+ " ";
        })
        console.log(s.slice(0,s.length-1));
    }
    function k41(a){
        data.push(a);
        if(data.length>1){
            console.log(p(data).toString().replace(/,/g,""));
            function p(arr){
                var arr1 = arr[0].split("");
                var arr2 = arr[1].split("");
                var result = [];
                arr1.forEach(function(b){
                   if(arr2.indexOf(b)==-1){
                       result.push(b);
                   }
                })
                return result;
            }
        }
    }
    // 输入两个整数 n 和 m，从数列1，2，3.......n 中随意取几个数,使其和等于 m ,要求将其中所有的可能组合列出来
    function k42(a){
        var arr = a.split(" ");
        var n = parseInt(arr[0]);
        var m = parseInt(arr[1]);
        var num = [];
        for(var i=1;i<=n;i++){
            num.push(i);
        }
       var index = num.indexOf(m);
        var result = [];
        if(index==-1){
            console.log("not have");
            return false;
        }else{
            for(var i=0;i<index;i++){
                index--;
                result.push(num[i]+" "+num[index]);
            }
            result.push(m);
            console.log(result.toString().replace(/,/g,"\n"))
        }
    }
    function k43(a){
        var reg = /\d+/g;
        var arr = a.match(reg);
        var result = [];
        arr.forEach(function(b,c){
            result.push(b.length);
        })
        var max = Math.max.apply(null,result);
        var re = [];
        arr.forEach(function(v){
            if(v.length==max){
                re.push(v);
            }
        })
        console.log(re.toString().replace(/,/g," "))
    }
    function k44(a){
        var arr = a.split(" ");
        var n = arr.length/2;
        var re = [],su=[];
        arr.forEach(function(b){
            if(re.indexOf(b)==-1){
                re.push(b);
            }
        });
        re.forEach(function(c){
            var count = 0;
            arr.forEach(function(d){
                if(c==d){
                    count++;
                }
            });
            su.push(count);
        });
        var result = [];
        su.forEach(function(e,f){
            if(parseInt(e)>=n){
                result.push(re[f]);
            }
        })
        console.log(result.toString().replace(/,/g, " "));
    }

    // 质数校验
    function k45(a){
        data.push(a);
        var n = parseInt(data[0]);
        if(data.length>n){
            var arr = data.slice(1);
            var result = [];
            arr.forEach(function(b){
                var num = parseInt(b);
                if(num==2){
                    result.push("yes");
                }else if(num==1){
                    result.push("error");
                }else{
                    for(var i=1;i<num;i++){
                        var flag = 0;//非质数
                        if(num%i==0&&i!=1){
                            flag = 0;
                            break;
                        }else{
                            flag = 1;
                        }
                    }
                    if(flag==0){
                        result.push("no");
                    }else if(flag==1){
                        result.push("yes");
                    }
                }
            });
            console.log(result.toString().replace(/,/g,"\n"));
            return true;
        }

    }

    // coder消费优惠
    function k46(a){
        data.push(a);
        if(data.length>1){
            var arr1 = data[0].split(" ");
            var n=parseInt(arr1[0]),x=parseInt(arr1[1]);
            var arr2 = data[1].split(" ").sort(function(e,f){return e-f});
            var total = 0;
            arr2.filter(function(b){ total += parseInt(b)});
            if(total<x){
                console.log(-1);
            }else{
                var sum = 0;
                var re = [];
                arr2.forEach(function(d){
                    sum += parseInt(d);
                    if(sum>=x){
                        re.push(sum);
                    }
                })
                console.log(re[0]);
            }
            }
        }



});




