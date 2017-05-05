$(document).ready(function(){
//=============================函数式编程=============================

    //===========纯函数===========
    var arr=[];
    for(var i=0;i<100;i++){
        arr.push(i);
    }
    console.log(arr);
    //纯函数对于固定输入，输出固定//降低系统复杂度、缓存机制，
    console.log("纯函数slice",arr.slice(1));
    //纯函数对于固定输入，输出非固定
    console.log("非纯函数splice",arr.splice(1,2,3));//splice返回删除的数组

    var min = 18;
    // 普通function函数和箭头函数的行为有一个微妙的区别，箭头函数没有它自己的this值，
    // 箭头函数内的this值继承自外围作用域。
    var checkage = age => age > min;//checkage依赖于外部min 非纯函数
    console.log(checkage(19));

    //===========函数的柯里化===========
    // 传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
    //柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，
    //缓存机制
    var add01=function(x){
        return function(y){
            return x+y;
        }
    }

    var add02=x=>(y=>x+y);

    var add2=add01(2);//第一传参
    var add200=add02(200);

    console.log(add2(2),add200(50));//二次传参
    console.log(add2(5),add200(500));//二次传参

    //===========函数组合===========
    //ES5
    var compose01=function(f,g){
        return function(x){
            return f(g(x));
        }
    };
    var f=function(x){
        return x+3;
    };
    var g=function(y){
        return y+2;
    };
    console.log(compose01(f,g)(2));
    //ES6
    var compose02=(f,g)=>(x=>f(g(x)));

    var p1=x=>x+1;
    var p2=x=>x+3;

    console.log(compose02(p1,p2)(0));

    //===========Point Free===========
    var map=(f,arr)=>arr.map(f);//map并不改变原数组
    var toUpperCase=word=>word.toUpperCase();
    console.log("point free:"+map(toUpperCase,["2","3425","2","dsdsds"]));

    //===========声明式与命令式代码===========
    var con=[
        {c:"1"},
        {c:"2"},
        {c:"3"},
        {c:"4"},
        {c:"5"},
        {c:"6"},
        {c:"7"},
        {c:"1"},
        {c:"2"},
        {c:"3"},
        {c:"4"},
        {c:"5"},
        {c:"6"},
        {c:"7"},
        {c:"1"},
    ];
    //声明式
    var arr1=[];
    for(var i=0;i<con.length;i++){
        arr1.push(con[i].c);
    }
    //命令式
    var arr2=con.map(c=>c.c);
    console.log(arr1,arr2);
    //结论：声明式依赖于外部数据i，命令式不依赖外部数据

    //===========容器、function===========
    var foo1=$("#test");//$的不是原生dom对象，而是jQuery对原生的一种封装，某种意义而言foo1是一种容器
    var foo2=document.getElementById("test");
    console.log(foo1==foo2,foo1[0]==foo2);

    var containter = function(x){
        this._value=x+3;
    }
    containter.of=x=>new containter(x);
    // console.log(containter.of(1));
    // console.log(containter.of(5));
    //必须使用of来使用函数container，容器
    containter.prototype.map=function(f){
        return containter.of(f(this._value));
    };
    //6   10  "103"第一个map传入值6结果
    var c =containter.of(3).map(x=>x+1).map(x=>x);
    var d =containter.of(3).map(x=>x+1).map(x=>"");
    console.log(c,d);

    var maybe =function(x){
        this._value=x;
    }
    maybe.of=function(x){
        return new maybe(x);
    };
    maybe.prototype.map=function(f){
        return this.isNothing()?maybe.of(null):maybe.of(f(this._value));
    }
    maybe.prototype.isNothing=function(){

    };

});