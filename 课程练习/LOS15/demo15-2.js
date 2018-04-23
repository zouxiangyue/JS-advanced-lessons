//js的语言继承方式为原型继承方式
//任何方式创建的对象都有原型对象,最原始的对象是null

//通过对象的_proto_属性来访问原型对象
var obj={
    num:10,
    str:'hello',
    show:function(){
        return this.num;
    }
}
var newObj=Object.create(obj);
console.log(newObj.__proto__===obj)//true
newObj.age=20;
console.log(newObj.__proto__===obj)//true
console.log(newObj.__proto__===Object.__proto__)//false
console.log(newObj.__proto__===Object.prototype)//false

console.log(Object.__proto__)//ƒ () { [native code] }
console.log(Object.__proto__.__proto__)//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.__proto__.__proto__.__proto__)// null
console.log(newObj.__proto__)//{num: 10, str: "hello", show: ƒ}
console.log(newObj.__proto__.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(newObj.__proto__.__proto__.__proto__);//null

console.log(Object.__proto__.__proto__===newObj.__proto__.__proto__)//true

//改变newObj的原型链(尽量不要改变对象的原型)
newObj.__proto__={
    num:20,
    str:'hi',
    show:function(){
        return this.str
    }}
console.log(newObj.__proto__)//{num: 20, str: "hi", show: ƒ}