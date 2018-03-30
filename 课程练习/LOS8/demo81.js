//函数的typeof是Function,也是Object,window
function fun1(){
    return true;
}
var fun2=new function(){};
console.log(fun1 instanceof Function);//true
console.log(fun1 instanceof Object);//true
console.log(fun1===window.fun1);//true
console.log(fun1 instanceof window.fun1);//false
console.log(typeof fun2);//Object

//Array Date,Math,JSON;

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
 
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true



console.log(typeof new new Function());
//object
console.log(typeof new new new Function());//报错