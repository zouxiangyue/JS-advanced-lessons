//ES6对函数的扩展

//新增的箭头函数
var max=function (a,b){return a>b?a:b}
max(2,3)//3

var max=(a,b)=>(a>b?a:b);
max(2,3)//3

var f=v=>v+1;
f(2)//3
var f=(v)=>v+1;
f(3)//3
//var max=a,b=>(a>b?a:b);//报错
var max=(a,b)=>(a>b?a:b);

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});
//"Li Ming"

//注意:当返回值是一个对象时,在外层加一个括号
var foo=(a,b)=>({a1:a,b1:b})
foo(1,2)//{a1: 1, b1: 2}


function a(x,y,z){console.log(x,y,z)};
a.call({},1,2);
VM284:1 1 2 undefined
undefined
function a(x,y,z){console.log(x,y,z)};
a.apply({},[1,2,3]);
VM290:1 1 2 3

function a(x,y,z){console.log(x,y,z)};
var arr=[1,2,3]
undefined
a.apply({},arr);
VM296:1 1 2 3
a.call({},arr[0],arr[1],arr[2])
VM296:1 1 2 3
undefined
a.call({},...arr)
VM296:1 1 2 3
undefined

function test(){console.log(Array.from(arguments))}
test(1,2,3)
VM351:1 (3) [1, 2, 3]
undefined
function test(){console.log(...arguments)}
test(1,2,3)
VM358:1 1 2 3