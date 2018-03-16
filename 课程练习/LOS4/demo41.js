//argument类数组，函数的参数列表
function f(a){
    console.log(arguments[0])//1
    console.log(arguments[1])//2
    console.log(arguments[2])//3
 };
 f(1,2,3)

 function foo(){
	var a=b=3;//
}
foo();
console.log("b:",b);//3
console.log("a:",a);//报错

function s(){
    a=0;
 };
 s();
 console.log(a);//5

