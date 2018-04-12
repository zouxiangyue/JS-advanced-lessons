//闭包的作用
//可通过闭包的形式访问函数内部的局部变量,使函数中的变量保存不被释放
function foo(){
    var a=100;
    return function(){
        console.log(++a);
    }
}
var f=foo();//因为闭包,a常驻内存
f();//101
f();//102