//原型共享
function Person(name){
    this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(id){
    this.id=id;
}
Student.prototype=new Person('Mike');
var s1=new Student(2016011001);
var s2=new Student(2016011002);
console.log(s1.__proto__);
console.log(s1.__proto__.__proto__);
console.log(s2.__proto__);
console.log(s2.__proto__.__proto__);
console.log(s1.name,s1.age,s1.id)
console.log(s2.name,s2.age,s2.id)
s1.showName();
s2.showName();
/*Person {name: "Mike"}
VM111:15 {age: 22, showName: ƒ, constructor: ƒ}
VM111:16 Person {name: "Mike"}
VM111:17 {age: 22, showName: ƒ, constructor: ƒ}
VM111:18 Mike 22 2016011001
VM111:19 Mike 22 2016011002
VM111:6 Mike
VM111:6 Mike*/