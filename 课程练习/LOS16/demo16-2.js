//一般函数中的this(非严格)
function Fthis(){
    console.log(this===window)
 }
 Fthis();//true

 //严格模式
 'use strict'
function Fthis(){
   console.log(this===window)//false
   console.log(this==undefined)//true
}
Fthis();

//可通过this在函数内添加,删除,修改全局对象属性
var a=1,b='ab';
function thisTest(){
    this.a=20;
    delete this.b;
    this.c='新添加的全局变量';
};
thisTest();
console.log(a,c);
 