//基于构造函数的原型继承
function Person(name){
    this.name=name;
    this.age=21;
}
Person.prototype.show=function(){
    console.log(this.name,this.age);
}
var obj1=new Person('TOM');
obj1.show();//TOM,21
console.log(obj1.__proto__)//{show: ƒ, constructor: ƒ},name和age不在原型上,在obj1上,show函数在原型上

obj1.age=22;
obj1.show();//TOM,22
console.log(p1.__proto__ === Person.prototype);//true

//对象的constructor 属性用于返回创建该对象的函数，也就是 构造函数
console.log(obj1.constructor)
/*
Person(name){
    this.name=name;
    this.age=21;
}
 */