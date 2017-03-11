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


























});




