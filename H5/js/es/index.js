"use strict";

/**
 * Created by Administrator on 2017/3/6.
 */
//cvte机测
$("*").hover(function (e) {
    e.stopPropagation();
    var now = this;
    this.title = this.className;
});