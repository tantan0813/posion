/**
 * Created by Administrator on 2017/3/27.
 */
$(document).ready (function(){
    // 实现一个函数，运算结果可以满足如下预期结果：
    // add(1)(2) // 3
    // add(1, 2, 3)(10) // 16
    // add(1)(2)(3)(4)(5) // 15
    // 要点：高阶函数、reduce、valueOf/toString（自动调用）
    function add(){
        var args = Array.prototype.slice.call(arguments);
        var fn = function () {
            var arg_fn = Array.prototype.slice.call(arguments);
            return add.apply(null, args.concat(arg_fn));
        }
        fn.toString = function () {

            return args.reduce(function(a, b) {
                return a + b;
            })
        }
        // fn.valueOf = function () {
        //     return args.reduce(function(a, b) {
        //         return a + b;
        //     })
        // }
        return fn;
    }
    console.log(add(1,2,3)(4,6)(9,0)(10,111)(444)(7));
//======================================================================================================================
    //参数传递  立即执行函数
    var test = (function(a) {
        return function(b) {
            console.log(a,b);
            return a + b;
        }
    }(function(a, b) {
        return a;
    }(1, 2)));
    console.log(test(4)); //输出什么？？？？
//======================================================================================================================
    //立即执行函数
    var foo = function(){ console.log("立即执行函数1") };
    function fo(){ console.log("立即执行函数1") };
    foo();fo();

    // 在function前面加！、+、 -甚至是逗号等到都可以起到函数定义以后立即执行的效果，
    // 而（）、！、+、-、=等运算符将函数声明转换成函数表达式，消除了函数表达式和函数声明的歧义，
    // 告诉javascript引擎这是一个函数表达式，不是函数声明，可以在函数体后面加括号定义完立即执行。
    (function(a){
        console.log("立即执行函数"+a);
    }(2));
    (function foo(a){
      console.log("立即执行函数"+a);
    }(2));

    !function(a){
        console.log("立即执行函数"+a);
    }(3);
    +function(a){
        console.log("立即执行函数"+a);
    }(3);
    -function(a){
        console.log("立即执行函数"+a);
    }(3);

    var fn=function(a){
        console.log("立即执行函数"+a);
    }(4);

    var elems = document.getElementsByTagName( 'section' );
    for ( var i = 0; i < elems.length; i++ ) {
        elems[ i ].addEventListener( 'click', function(e){
            e.preventDefault();
            alert( 'I am link #' + i );
        }, 'false' );
    }
    var elem = document.getElementsByTagName( 'section' );
    for ( var i = 0; i < elems.length; i++ ) {
        (function( lockedInIndex ){
            elems[ i ].addEventListener( 'click', function(e){
                e.preventDefault();
                alert( 'I am link #' + lockedInIndex );
            }, 'false' );
        })( i );
    }
    //tips:addEventListener的第三个参数为useCapture，是一个boolean值，可以为ture或false。也可以不写，不写的时候默认为false。
    // 当将它设置为false时，执行的是事件冒泡（Bubble）机制，也就是由内向外执行，最具体的元素先接收事件，再逐级传递给它的父元素；
    // 当设置为ture，执行的是事件捕获（Capture）机制，也就是由外向内执行，与事件冒泡正好相反，
    // 它认为当某个事件发生时，父元素应该更早接收到事件，具体元素则最后接收到事件。
    // 当然，如果我们不是同时给父元素和子元素都设置了事件的话，这个属性的取值是不造成影响的。

    //模块模式
    var counter = (function(){
        var i = 0;
        return {
            get: function(){
                console.log(i);
                return i;
            },
            set: function( val ){
                i = val;
                console.log(val);
            },
            increment: function() {
                console.log(++i);
                return ++i;
            }
        };
    }());
// counter其实是一个对象,数据会累积处理结果
    counter.get(); // 0
    counter.set(3);
    counter.increment(); // 4
    counter.increment(); // 5
});