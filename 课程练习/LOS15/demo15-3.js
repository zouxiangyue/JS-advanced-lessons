//js对象的原型链--自有属性和继承属性的操作
var obj={
    x:11,
    y:21,
    z:31
};
obj.hasOwnProperty('x');//true
obj.hasOwnProperty('z');//true
obj1=Object.create(obj);
console.log(obj1.__proto__);//{x: 11, y: 21, z: 31}
obj1.z=32;

obj1.hasOwnProperty('x');//false,x是原型上的
obj1.hasOwnProperty('z');//true,z属于自身
console.log('z' in obj1)//true

console.log(obj1.z);//32
console.log(obj.z);//31

delete obj1.z;
console.log('z' in obj1)//true
console.log(obj1.z)//31,原型的z
console.log(obj.z)//31
obj1.hasOwnProperty('z');//false,自身的z已删除

//删除原型的属性
delete obj1.__proto__.z
console.log(obj1.z)//z没有了
console.log(obj.z);//z没有了