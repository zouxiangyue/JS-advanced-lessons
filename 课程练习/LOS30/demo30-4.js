//ES6中的剩余操作符
function foo(){//ES5中用arguments获得参数列表
    console.log(arguments)
}
foo(1,2,3,4)

//使用...Rest
function foo(...y){
    console.log(y)
}
foo(1,2,3,4)//(4) [1, 2, 3, 4]

function foo(x,...y){
    console.log(x,y)
}
foo(1,2,3)//1 [2,3]
foo(1);//1 []
foo(1,[2,3])//1 [[2,3]]
foo([1,2,3])//[1,2,3] []
foo();//undefined []

function foo(x,...y,z){//报错,...Rest必须在最后
    console.log(x,y,z);
}

//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
var arr=[1,2,3]
console.log(...arr)//1 2 3

//call和apply之间的转换,通过..Rest和...Spread
function a(x,y,z){console.log(x,y,z)};
a.call({},1,2);// 1 2 undefined

function a(x,y,z){console.log(x,y,z)};
a.apply({},[1,2,3]);// 1 2 3

function a(x,y,z){console.log(x,y,z)};
var arr=[1,2,3]
a.apply({},arr);// 1 2 3
a.call({},arr[0],arr[1],arr[2])// 1 2 3
a.call({},...arr)// 1 2 3

function test(){console.log(Array.from(arguments))}
test(1,2,3)// (3) [1, 2, 3]

function test(){console.log(...arguments)}
test(1,2,3)// 1 2 3