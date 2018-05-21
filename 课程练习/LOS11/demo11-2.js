//变量污染
//原因:js中没有块作用域
var a=0;
 for(var a=0;a<3;a++){//因为没有块作用域此处的a为全局变量
     console.log(a)
 };
 console.log(a)//3
 //声明了两个a,for循环中的a把外部的a覆盖掉 

 //利用IIFE解决变量污染
 var a=0;
 (function(){
    for(var a=0;a<3;a++){//此处的a变为为局部变量.在IIFE的作用域内
        console.log(a)
    };
 })();
 console.log(a)//0

 //同一文件内的变量污染问题,尤其是异步执行的情况下
 //window.onload中代码是在文档全部加载完毕后执行的，也就相当于异步。又如setTimeout/setInterval,document.onclick等都是异步处理
 var userId=123;
 document.onclick=function(){
     console.log("userId",userId);
 }
console.log(userId);//123

/*
if(true){
    var userId=456;
    console.log("userId",userId);
}
console.log(userId)//456
*/
(function(){
    if(true){
       var userId=456;
       console.log("userId",userId);
   }
})();
console.log(userId)//123
