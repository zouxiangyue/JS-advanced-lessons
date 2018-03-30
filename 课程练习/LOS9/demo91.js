//JS脚本语言边解析边运行
//var
//解析提升
console.log(a);//undefind，a未定义，不会报错
var a=2;
console.log(a);//2

//在编译器中解析为
var a;
console.log(a);
a=2;
console.log(a);

console.log(a,b);//undefined,undefined
var a=1;
console.log(a,b)//1,undefined
var b=2;
console.log(a,b)//1,2

//function
foo();//foo2
function foo(){console.log("foo1")};
function foo(){console.log("foo2")}

//等价于
function foo(){console.log("foo1")};
function foo(){console.log("foo2")};
foo();//foo

//当var和function同时出现
fun1();//报错
var fun1=function(){console.log("fun1")};
fun1();//fun1

//等价于
//编辑器会先检测到var，把var fun1=function(){console.log("fun1")}当做变量赋值，然后进行提升
var fun1;
fun1();//报错
fun1=function(){console.log("fun1")};
fun1();//fun1

console.log(fun1);//undefined
var fun1=function(){console.log("fun1")};
fun1();//fun1

fun2();//fun2
function fun2(){console.log("fun2")};
var fun3=function fun2(){console.log("fun3")};
fun3();//fun3

//等价于
function fun2(){console.log("fun2")};
var fun3;//fun2
fun3=function fun2(){console.log("fun3")};
fun3();//fun3