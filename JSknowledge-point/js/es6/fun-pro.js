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
    console.log("非纯函数splice",arr.splice(1,2,3));

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
    var compose=function(f,g){
        return function(x){
            return f(g(x));
        }
    };
    var f=function(){

    }
    console.log(compose(2,4));

});