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


    //如果一个数字序列逆置之后跟原序列是一样的就称这样的数字序列为回文序列。例如：
    //{1, 2, 1}, {15, 78, 78, 15} , {112} 是回文序列,
    //{1, 2, 2}, {15, 78, 87, 51} ,{112, 2, 11} 不是回文序列。
    //现在给出一个数字序列，允许使用一种转换操作：
    //选择任意两个相邻的数，然后从序列移除这两个数，并用这两个数字的和插入到这两个数之前的位置(只插入一个和)。
    //现在对于所给序列要求出最少需要多少次操作可以将其变成回文序列。
    //输入描述:
    //输入为两行，第一行为序列长度n ( 1 ≤ n ≤ 50)
    //第二行为序列中的n个整数item[i]  (1 ≤ iteam[i] ≤ 1000)，以空格分隔。
    //输出描述:
    //输出一个数，表示最少需要的转换次数
    //输入例子:
    //4
    //1 1 1 3
    //输出例子:
    //2
    data.push(a);
    play1(data);
    function play1(arr){
        var arr1 = arr[1].split("");
        p(arr1);
        function p(arr2){
            for(var i=0,len=arr2.length;i<len;i++){
                var a = parseInt(arr2[i])+parseInt(arr2[i+1]);
                var arr3 = arr2.splice(i,0,a);
                if(arr3==)

            }
        }




    }









































});




