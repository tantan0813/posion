"use strict";$(document).ready(function(){for(var n=[],o=0;o<100;o++)n.push(o);console.log(n),console.log("纯函数slice",n.slice(1)),console.log("非纯函数splice",n.splice(1,2,3));var t=18,r=function(n){return n>t};console.log(r(19));var c=function(n){return function(o){return n+o}},e=function(n){return function(o){return n+o}},u=c(2),i=e(200);console.log(u(2),i(50)),console.log(u(5),i(500));var f=function(n,o){return function(t){return n(o(t))}},l=function(n){return n+3},s=function(n){return n+2};console.log(f(l,s)(2));var a=function(n,o){return function(t){return n(o(t))}},p=function(n){return n+1},g=function(n){return n+3};console.log(a(p,g)(0));var v=function(n,o){return o.map(n)},m=function(n){return n.toUpperCase()};console.log("point free:"+v(m,["2","3425","2","dsdsds"]));for(var h=[{c:"1"},{c:"2"},{c:"3"},{c:"4"},{c:"5"},{c:"6"},{c:"7"},{c:"1"},{c:"2"},{c:"3"},{c:"4"},{c:"5"},{c:"6"},{c:"7"},{c:"1"}],d=[],o=0;o<h.length;o++)d.push(h[o].c);var y=h.map(function(n){return n.c});console.log(d,y);var _=$("#test"),w=document.getElementById("test");console.log(_==w,_[0]==w);var N=function(n){this._value=n+3};N.of=function(n){return new N(n)},N.prototype.map=function(n){return N.of(n(this._value))};var B=N.of(3).map(function(n){return n+1}).map(function(n){return n}),C=N.of(3).map(function(n){return n+1}).map(function(n){return""});console.log(B,C);var E=function(n){this._value=n};E.of=function(n){return new E(n)},E.prototype.map=function(n){return this.isNothing()?E.of(null):E.of(n(this._value))},E.prototype.isNothing=function(){}});