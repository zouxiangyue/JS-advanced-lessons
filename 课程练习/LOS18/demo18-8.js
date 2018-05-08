//数组原型方法 非破坏性

//Array.prototype.forEach()//对数组的每个元素执行一次提供的函数
var arr=[1,2,3,'abc'];
arr.forEach(function(a){
   console.log(a);//遍历了数组
})
console.log(arr)//arr不变

//Array.prototype.every()//测试数组的所有元素是否都通过了指定函数的测试,若通过,返回true
//若有不满足的将不再进行后续判断直接返回false
var arr=[1,2,3]
arr.every(
    function(a){
        console.log(a)//1,2,3
        return (typeof(a)=='number')
    }
);//true

arr.every(
    function(a){
        console.log(a)
    })// 1 false

/*
typeof(arr[0])==Number//false
typeof(arr[0])=='number'//true

var a={b:2};
console.log(typeof(a)==Object)//false
typeof(a)=='object'//true
 */

 // Array.prototype.some()测试数组中的某些元素是否通过由提供的函数实现的测试
 //若有不满足的将不再进行后续判断直接返回false
 var arr=[1,2,3,'abc']
arr.some(
    function(a){
        console.log(a)//1
        return (typeof(a)=='number')
    }
);//true

// Array.prototype.map()//创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
arr.map(function(a){
    if(typeof(a)=='number')return 'number'
    else{return 'not number'}
})//(4) ["number", "number", "number", "not number"]

// Array.prototype.filter()//创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
arr.filter(function(a){
   return typeof(a)=='number';
})//(3) [1, 2, 3]

// Array.prototype.reduce()// 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值
var arr=[1,2,3];
arr.reduce(function(a,b){
    return a+b;
})//6
var arr=[1,2,3];
arr.reduce(function(a,b,c){
    return a+b+c;
})//9
var arr=[1,2,3];
arr.reduce(function(a){
    return a+a;
})//4
var arr=[1,2,3];
arr.reduce(function(a){
    return a;
})//1
var arr=[1,2,3];
arr.reduce(function(a){
    return a+a;
})//4
var arr=[1,2,3];
arr.reduce(function(a){
    return a+a+a;
})//9

//Array.prototype.reduceRight()//接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
//与reduce相反
var arr=[1,2,3];
arr.reduceRight(function(a,b){
    return a+b;
})//6
