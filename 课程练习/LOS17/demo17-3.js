//避免原型继承(call,new)
function Person(name,age){
    this.name=name;
    this.age=age;
};
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(name,age,id){
    Person.call(this,name,age);//把Person当做普通函数来调用
    this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student('a',22,1);//name,age,id是在对象上的属性
var s2=new Student('b',23,2);
console.log(s1);
console.log(s2)
console.log(s1.__proto__)
console.log(s2.__proto__)
/*Student {name: 22, age: 1, id: "a"}
VM146:16 Student {name: 23, age: 2, id: "b"}
VM146:17 Person {constructor: ƒ}constructor: ƒ Student(id,name,age)arguments: nullcaller: nulllength: 3name: "Student"prototype: Person {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM146:8[[Scopes]]: Scopes[1]__proto__: Object
VM146:18 Person {constructor: ƒ}*/
console.log(s1.__proto__.__proto__)//showName()函数在s1原型的原型上
//VM198:1 {showName: ƒ, constructor: ƒ}