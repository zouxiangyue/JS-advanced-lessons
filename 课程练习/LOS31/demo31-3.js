//Symbol.for()与Symbol的区别
//Symbol.for()和Symbol都是创建一个Symbol值
var s1=Symbol.for('foo');
var s2=Symbol.for('foo');//S2相当于引用s1,s1和s2指向同一块
s1===s2;//true
console.log(s1,s2)//Symbol(foo) Symbol(foo)

//它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次(也就是30次的都相等)，每次都会返回同一个Symbol值，
// 但是调用Symbol("cat")30次(30次都不相等)，会返回30个不同的Symbol值。

Symbol('foo')==Symbol.for('foo')//false
Symbol.for('foo')===Symbol.for('foo')//true
Symbol('foo')===Symbol.for('foo')//false
Symbol('foo')===Symbol('foo')//false
Symbol('foo')==Symbol('foo')//false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key,也就是只对Symbol.for(key)有效
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined
var s3 = Symbol("foo");
console.log(Symbol.keyFor(s3)); // undefined
var s4 = Symbol.for("foo");
console.log(Symbol.keyFor(s3)); // "foo"