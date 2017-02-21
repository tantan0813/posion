"use strict";

/**
 * Created by Administrator on 2017/2/20.
 */
window.onload = function () {
    var target = $(".contain >div");
    var arr = makeArray(target);
    function makeArray(array) {
        var ret = [];
        if (array != null) {
            var i = array.length;
            // The window, strings (and functions) also have 'length'
            if (i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval) ret[0] = array;else while (i) {
                ret[--i] = array[i];
            }
        }
        return ret;
    }
    target.on("click", function () {
        var index = arr.indexOf(this),
            _none = arr.slice(0, index),
            _has = arr.slice(index + 1);
        // $(_none).fadeOut();
        $(_none).hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
};