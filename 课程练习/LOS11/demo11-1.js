//IIFE立即执行函数表达式

//使用小括号
//立即函数表达式和匿名函数后要加分号,否则可能报错
(function fun(a,b){
    return a+b;
}(2,3));//此处一定要有分号,否则报错
(function fun(a,b){
    return a+b;
})(2,3);//5

//匿名函数
(function(a,b){
    return a+b
}(2,3));


var a=function(){
    console.log("a");
}();//a

0 || (function fun(a,b){
    return a>b?a:b
}(1,2));

!function(a,b){
    return a==b?true:false;
 }();
 !function(){return 2; }(); //false
 !function(){return 0; }();//true
