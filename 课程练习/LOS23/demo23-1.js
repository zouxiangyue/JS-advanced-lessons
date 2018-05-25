//JSON本质是字符串,可以描述js中的任意对象
//JSON是JS对象字符串形式的表示法
//JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null 
console.log(typeof JSON)//object
console.log(JSON instanceof String);//false
console.log(JSON instanceof Function)//false
//JSON不是构造器,没有new方法构造一个对象

var json1='[1,2,3]';
var json2='dkaladjkf';
var json3='{"a":1,"b":[1,2,3],"xyz",{"y":1}}';//(数组和对象)属性名称必须是双引号括起来的字符串；最后一个属性后不能有逗号。
var json4='23';
var json5='xy'
console.log(json3)//{"a":1,"b":[1,2,3],"xyz",{"y":1}}
console.log(typeof json3)//"string"
console.log(json3 instanceof Object);//false

/*
JSON对象包含两个方法: 用于解析 JavaScript Object Notation  (JSON) 的 parse() 方法，
以及将对象/值转换为 JSON字符串的 stringify() 方法。
除了这两个方法, JSON这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。
 */

var fun= new Function("x","y","return x+y");
fun(2,3);//5

var j='["x","y","return x+y"]';
var foo=Function(j[0],j[1],j[2])//报错

var j2=["x","y","return x+y;"];
var foo=new Function(j2[0],j2[1],j2[2])
foo(2,3)//5



