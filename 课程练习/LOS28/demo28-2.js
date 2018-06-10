//对象的解构赋值
var {bar1,foo1}={foo1:'a',bar1:'b'};
console.log(bar1,foo1);//b a

var {bar2}={foo2:'a',bar2:'b'};
console.log(bar2);//b
console.log(foo2);// 报错 foo3 is not defined

var {foo3:bar3}={foo3:'a',bar3:'d'}//把foo3的值赋值给bar3
console.log(bar3);//a
console.log(foo3);// 报错 foo3 is not defined
