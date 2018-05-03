//prototype和__proto__的区别

//__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性

/*
每个对象（包括函数、函数的prototype对象）都有一个__proto__属性，她指向创建该对象的函数的prototype属性

每个函数都有一个prototype对象，而只有prototype对象才有constructor(指向对象的原型)属性，其指向该函数本身
*/


//prototype
Function instanceof Object;//true
function Person(name,age){
    this.name=name;
    this.age=age;
    function show(){
        conosle.log(this.name+'age is'+this.age)
    }
};
Person.__proto__
Person.prototype
Person.constructor
console.dir(Person)
var person1=new Person('Tom','19');
person1.__proto__;
console.dir(person1)


