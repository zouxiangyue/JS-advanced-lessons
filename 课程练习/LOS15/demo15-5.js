//基于构造函数实现的原型继承-属性操作
function Myobj(){};
Myobj.prototype.x=11;
Myobj.prototype.y=21;
Myobj.prototype.z=31;
Myobj.prototype.show=function(){
    console.log(this.x,this.y);
}
var newobj=new Myobj();
console.log(newobj.__proto__);//{x: 11, y: 21, z: 31, show: ƒ, constructor: ƒ}
console.log(obj.constructor)

newobj.y=22;
newobj.z=32;
console.log(newobj.y);//22
console.log(newobj.__proto__.y)//21
console.log(newobj.z);//31
console.log(newobj.__proto__.z)//32

console.log(Myobj.prototype.z);//31;

//删除原型的属性
delete newobj.__proto__.z;
console.log(newobj.__proto__.z)//z没了
console.log(Myobj.__proto__.z)//z没了
console.log(newobj.z)//32