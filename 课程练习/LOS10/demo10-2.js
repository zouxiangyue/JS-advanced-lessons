//js的词法作用域具有静态性,这种结构决定了变量的作用域
//因此,词法作用域不会因函数的调用位置的改变而改变函数体内的内容和结果;

var name="fun1";
function fun1(){
    console.log(nane);//fun1
}
function fun2(){
    var name="fun2";
    console.log(name);//fun2
    fun1();//链接到函数fun1(),只能识别到name="fun2",只要调用fun1(),永远输出fun1;
};
console.log(name)//fun1
fun2();

//当函数的返回值为函数时;静态性的词法作用域无效;
var name="fun1";
function fun1(){
   var b="fun2";
   return function fun2(){ return b;}
};
console.log(fun1());//function fun2(){ return b;}
console.log(fun1()());//fun2

//new function
var name="dun1";
function fun1(){
   var name="fun2";
   return new Function("return b;")
};
console.log(fun1());//new Function("return b;")
console.log(fun1()());//fun2

