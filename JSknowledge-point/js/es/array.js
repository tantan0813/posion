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
    };
    color(); //rgb随机取色。
    function selectfrom(lowValue, highValue) {
        var choice = highValue - lowValue + 1;
        return Math.floor(Math.random() * choice + lowValue);
    };
    function color() {
        var target = Array.prototype.slice.call(document.getElementsByClassName("boll"));
        console.log(target instanceof Array);
        target.forEach(function (item) {
            item.style.background = "rgb(" + selectfrom(0, 255) + "," + selectfrom(0, 255) + "," + selectfrom(0, 255) + ")";
        });
    }
};