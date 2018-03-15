var a1=11;
var a2=3.14;
var str="kajf";
var arr1=[1,2,'a'];
var arr2=new Array(12)
var t=true;
var f=false;
var n=null;
var u=undefined;
var fun=function f(a){};
var obj1={a:2,b:3};
var obj2=new Object;
var d=new Date;

console.log(typeof a1);//number
console.log(typeof a2)
console.log(typeof str);//
console.log(typeof arr1);//object
console.log(typeof arr2);//object
console.log(typeof t);
console.log(typeof f);//boolean
console.log(typeof n);//null
console.log(typeof u);//undefined
console.log(typeof fun);//function
console.log(typeof obj1);//object
console.log(typeof obj1.a);//number
console.log(typeof obj2);
console.log(typeof d);//object

console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//object

console.log(typeof NaN);//number
console.log(typeof Infinity);//number

console.log({}instanceof Object);//true
console.log([]instanceof Object);//true
console.log([]instanceof Array);//true

console.log(NaN==NaN)//false
console.log(1===1.0);//true
console.log(3/0);//Infinity
console.log(0/3);//0
console.log(-3/0);//-Intinity
console.log("\n")//空白