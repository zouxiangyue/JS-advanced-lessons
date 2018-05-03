//避免原型共享(create,constructer)
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
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructer=Student;
var s1=new Student('a',22,1);
var s2=new Student('b',23,2);
console.log(s1);
console.log(s2)
console.log(s1.__proto__);
console.log(s2.__proto__);