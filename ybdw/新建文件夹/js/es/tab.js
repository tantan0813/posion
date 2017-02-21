"use strict";

/**
 * Created by Administrator on 2017/2/21.
 */
window.onload = function () {
    fun6();
    function fun6() {
        var li = document.getElementById("nav").getElementsByTagName("li");
        var content = document.getElementById("context").getElementsByTagName("li");
        var len = li.length;
        for (var i = 0; i < len; i++) {
            li[i].index = i;
            li[i].onclick = function () {
                for (var j = 0; j < len; j++) {
                    li[j].className = "";
                }this.className = "active";
                for (var j = 0; j < len; j++) {
                    content[j].style.display = "none";
                }content[this.index].style.display = "block";
            };
        }
    };
};