//ES6中的number静态方法

//Number.isFinite()//检查一个数是否有限,只对数值有效
var [a,b,c,d]=[1,-1,null,undefined];
Number.isFinite(a)//true
Number.isFinite(b)//true
Number.isFinite(c)//false
Number.isFinite(d)//false

Number.isFinite(Infinity)//false
Number.isFinite(-Infinity)//false
Number.isFinite(1/0)//false

//传统的全局isFinite会先进行转换,在判断
isFinite('1')//true
isFinite('abc')//false
isFinite(1)//true

//Number.isNaN() //检查一个数是否为NaN
Number.isNaN('NaN')//false
Number.isNaN(NaN)//true
Number.isNaN(1/NaN)//true
Number.isNaN(1/0)//false
Number.isNaN(NaN/1)//true
Number.isNaN(NaN/0)//true
Number.isNaN(NaN/-1)//true
Number.isNaN('abc'/0)//true

isNaN(NaN); // true
isNaN("NaN"); // true

//Number.parseInt()
//ES5中
parseInt('123')//123
parseInt(123.456)//123
parseInt('123dnj')//123
//等价于ES6中
Number.parseInt('123')
Number.parseInt('123,456')
Number.parseInt('123abc')

//Number.parseFloat()
//ES5中
parseFloat(123.456)//123.456
parseFloat('123.45ab')//123.45
//等价于ES6
Number.parseFloat(123.456)//123.456
Number.parseFloat('123.45ab')//123.45

//Number.parseFloat()和Number.parseInt()逐步减少全局性方法，使得语言逐步模块化。

//Number.isInteger()//判断是否为整数
Number.isInteger(123)//true
Number.isInteger(123.24)//false
Number.isInteger('123')//false
Number.isInteger(123.0)//true

isInteger(123)//isIneger is not undefined

//ES6中对Math的扩展
//Math.trunc()方法用于去除一个数的小数部分，返回整数部分
Math.trunc(123.456)//123
Math.trunc('123.456')//123
Math.trunc(0.123)//0
Math.trunc(-0.123)//-0
Math.trunc(-1.123)//-1
Math.trunc('123.456abc')//NaN
Math.trunc('123abc')//NaN

//Math.sign()方法用来判断一个数到底是正数(1)、负数(-1)、还是零(0)
Math.sign(-123)//-1
Math.sign(123)//1
Math.sign(0)//0
Math.sign('0')//0
Math.sign('-123')//-1
Math.sign('123')//1
Math.sign('123af')//NaN