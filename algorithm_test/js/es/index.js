"use strict";

/**
 * Created by Administrator on 2017/2/17.
 */
window.onload = function () {
    var str_01 = "3 9 6 8 -10 7 -11 19 30 12 23 5";
    // find_k(str_01);
    function find_k(str) {
        var value = str.split(" ");
        var len = value.length,
            result = [],
            k;
        for (var i = 0; i < len; i++) {
            if (value[i] != "") {
                result.push(value[i]);
            }
        }
        k = result.pop();
        result.sort(function compare(a, b) {
            return a - b;
        });
        console.log(result.slice(0, k).toString().replace(/,/g, " "));
        return result.slice(0, k).toString().replace(/,/g, " ");
    }

    var str_02 = "hello world";
    // find_length(str_02);
    function find_length(str) {
        var s = str.split(" "),
            s1;
        s1 = s[s.length - 1];
        console.log(s1.length);
        return s1.length;
    }

    var str_03 = "nhrwlbcc8m7c5hih9mhalw98k0322wf2jjm47kk",
        key = "t";
    // find_time(str_03,key);
    console.log(str_03.indexOf("t"));
    function find_time(str, key) {
        var timer = 0;
        var str = str.split("");
        console.log(str);
        for (var i = 0, len = str.length; i < len; i++) {
            if (key == str[i]) {
                timer++;
            }
        }
        console.log(timer);
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
                count(start, end);
            }, 100);
        }
        return {
            cancel: function cancel() {
                clearTimeout(st);
            }
        };
    }

    functionFunction('Hello')('world');
    function functionFunction(str) {
        var f = function f(s) {
            return str + ", " + s;
        };
        console.log(f);
        return f;
    }
};