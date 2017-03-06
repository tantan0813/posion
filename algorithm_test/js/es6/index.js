/**
 * Created by Administrator on 2017/2/17.
 */
window.onload = function() {
    var str_01 = "3 9 6 8 -10 7 -11 19 30 12 23 5";
    // find_k(str_01);
    function find_k(str) {
        var value = str.split(" ");
        var len = value.length, result = [], k;
        for (var i = 0; i < len; i++) {
            if (value[i] != "") {
                result.push(value[i]);
            }
        }
        k = result.pop();
        result.sort(function compare(a, b) {
            return a - b;
        })
        console.log(result.slice(0, k).toString().replace(/,/g, " "));
        return result.slice(0, k).toString().replace(/,/g, " ");
    }

    var str_02 = "hello world";
    // find_length(str_02);
    function find_length(str) {
        var s = str.split(" "), s1;
        s1 = s[s.length - 1];
        console.log(s1.length);
        return s1.length;
    }

    var str_03 = "nhrwlbcc8m7c5hih9mhalw98k0322wf2jjm47kk", key = "t";
    // find_time(str_03,key);
    // console.log(str_03.indexOf("t"));
    function find_time(str, key) {
        var timer = 0;
        var str = str.split("");
        // console.log(str);
        for (var i = 0, len = str.length; i < len; i++) {
            if (key == str[i]) {
                timer++;
            }
        }
        // console.log(timer);
        return timer;
    }

    // add(6,3);
    function add(num1, num2) {
        while (num2 != 0) {
            var temp = num1 ^ num2;
            num2 = (num1 & num2) << 1;
            num1 = temp;
        }
        console.log(num1);
        return num1;
    }

    // duplicates([1,2,3,4,5,6,7,8,12,,3,4,4,5,6,10])
    function duplicates(arr) {
        var result = [];
        arr.forEach(function (elem) {
            if (arr.indexOf(elem) != arr.lastIndexOf(elem) && result.indexOf(elem) == -1) {
                result.push(elem);
            }
        });
        console.log(result);
        return result;
    }

    // count(1,10);
    function count(start, end) {
        var st;
        if (start <= end) {
            console.log(start);
            start++;
            st = setTimeout(function () {
                count(start, end)
            }, 100);
        }
        return {
            cancel: function () {
                clearTimeout(st);
            }
        }
    }

    var data = [];
    data[0] = "nhrwlbcc8m7c5hih9mhalw98k0322wf2jjm47kk3ntm9snfrflzzundn7d608usy049asxalzjk7izj6amcqhr8uubc04g52mcjboj2fmge2l6iarizfu4yve5o4i3srf5zgqbg82ckcotdeqp760mc9gzei5dzk5gj9x9yj05o3hle0ii64krkkp5i7blh7nbu3gu5vgi2scyn4yqx3z4vcjbyzhnqkh887izotjkg2l0mit0k14vyn39"
    data[1] = "t";
    // fun11(data);
    function fun11(data) {
        var counter = 0;
        var str = data[0].toString();
        var index = data[1].toString();
        if (isNaN(index)) {
            index.toLowerCase();
            str.toLowerCase().split("");
            un(str, index);
        } else {
            str.split("");
            un(str, index);
        }
        function un(str, index) {
            for (var i = 0, len = str.length; i < len; i++) {
                if (str[i] == index) {
                    counter++;
                }
            }
        }

        console.log(counter);
    }


    // 递归二分查找
    function binarySearch(arr, item, start, end) {
        var end = end || arr.length - 1;
        var start = start || 0;
        var m = Math.floor((start + end) / 2);
        if (item == arr[m]) {
            return m;
        } else if (item < arr[m]) {
            return binarySearch(arr, item, start, m - 1);
        } else {
            return binarySearch(arr, item, m + 1, end);
        }
        return false;
    }

    // 非递归二分查找
    function find(arr, item) {
        var len = arr.length - 1, l = 0;
        while (l <= len) {
            var m = Math.floor((len + l));
            if (arr[m] == item) {
                return m;
            }
            if (item > arr[m]) {
                l = m + 1;
            } else {
                len = m - 1;
            }
        }
        return false;
    }

    // 素数
    // console.log(findSu(1, 10));
    function findSu(start, end) {
        var str = "", n = 0;
        for (var i = start; i <= end; i++) {
            var m = true; //质数
            for (var j = start + 1; j < i; j++) {
                if (i % j == 0) {
                    m = false; //非质数
                    break;
                }
            }
            if (m && i != 2) {
                str = str + i + "，";
                n++; //质数个数+1
            }
        }
        return str;
    }

    //阶乘的和
    // console.log(sum(1,10));
    function sum(start, end) {
        var i=start;
        var n = end;
        var total = 0;
        while (i <= n) {
            var tmp = 1;
            var j = i;
            while (j >= 1) {
                tmp *= j;
                j--;
            }
            total += tmp;
            i++;
        }
        return total;
    }
    // findNum();
    function findNum(){
        var re = /^[0-9]+$/ ;
        var arr = [];
        console.log(1);
        for(var i=0;i<1000;i++){
            var n = Math.sqrt(i);
            console.log(2);
            if(re.test(n)){
                var m = Math.sqrt(i+100);
                console.log(3);
                if(re.test(m)){
                    var d = Math.sqrt(i+168);
                    console.log(4);
                    if(re.test(d)){
                        console.log(5);
                        arr.push(i);
                    }
                }
            }
        }
    }











}