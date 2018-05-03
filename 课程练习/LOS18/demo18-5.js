//数组静态方法（构造器函数对象的方法）

//Array.from()方法从一个类似数组或可迭代对象中创建一个新的数组实例
var a=['a','b','c'];
Array.from(a);//(3) ["a", "b", "c"]
a='123abc';
Array.from(a);//(6) ["1", "2", "3", "a", "b", "c"]
a='123'+'abc';
Array.from(a)//(6) ["1", "2", "3", "a", "b", "c"];

//Array.isArray()判断传递的值是否是一个Array
Array.isArray([1,2,3]);//true
Array.isArray(true);//false
Array.isArray('abcdef');//false
Array.isArray({a:11});//false
Array.isArray([1, 2, 3, 4, 100, -1, true])//true
function fun(a,b){
    console.log(arguments);//Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(arguments));//false
    console.log(Array.isArray(Array.from(arguments)));//true
    
};
fun(1,2,3,4);

function fun(a,b){
    //console.log(argumet.pop())//报错
    console.log(Array.pop.call(arguments))//4
};
fun(1,2,3,4);

//Array.of()创建数组,不考虑参数的数量或类型;
Array.of(2);//[2]
Array.of(1,2,3)//[1,2,3]
Array.of(true);[true];
//与new方式创建数组的区别
var arr=new Array(3)//创建length=3的空数组
var arr=new Array(1,2,3)//[1,2,3]
