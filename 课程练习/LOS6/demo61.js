// && || !的常见应用
console.log(2>1 && 4<5);//true
console.log(true && false);//false
console.log(false || true);//true
console.log(true && !("2"===2));//true


//两侧不是布尔值
/*当逻辑运算符&&和||两侧的操作数不是布尔类型时

首先将左操作数转换成布尔类型对转换后的左操作数进行逻辑判断（true or false）

根据短路原则返回原始左操作数或原始右操作数

短路原则（忽略对右操作数的判断）
 对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则直接返回原始左操作数
 对于| |，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直  接返回原始右操作数*/
console.log(2 && 4);//4
console.log(2 || 4);//2
console.log(0 && 2);//0
console.log(2 && 0);//0
console.log(0 || 2);//2
console.log(2 || 0);//2

console.log(Null && Undefined);//报错
console.log(null && undefined);//null
console.log({x:2} && Object);//Object
console.log("12" && new String("12"));//String("12")
console.log(null && false);//null

console.log(true && true);//true
console.log(true && 23);//23
console.log(23 && true);//true
console.log(false && 23);//false
console.log(23 && false);//false

var a=(new Boolean(false) || 23);
console.log(a,typeof a);//Boolean(false),object;
var a=(new Boolean(false) && 23);
console.log(a,typeof a)//23,number