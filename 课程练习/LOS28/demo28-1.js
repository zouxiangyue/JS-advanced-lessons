//数组对象的解构赋值
//以往变量赋值
var a=0,b=1,c=3;

//ES6允许一定模式,从数组和对象中提取值,对变量赋值,被称为解构赋值
//let 和var都允许解构赋值,效果一样
var [a,b,c]=[1,2,3];
console.log(a,b,c);//1,2,4

var [,,third]=['f','s','t']
console.log(third)//t

let [x,...y]=[1,2,3];
console.log(x,y);//1,[2,3]

let [e,[f],g]=[1,[2,3],4]
console.log(e,f,g)//1 2 4

let [e,[...f],g]=[1,[2,3],4]
console.log(e,f,g)//1,[2,3],4

let [a1,a2,...a3]=[1];
console.log(a1,a2,a3)//1 undefined []

let [c1,,c3]=[1,2,3];
console.log(c1,c2);//1 3

let [d1,,...d3]=[1,2,3];
console.log(d1,d2);//1 [3]

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,bar1,fee2);//undefined 1 undefined

//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);//1 2

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);//1 2 4

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

//设置默认值
var [a,b,c]=[null,true,undefined]
console.log(a,b,c);//null,true,undefined

var [a=0,b=1,c=2]=[null,true,undefined]
console.log(a,b,c);//null true 2

var [a,b]=[1,2];[a,b]=[b,a];//a,b交换;
console.log(a,b)//2,1

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = [];//加上这一句,报错
console.log(m1,n1,m2,n2,m3,n3);//1 1 2 2 1 2

//原因:变量提升
var [m1 = 1, n1 = m1] = []; // m1=1; n1=1
var [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
var [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
var [m4 = n4, n4 = 1] = []; 
console.log(m1,n1,m2,n2,m3,n3,m4,n4);//1 1 2 2 1 2 undefined 1