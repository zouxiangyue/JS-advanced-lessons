//ES5中的变量提升(var),ES6中没有变量提升(let)
console.log(a)//undefined
var a;
console.log(a)//undefined
a=0;
console.log(a)//0

//等价于
var a;
console.log(a)//undefined
console.log(a)//undefined
a=0;
console.log(a)//0

var b=0;
function foo(){
    console.log(b);//undefined
    var b=1;
    console.log(b);//0
}
foo();

// let和const的暂时性死区特性
// 只要块级作用域内存在let，它所声明的变量就“绑定”在这个区域，不再受外部影响
// let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//养成良好习惯，使用变量前声明

//ES6 let和const没有变量提升
console.log(x,y);//报错
let x=0;
const y=0;
console.log(x,y)

var b=0;
function foo(){
    console.log(b);//报错
    let b=1;
    console.log(b);
}
foo();