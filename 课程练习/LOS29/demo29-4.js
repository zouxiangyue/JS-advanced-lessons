//ES6中Array的新增的静态方法
//Array.from()//可将一个类数组或可遍历的对象转化为数组
Array.from([1,2,'a'])//(3) [1, 2, "a"]
Array.from('from')//(4) ["f", "r", "o", "m"]
Array.from({a:1,b:2,c:3})//[]
Array.from(null)//报错
Array.from(undefined)//报错

var obj={
    '0':1,//下标+value
    '1':2,
    '2':3,
     length:3
}
//ES6
Array.from(obj)//(3) [1, 2, 3]
//ES5
Array.prototype.slice.call(obj)//(3) [1, 2, 3]

Array.from({length:3})//[undefined, undefined, undefined]
//Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个对象
//所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组


function ArrayFrom(){
    console.log(arguments)//Arguments(3) [0, 1, "a", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    var arg1=Array.from(arguments)//ES6
    var arg2=Array.prototype.slice.call(arguments)//ES5
    var arg3=[...arguments]//扩展运算符转换
    console.log(arg1)//(3) [0, 1, "a"]
    console.log(arg2)//(3) [0, 1, "a"]
    console.log(arg3)//(3) [0, 1, "a"]
}
ArrayFrom(0,1,'a')

//Array.from()的第二个参数
Array.from([1,2,3],function(x){
    return x*x;
});//(3) [1, 4, 9]});
Array.from({length:4},(v,i)=>i)
//(4) [0, 1, 2, 3]

//等价于map() 方法,创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
[1,2,3,4].map(function(x){return x*x});//(4) [1, 4, 9, 16]


Array.of()//可将一组值,转化为数组,弥补构造函数Array()的不足,不考虑参数的数量或类型
new Array(7)//(7) [empty × 7]
new Array(2,3,4,5)//(4) [2, 3, 4, 5]
new Array()//[]
new Array('a')//["a"]
new Array(null)//[null]
new Array(undefined)//[undefined]
new Array(false)//[false]

Array.of(7)//[7]
Array.of()//[]
Array.of(1,2,3)//(3) [1, 2, 3]
Array.of('a',null,false,undefined)//(4) ["a", null, false, undefined]
Array.of(3).length//1

function ArrayOf(){
    return [].slice.call(arguments);
    //return Array.prototype.slice.call(arguments);//(3) [1, 2, 3]
}
ArrayOf(1,2,3)//(3) [1, 2, 3]

//ES6中Array新增的原型方法
//Array.prototype.copyWithin(target,start,end) 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小
//start:复制的开始位置,可选
//end:复制的结束位置,可选
//target:将复制的部分开始粘贴的位置,必选
var arr=[0,1,2,3,4]
arr.copyWithin(0)//(5) [0, 1, 2, 3, 4]
//只有一个参数,默认将整个数组复制一遍
arr.copyWithin(2)//(5) [0, 1, 0, 1, 2]
var arr=[0,1,2,3,4]
arr.copyWithin(0,3)//(5) [3, 4, 2, 3, 4]
arr.copyWithin(0,2,4)//(5) [2, 3, 2, 3, 4]
console.log(arr)//(5) [2, 3, 2, 3, 4]
//copyWithin为可破坏性,改变了原来数组的值,不改变其length

//若参数为负数,length+参数转换即可
var arr=[0,1,2,3,4]
arr.copyWithin(0,-3,-1)//(5) [2, 3, 2, 3, 4]

// Array.prototype.find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
var arr=[0,1,2,3,4,5];
arr.find(function(e){
    return e>4;
    //retrun e>6;//返回undefined
})//5
//find(function(element,index,arr))的三个参数,
//element当前检查的元素,index当前检查的位置,arr当前正在检查的数组
[1,12,2,34,5,67].find(function(ele,index,arr){
    if(ele%2==0){
        console.log(ele,index);
    }
})
//12 1
//2 2
//34 3

//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
[12,4,32,56].findIndex(function(e){
    return e>50;
})//3

//属性结构赋值和object的默认
'a'in object;


var obj={a:1,b:2}
var obj2=Object.create(obj);
obj2.c=3;
Object.keys(obj2);
["c"]
obj2
{c: 3}
'a' in obj2;
true
obj2.__proto__
{a: 1, b: 2}


