/**
 * Created by Administrator on 2017/1/10.
 */
window.onload = function () {
    //array common function
    array(); //array five function
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function array() {
        var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            arr2 = [],
            arr3 = [],
            arr4 = [];
        arr2[0] = "a";
        arr2[1] = "b";
        arr2[2] = "c";
        arr2[3] = "d";
        arr2[4] = "e";
        arr2[5] = "f";
        arr2[6] = "hao";
        arr2[7] = "cuo";
        arr2[8] = "dui";
        arr2[9] = "yes";
        arr2[10] = "no";
        //index of
        index_of();
        function index_of() {
            var index_01 = arr1.indexOf(1),
                index_02 = arr2.indexOf("hao"),
                //返回匹配的索引值
            index_03 = arr2.indexOf("ye"); //未有匹配值，返回-1
            console.log("indexof匹配成功：" + index_01, index_02, "未匹配成功：" + index_03);
        }
        filter_01();
        function filter_01() {
            arr3 = arr2.filter(function (a) {
                return a.length == 3;
            });
            console.log(arr3);
        }

        arr1.forEach(function (item, index) {
            if (item > 5) arr4.push(item);
        });
        console.log(arr4, arr1);

        arr1.map(function (a) {
            if (a < 5) a += 5 && console.log(a += 5);
        });
        console.log(arr1);
        reduce_01(); //reduce()累加器
        function reduce_01() {
            arr4 = arr1.reduce(function (a, b) {
                return a - b;
            });
            console.log(arr4);
        }
        console.log(arr1.findIndex(function (a) {
            a == 10; //findindex测试每一个数字是否等于1，有的话返回该值的索引值.
            // a == 1000;//findindex测试每一个数字是否等于1000，没有的话返回-1.
        }));
        arr1.fill(8, 2, 9);
        console.log(arr1);

        var arr_05 = arr1.keys();
        console.log(arr_05.next().value, arr_05.next().value, arr_05.next().value);
        console.log(arr_05.next().value, arr_05.next().value, arr_05.next().value);
    };
    color(); //rgb随机取色。
    function selectfrom(lowValue, highValue) {
        var choice = highValue - lowValue + 1;
        return Math.floor(Math.random() * choice + lowValue);
    };
    function color() {
        var target = Array.prototype.slice.call(document.getElementsByClassName("boll"));
        var target_01 = Array.from(target);
        console.log(target_01 instanceof Array);
        console.log(target instanceof Array);
        target.forEach(function (item) {
            item.style.background = "rgb(" + selectfrom(0, 255) + "," + selectfrom(0, 255) + "," + selectfrom(0, 255) + ")";
        });
    }

    //reg正则
    regexp();
    function regexp() {
        var str = "javascript",
            d = "33 44 55 jj kk 11 ll",
            c;
        // i：执行不区分大小写的匹配
        // g：执行一个全局匹配，简言之，即找到所有的匹配，而不是在找到第一个之后就停止
        // m：多行匹配模式，^匹配一行的开头和字符串的开头，$匹配行的结尾和字符串的结尾
        console.log(str.search(/asc/i)); //search返回第一个子串匹配的位置
        console.log(d.match(/\d+/g), d.match(/\d+/g) instanceof Array); //match返回所有符合正则的子串数组
        c = d.split(" ");
        console.log(c, c instanceof Array); //split()按一定规则把字符串分割成数组

        //exec(),参数为字符串，类似于match，对字符串执行正则表达式，返回所有符合正则的子串数组
        var text = "JavaScript is more fun than Java!";
        var p = /javas/gi,
            r;
        while ((r = p.exec(text)) != null) {
            console.log(r, "lastIndex:" + p.lastIndex);
        }
        //test(),参数为字符串，返回true\\false
        console.log(p.test("jiavaspcrit"));
    }
};