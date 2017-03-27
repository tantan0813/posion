/**
 * Created by Administrator on 2017/3/27.
 */
window.onload = function(){
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
    console.log(add(1,2,3)(4,6)(9,0)(10,111));
    var n=70;
    console.log(n.toString().length);
}