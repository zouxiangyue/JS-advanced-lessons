//闭包:由函数和与其相关的引用环境组合而成的实体
//是词法作用域中的函数和其相关的包裹体
function createInc(starValue){//startValue常驻内存,相当于全局变量
    return function(step){
        startValue+=step;
        return StartValue;
    }
}
var inc=createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
console.log(inc(5));//13
inc=createInc(5);
console.log(inc(1));//6

function createInc(starValue){
    return function(step){
        startValue+=step;
        return StartValue;
    }
}
var inc=createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
console.log(inc(5));//13
var inc2=createInc(5);
console.log(inc(1));//14
console.log(inc2(1));//6

var x=1;
function f(){
    console.log(++x);
};
f();//2
f();//3
//若一个函数离开了它被创建时的作用域,它还是会与这个作用域的相关联
//闭包是一个函数加上该函数创建时所建立的作用域
function foo(){
    var i=0;
    function bar(){
        return ++i;
    }
    return bar;
};
var a=foo();
var b=foo();
console.log(a());//1
console.log(a());//1
console.log(b());//1,a和b不是同一个闭包
/*
var c=foo;
var d=foo()();
console.log(c);
console.log(c());
console.log(c()());
console.log(d);
*/ 