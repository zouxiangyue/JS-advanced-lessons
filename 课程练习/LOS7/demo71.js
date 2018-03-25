//函数的定义
var sum1=function(a,b){return a+b};

function sum2(a,b){return a+b;};

var sum3=new Function("a","b","return a+b");
sum3(6,7);//13

var str="return a+b";
var add=new Function("a","b",str);
add(3,4);//7

console.log(add instanceof Function);//true ,undefined
add instanceof Function;//true

function foo(){console.log("foo");}
foo==window.foo;//true