//多个对象继承于同一个原型,存在原型共享
var objproto={
    x:1,
    y:2
 };
 var obj1=Object.create(objproto);
 var obj2=Object.create(objproto);
 obj1.__proto__.x=11;
 console.log(objproto.x);//11
 console.log(obj2.x)//11
 consoel.log(obj2.__proto__)//{x:11,y:2}